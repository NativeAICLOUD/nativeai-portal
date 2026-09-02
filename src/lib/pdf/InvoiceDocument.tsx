import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { COMPANY_INFO } from '@/lib/invoice-data';

const CURRENCY_SYMBOLS: Record<string, string> = {
  EUR: '€',
  CHF: 'CHF',
  USD: '$',
  GBP: '£',
};

function formatMoney(amount: number, currency: string) {
  const symbol = CURRENCY_SYMBOLS[currency] || currency;
  const value = (amount ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${symbol} ${value}`;
}

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: 'Helvetica', color: '#111111' },
  title: { fontSize: 24, fontWeight: 700, marginBottom: 24 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  metaBlock: { flexDirection: 'column', gap: 4 },
  label: { fontSize: 8, color: '#888888', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 },
  value: { fontSize: 10, marginBottom: 8 },
  columns: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  column: { flexDirection: 'column', maxWidth: '45%' },
  table: { marginBottom: 16 },
  tableHeaderRow: { flexDirection: 'row', borderBottom: '1 solid #111111', paddingBottom: 6, marginBottom: 6 },
  tableRow: { flexDirection: 'row', borderBottom: '1 solid #eeeeee', paddingVertical: 6 },
  colDescription: { flex: 3 },
  colUnitCost: { flex: 1, textAlign: 'right' },
  colQty: { flex: 1, textAlign: 'right' },
  colAmount: { flex: 1, textAlign: 'right' },
  tableHeaderText: { fontSize: 8, color: '#888888', textTransform: 'uppercase', letterSpacing: 0.5 },
  totals: { alignSelf: 'flex-end', width: '45%', marginBottom: 20 },
  totalsRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3 },
  totalsLabel: { color: '#555555' },
  grandTotalRow: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6, marginTop: 3, borderTop: '1 solid #111111' },
  grandTotalLabel: { fontWeight: 700 },
  grandTotalValue: { fontWeight: 700 },
  note: { fontSize: 8.5, color: '#666666', marginBottom: 16, lineHeight: 1.4 },
  terms: { fontSize: 9, marginBottom: 20 },
  footer: { borderTop: '1 solid #eeeeee', paddingTop: 12, fontSize: 8.5, color: '#666666', lineHeight: 1.6 },
  footerTitle: { fontSize: 8, color: '#888888', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 },
});

export type InvoiceDocumentProps = {
  invoiceNumber: string;
  issueDate: Date;
  dueDate: Date;
  client: {
    name: string;
    company?: string;
    addressLines?: string[];
  };
  lineItems: { description: string; unitCost: number; qty: number; amount: number }[];
  subtotal: number;
  taxRate: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  exchangeRateNote?: string;
  terms: string;
};

export default function InvoiceDocument(props: InvoiceDocumentProps) {
  const { invoiceNumber, issueDate, dueDate, client, lineItems, subtotal, taxRate, tax, shipping, total, currency, exchangeRateNote, terms } = props;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Invoice</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaBlock}>
            <Text style={styles.label}>Invoice Number</Text>
            <Text style={styles.value}>{invoiceNumber}</Text>
          </View>
          <View style={styles.metaBlock}>
            <Text style={styles.label}>Date of Issue</Text>
            <Text style={styles.value}>{format(issueDate, 'dd/MM/yyyy')}</Text>
          </View>
          <View style={styles.metaBlock}>
            <Text style={styles.label}>Due Date</Text>
            <Text style={styles.value}>{format(dueDate, 'dd/MM/yyyy')}</Text>
          </View>
        </View>

        <View style={styles.columns}>
          <View style={styles.column}>
            <Text style={styles.label}>Billed To</Text>
            <Text style={styles.value}>{client.name}</Text>
            {client.company ? <Text style={styles.value}>{client.company}</Text> : null}
            {(client.addressLines || []).map((line, i) => (
              <Text key={i} style={styles.value}>{line}</Text>
            ))}
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>{COMPANY_INFO.name}</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.colDescription, styles.tableHeaderText]}>Description</Text>
            <Text style={[styles.colUnitCost, styles.tableHeaderText]}>Unit Cost</Text>
            <Text style={[styles.colQty, styles.tableHeaderText]}>Qty</Text>
            <Text style={[styles.colAmount, styles.tableHeaderText]}>Amount</Text>
          </View>
          {lineItems.map((item, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.colDescription}>{item.description}</Text>
              <Text style={styles.colUnitCost}>{item.unitCost}</Text>
              <Text style={styles.colQty}>{item.qty}</Text>
              <Text style={styles.colAmount}>{formatMoney(item.amount, currency)}</Text>
            </View>
          ))}
        </View>

        <View style={styles.totals}>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Subtotal</Text>
            <Text>{formatMoney(subtotal, currency)}</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Tax Rate</Text>
            <Text>{taxRate}%</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Tax</Text>
            <Text>{formatMoney(tax, currency)}</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Shipping</Text>
            <Text>{formatMoney(shipping, currency)}</Text>
          </View>
          <View style={styles.grandTotalRow}>
            <Text style={styles.grandTotalLabel}>Invoice Total</Text>
            <Text style={styles.grandTotalValue}>{formatMoney(total, currency)}</Text>
          </View>
        </View>

        {exchangeRateNote ? <Text style={styles.note}>{exchangeRateNote}</Text> : null}

        <Text style={styles.terms}>Terms: {terms}</Text>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Bank Account Details</Text>
          <Text>Tax Number: {COMPANY_INFO.taxNumber}</Text>
          <Text>Contact: {COMPANY_INFO.contact}</Text>
          <Text>Bank Address: {COMPANY_INFO.bankAddress}</Text>
          <Text>SWIFT: {COMPANY_INFO.swift}</Text>
          <Text>Country: {COMPANY_INFO.country}</Text>
          <Text>Bank Name: {COMPANY_INFO.bankName}</Text>
          <Text>IBAN: {COMPANY_INFO.iban}</Text>
        </View>
      </Page>
    </Document>
  );
}
