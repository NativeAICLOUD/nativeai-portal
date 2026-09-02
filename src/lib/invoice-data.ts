export const COMPANY_INFO = {
  name: 'Native IT',
  taxNumber: '4043024538775',
  contact: '+389 70 226 432',
  bankAddress: '11 OKTOMVRI 7 1000 SKOPJE',
  swift: 'STOBMK 2X',
  country: 'North Macedonia',
  bankName: 'STOPANSKA BANKA AD-SKOPJE',
  iban: 'MK07200004201539472',
  defaultTerms: 'Payment is due within 5 days.',
};

export function formatInvoiceNumber(issueDate: Date): string {
  const mm = String(issueDate.getMonth() + 1).padStart(2, '0');
  const dd = String(issueDate.getDate()).padStart(2, '0');
  const yyyy = issueDate.getFullYear();
  return `${mm}-${dd}${yyyy}`;
}
