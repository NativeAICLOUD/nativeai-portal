import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { z } from 'zod';
import { VOICE_AGENT_LIMITS as L, VOICE_AGENT_MODEL, VOICE_AGENT_SYSTEM } from '@/lib/voice-agent';

const bodySchema = z.object({
  message: z.string().trim().min(1).max(L.messageChars),
  history: z
    .array(z.object({ role: z.enum(['user', 'assistant']), content: z.string().max(1000) }))
    .max(L.historyTurns * 2)
    .optional(),
});

/* Best-effort per-instance rate limit — enough to stop a single visitor hammering the
   public demo; Fluid Compute reuses instances, but this is not a global limit. */
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + L.windowMs });
    if (hits.size > 5000) for (const [k, v] of hits) if (v.resetAt < now) hits.delete(k);
    return false;
  }
  entry.count += 1;
  return entry.count > L.requestsPerWindow;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: 'invalid_request' }, { status: 400 });
  }

  const { message, history = [] } = parsed.data;

  try {
    const { text } = await generateText({
      model: VOICE_AGENT_MODEL,
      system: VOICE_AGENT_SYSTEM,
      messages: [...history.slice(-L.historyTurns * 2), { role: 'user', content: message }],
      maxOutputTokens: L.maxOutputTokens,
      timeout: L.timeoutMs,
    });
    return NextResponse.json({ reply: text.trim() });
  } catch (err) {
    // Missing AI_GATEWAY_API_KEY locally, gateway outage or timeout — the client falls back gracefully.
    console.error('[voice-agent] generation failed:', err);
    return NextResponse.json({ error: 'unavailable' }, { status: 503 });
  }
}
