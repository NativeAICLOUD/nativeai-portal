import { Resend } from 'resend';
import { renderInvoicePdf, invoiceToPdfProps } from '@/lib/pdf/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInvoiceEmail(invoice: any) {
  const pdfBuffer = await renderInvoicePdf(invoiceToPdfProps(invoice));

  await resend.emails.send({
    from: 'NativeCloud <noreply@nativeai.cloud>',
    to: [invoice.client.email],
    subject: `Invoice ${invoice.invoiceNumber} from Native IT`,
    html: buildEmail(invoice),
    attachments: [
      {
        filename: `Invoice-${invoice.invoiceNumber}.pdf`,
        content: pdfBuffer,
      },
    ],
  });
}

function buildEmail(invoice: any) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;padding:0;background:#f4f1ee;font-family:Inter,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 24px rgba(0,0,0,0.06);">

        <tr>
          <td style="background:#0a0e1a;padding:28px 32px;">
            <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Native IT</p>
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">Invoice ${invoice.invoiceNumber}</h1>
            <p style="margin:6px 0 0;font-size:13px;color:#e89a78;">Due ${new Date(invoice.dueDate).toLocaleDateString('en-GB')}</p>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px 32px;">
            <p style="margin:0 0 16px;font-size:14px;color:#333;line-height:1.65;">
              Hi ${invoice.client.name},<br/><br/>
              Please find attached invoice <strong>${invoice.invoiceNumber}</strong> for the amount due. Payment is due by ${new Date(invoice.dueDate).toLocaleDateString('en-GB')}.
            </p>
            <p style="margin:0;font-size:14px;color:#333;">Thank you for your business.</p>
          </td>
        </tr>

        <tr>
          <td style="background:#faf7f4;padding:16px 32px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#bbb;">© ${new Date().getFullYear()} Native IT</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
