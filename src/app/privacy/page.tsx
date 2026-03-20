import type { Metadata } from "next";

import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Trydecorn collects, uses, and protects your information when you use our trading journal service.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" lastUpdated="March 20, 2026">
      <p>
        This Privacy Policy describes how Trydecorn (“we,” “us,” or “our”)
        handles personal information when you visit our marketing site or use
        the Trydecorn application and related services (together, the
        “Services”). By using the Services, you agree to the practices
        described here. If you do not agree, please do not use the Services.
      </p>

      <h2>1. Information we collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account and authentication data.</strong> For example, name,
          email address, and identifiers provided when you sign up or sign in.
          Authentication may be processed by our identity provider (e.g., Clerk
          or a comparable service).
        </li>
        <li>
          <strong>Journal and trading data you submit.</strong> Trade logs,
          notes, tags, uploads (such as screenshots), strategy labels, and other
          content you choose to store in the journal.
        </li>
        <li>
          <strong>Billing and subscription data.</strong> When you subscribe or
          start a trial, our payment or membership partner (e.g., Whop) may
          collect payment method details, billing address, and transaction
          history. We typically receive limited billing metadata (such as
          subscription status), not full card numbers.
        </li>
        <li>
          <strong>Usage and technical data.</strong> IP address, device and
          browser type, general location derived from IP, pages viewed, and
          diagnostic or performance data—collected through logs, cookies, and
          similar technologies as described below.
        </li>
        <li>
          <strong>Communications.</strong> Content you send us (e.g., support
          requests) and related metadata.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide, operate, and improve the Services;</li>
        <li>Create and secure your account and authenticate you;</li>
        <li>
          Process trials, subscriptions, and payments through our billing
          partners;
        </li>
        <li>
          Respond to support requests and communicate service-related notices;
        </li>
        <li>
          Monitor security, prevent fraud and abuse, and comply with legal
          obligations;
        </li>
        <li>
          Analyze usage in aggregate or de-identified form to improve product
          experience.
        </li>
      </ul>

      <h2>3. Legal bases (EEA, UK, and similar regions)</h2>
      <p>
        Where applicable privacy law requires a “legal basis,” we rely on one or
        more of: performance of a contract with you; legitimate interests (such
        as securing the Services and improving features), balanced against your
        rights; your consent where required; and compliance with legal
        obligations.
      </p>

      <h2>4. Cookies and similar technologies</h2>
      <p>
        We and our vendors may use cookies, local storage, and similar
        technologies for session management, preferences, security, analytics,
        and (where applicable) marketing. You can control cookies through your
        browser settings; disabling some cookies may limit certain features.
      </p>

      <h2>5. How we share information</h2>
      <p>
        We do not sell your personal information. We may share information
        with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> who assist us (e.g., hosting,
          authentication, analytics, email delivery, customer support tools),
          subject to contractual confidentiality and security obligations;
        </li>
        <li>
          <strong>Payment and subscription partners</strong> (e.g., Whop) to
          process trials, purchases, and subscription lifecycle events;
        </li>
        <li>
          <strong>Professional advisors</strong> (e.g., lawyers, accountants)
          where necessary;
        </li>
        <li>
          <strong>Authorities</strong> when required by law, legal process, or to
          protect rights, safety, and security.
        </li>
      </ul>
      <p>
        If we are involved in a merger, acquisition, or asset sale, your
        information may be transferred as part of that transaction, subject to
        this Policy or equivalent protections.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain information for as long as your account is active or as needed
        to provide the Services, comply with law, resolve disputes, and enforce
        agreements. Journal content is retained until you delete it or close your
        account, subject to backup and legal retention requirements. Aggregated
        or de-identified data may be retained longer.
      </p>

      <h2>7. Security</h2>
      <p>
        We implement reasonable technical and organizational measures designed to
        protect information against unauthorized access, loss, or alteration. No
        method of transmission or storage is 100% secure; we cannot guarantee
        absolute security.
      </p>

      <h2>8. International transfers</h2>
      <p>
        We may process information in the United States and other countries
        where we or our vendors operate. Where required, we use appropriate
        safeguards (such as standard contractual clauses) for cross-border
        transfers.
      </p>

      <h2>9. Your rights and choices</h2>
      <p>
        Depending on your location, you may have rights to access, correct,
        delete, or export your personal information; object to or restrict
        certain processing; withdraw consent where processing is consent-based;
        and lodge a complaint with a supervisory authority. To exercise rights,
        contact us using the details below. You may also manage some
        information directly in your account settings.
      </p>

      <h2>10. Children’s privacy</h2>
      <p>
        The Services are not directed to children under 16 (or the minimum age
        required in your jurisdiction). We do not knowingly collect personal
        information from children. If you believe we have collected such
        information, contact us and we will take appropriate steps to delete it.
      </p>

      <h2>11. California residents</h2>
      <p>
        If the California Consumer Privacy Act (CCPA/CPRA) applies, you may have
        additional rights regarding access, deletion, correction, and opt-out of
        certain sharing. We do not “sell” or “share” personal information for
        cross-context behavioral advertising as those terms are commonly defined
        under California law. To submit a request, contact us below.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the
        revised version on this page and update the “Last updated” date. For
        material changes, we may provide additional notice (e.g., email or
        in-app notification). Continued use after changes constitutes acceptance
        of the updated Policy where permitted by law.
      </p>

      <h2>13. Contact</h2>
      <p>
        For privacy questions or requests, contact us through the support
        channel indicated in the Trydecorn application or on this website.
      </p>
    </LegalShell>
  );
}
