import LegalPage from '@/components/LegalPage';
import { site, pageMeta } from '@/lib/site';

export const metadata = pageMeta({ title: 'Payment & Refund Policy', description: 'Deposits, milestone payments, accepted payment methods, currencies, invoices and refunds for Amber Solutions projects and maintenance plans.', path: '/payment-and-refund-policy/' });

export default function PaymentPolicy() {
  return (
    <LegalPage title="Payment & Refund Policy" path="/payment-and-refund-policy/" updated="October 24, 2026">
      <p>This policy summarises how payments work. The exact terms for each project are set out in your written proposal and service agreement, which take priority over this page.</p>
      <h2>Quotes</h2>
      <p>Every project is quoted after we understand your requirements. Quotes are valid for 30 days unless stated otherwise.</p>
      <h2>Currencies</h2>
      <p>Philippine clients are invoiced in Philippine pesos (PHP). International clients are invoiced in US dollars (USD).</p>
      <h2>Accepted payment methods</h2>
      <ul>
        <li><strong>Philippine clients:</strong> PayMongo (GCash, Maya, credit/debit cards, online banking) and bank transfer</li>
        <li><strong>International clients:</strong> Wise bank transfer; other methods by agreement</li>
      </ul>
      <p>Transfer and conversion fees charged by your bank or payment provider are paid by the sender unless agreed otherwise.</p>
      <h2>Project payments</h2>
      <ul>
        <li>A deposit is required before work starts.</li>
        <li>The balance is paid in milestones tied to agreed deliverables.</li>
        <li>Final files, code transfer and launch happen after the final payment.</li>
      </ul>
      <h2>Maintenance plans</h2>
      <p>Maintenance plans are billed monthly in advance. After the initial term in your agreement, plans continue month to month and can be cancelled with written notice before the next billing date.</p>
      <h2>Invoices</h2>
      <p>We issue official invoices as a registered Philippine business.</p>
      <h2>Late payments</h2>
      <p>Work may pause when an invoice is overdue. It resumes once payment is received.</p>
      <h2>Refunds</h2>
      <ul>
        <li>Deposits cover discovery and planning and are non-refundable once work has started.</li>
        <li>If a project is cancelled, you pay for work completed up to that point; any prepaid amount for work not yet done is refunded.</li>
        <li>Monthly maintenance fees for a month already started are non-refundable.</li>
        <li>Third-party costs paid on your behalf (domains, licences, subscriptions) are non-refundable.</li>
      </ul>
      <h2>Questions</h2>
      <p>Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  );
}
