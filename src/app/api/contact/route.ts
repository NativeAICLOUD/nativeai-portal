import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, topic, message } = body as {
      name: string;
      email: string;
      company?: string;
      phone?: string;
      topic: string;
      message?: string;
    };

    if (!name || !email || !topic) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'NativeCloud <noreply@nativeai.cloud>',
      to: ['artan@nativeai.cloud'],
      replyTo: email,
      subject: `New consultation request — ${name}`,
      html: buildEmail({ name, email, company, phone, topic, message }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] email error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

function buildEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  topic: string;
  message?: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:10px 16px 10px 0;color:#999;font-size:13px;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f0ece8;">${label}</td>
           <td style="padding:10px 0;font-size:14px;color:#0a0e1a;border-bottom:1px solid #f0ece8;">${value}</td>
         </tr>`
      : '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;padding:0;background:#f4f1ee;font-family:Inter,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 24px rgba(0,0,0,0.06);">

        <!-- Header -->
        <tr>
          <td style="background:#0a0e1a;padding:28px 32px;">
            <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.35);">NativeCloud</p>
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">New Consultation Request</h1>
            <p style="margin:6px 0 0;font-size:13px;color:#e89a78;">Schedule-a-Call form submission</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:28px 32px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('Name', data.name)}
              ${row('Email', `<a href="mailto:${data.email}" style="color:#e89a78;text-decoration:none;">${data.email}</a>`)}
              ${row('Company', data.company || '')}
              ${row('Phone', data.phone || '')}
              ${row('Topic', `<span style="background:#e89a78;color:#fff;font-size:12px;font-weight:600;padding:2px 10px;border-radius:100px;">${data.topic}</span>`)}
            </table>
          </td>
        </tr>

        <!-- Message -->
        ${data.message ? `
        <tr>
          <td style="padding:8px 32px 24px;">
            <div style="background:#faf7f4;border-left:3px solid #e89a78;border-radius:4px;padding:14px 16px;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#999;">Message</p>
              <p style="margin:0;font-size:14px;color:#333;line-height:1.65;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>
          </td>
        </tr>` : ''}

        <!-- CTA -->
        <tr>
          <td style="padding:24px 32px 32px;border-top:1px solid #f0ece8;">
            <a href="mailto:${data.email}"
               style="display:inline-block;background:#e89a78;color:#fff;padding:12px 24px;border-radius:100px;text-decoration:none;font-weight:600;font-size:14px;">
              Reply to ${data.name}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#faf7f4;padding:16px 32px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#bbb;">© ${new Date().getFullYear()} NativeCloud · nativeai.cloud</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
