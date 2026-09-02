import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import InvoiceDocument, { InvoiceDocumentProps } from '@/lib/pdf/InvoiceDocument';

export async function renderInvoicePdf(props: InvoiceDocumentProps): Promise<Buffer> {
  return renderToBuffer(React.createElement(InvoiceDocument, props) as any);
}

export function invoiceToPdfProps(invoice: any): InvoiceDocumentProps {
  return {
    invoiceNumber: invoice.invoiceNumber,
    issueDate: new Date(invoice.issueDate),
    dueDate: new Date(invoice.dueDate),
    client: {
      name: invoice.client.name,
      company: invoice.client.company,
      addressLines: invoice.client.addressLines,
    },
    lineItems: invoice.lineItems,
    subtotal: invoice.subtotal,
    taxRate: invoice.taxRate,
    tax: invoice.tax,
    shipping: invoice.shipping,
    total: invoice.total,
    currency: invoice.currency,
    exchangeRateNote: invoice.exchangeRateNote,
    terms: invoice.terms,
  };
}
