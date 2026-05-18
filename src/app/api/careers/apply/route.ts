import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const name      = form.get('name') as string;
    const email     = form.get('email') as string;
    const phone     = form.get('phone') as string;
    const jobTitle  = form.get('jobTitle') as string;
    const jobSlug   = form.get('jobSlug') as string;
    const why       = form.get('why') as string;
    const cover     = form.get('cover') as string;
    const cvFile    = form.get('cv') as File | null;

    if (!name || !email || !jobTitle) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const attachments: { filename: string; content: Buffer }[] = [];

    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({ filename: cvFile.name, content: buffer });
    }

    await resend.emails.send({
      from: 'NativeCloud Careers <noreply@nativeai.cloud>',
      to: ['careers@nativeai.cloud'],
      replyTo: email,
      subject: `New application: ${jobTitle} — ${name}`,
      attachments,
      html: buildEmail({ name, email, phone, jobTitle, jobSlug, why, cover, cvName: cvFile?.name }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[careers/apply] error:', err);
    return NextResponse.json({ error: 'Failed to send application' }, { status: 500 });
  }
}

function buildEmail(data: {
  name: string;
  email: string;
  phone?: string;
  jobTitle: string;
  jobSlug: string;
  why?: string;
  cover?: string;
  cvName?: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:10px 16px 10px 0;color:#999;font-size:13px;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f0ece8;">${label}</td>
           <td style="padding:10px 0;font-size:14px;color:#0a0e1a;border-bottom:1px solid #f0ece8;">${value}</td>
         </tr>`
      : '';

  const block = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 32px 24px;">
           <div style="background:#faf7f4;border-left:3px solid #e89a78;border-radius:4px;padding:14px 16px;">
             <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#999;">${label}</p>
             <p style="margin:0;font-size:14px;color:#333;line-height:1.65;">${value.replace(/\n/g, '<br>')}</p>
           </div>
         </td></tr>`
      : '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;padding:0;background:#f4f1ee;font-family:Inter,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 24px rgba(0,0,0,0.06);">

        <tr>
          <td style="background:#0a0e1a;padding:28px 32px;">
            <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.35);">NativeCloud Careers</p>
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">New Application</h1>
            <p style="margin:6px 0 0;font-size:13px;color:#e89a78;">${data.jobTitle}</p>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('Name', data.name)}
              ${row('Email', `<a href="mailto:${data.email}" style="color:#e89a78;text-decoration:none;">${data.email}</a>`)}
              ${row('Phone', data.phone || '')}
              ${row('CV', data.cvName ? `📎 ${data.cvName}` : 'Not attached')}
            </table>
          </td>
        </tr>

        ${block('Why this role', data.why || '')}
        ${block('Cover letter', data.cover || '')}

        <tr>
          <td style="padding:24px 32px 32px;border-top:1px solid #f0ece8;">
            <a href="mailto:${data.email}"
               style="display:inline-block;background:#e89a78;color:#fff;padding:12px 24px;border-radius:100px;text-decoration:none;font-weight:600;font-size:14px;">
              Reply to ${data.name}
            </a>
            <a href="https://nativeai.cloud/careers/${data.jobSlug}"
               style="display:inline-block;margin-left:12px;background:#f5f5f5;color:#0a0e1a;padding:12px 24px;border-radius:100px;text-decoration:none;font-weight:600;font-size:14px;">
              View job posting
            </a>
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
</html>`;
}
