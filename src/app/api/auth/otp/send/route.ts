import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { Resend } from 'resend';
import db from '@/lib/db';
import Otp from '@/models/Otp';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    const hashed = await bcrypt.hash(code, 10);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await db.connect();
    await Otp.deleteMany({ email });
    await Otp.create({ email, code: hashed, expiresAt });

    await resend.emails.send({
      from: 'NativeCloud <noreply@nativeai.cloud>',
      to: [email],
      subject: `${code} — your NativeCloud login code`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"/></head>
        <body style="margin:0;padding:0;background:#f4f1ee;font-family:Inter,-apple-system,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
            <tr><td align="center">
              <table width="100%" style="max-width:480px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 24px rgba(0,0,0,0.06);">
                <tr>
                  <td style="background:#0a0e1a;padding:28px 32px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.35);">NativeCloud</p>
                    <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">Your login code</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 32px 28px;text-align:center;">
                    <p style="margin:0 0 20px;font-size:14px;color:#666;">Use this code to sign in. It expires in <strong>10 minutes</strong>.</p>
                    <div style="display:inline-block;background:#f5f5f5;border-radius:12px;padding:20px 40px;">
                      <span style="font-size:36px;font-weight:800;letter-spacing:10px;color:#0a0e1a;font-family:monospace;">${code}</span>
                    </div>
                    <p style="margin:24px 0 0;font-size:12px;color:#aaa;">If you didn't request this, you can safely ignore this email.</p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#faf7f4;padding:16px 32px;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#bbb;">© ${new Date().getFullYear()} NativeCloud · nativeai.cloud</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[otp/send]', err);
    return NextResponse.json({ error: 'Failed to send code.' }, { status: 500 });
  }
}
