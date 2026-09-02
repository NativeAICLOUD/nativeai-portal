import { NextRequest, NextResponse } from 'next/server';
import { verifyJwtToken } from '@/lib/jwt';

export function requireAdmin(req: NextRequest):
  | { ok: true; decoded: any }
  | { ok: false; response: NextResponse } {
  const accessToken = req.headers.get('authorization');
  const token = accessToken ? accessToken.split(' ')[1] : '';
  const decoded: any = verifyJwtToken(token);

  if (!accessToken || !decoded || decoded.email !== process.env.ADMIN_EMAIL) {
    return {
      ok: false,
      response: NextResponse.json({ error: 'unauthorized' }, { status: 403 }),
    };
  }

  return { ok: true, decoded };
}

export function isAdminSession(email?: string | null): boolean {
  return !!email && email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
}
