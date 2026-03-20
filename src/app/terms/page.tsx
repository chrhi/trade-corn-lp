import type { Metadata } from "next";

import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of Trydecorn’s trading journal software and related services.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" lastUpdated="March 20, 2026">
      <p>
        These Terms of Service (“Terms”) govern your access to and use of
        Trydecorn’s software, websites, and related services (the “Services”).
        By creating an account, starting a trial, or using the Services, you agree
        to these Terms. If you are using the Services on behalf of an
        organization, you represent that you have authority to bind that
        organization.
      </p>

      <h2>1. The Services</h2>
      <p>
        Trydecorn provides tools to log, organize, and analyze trading-related
        information (for example, trades, notes, and statistics). We may update,
        modify, or discontinue features with reasonable notice where practicable.
        We do not guarantee uninterrupted or error-free operation.
      </p>

      <h2>2. Not investment, tax, or legal advice</h2>
      <p>
        The Services are for <strong>informational and record-keeping purposes
        only</strong>. Nothing in the Services constitutes financial, investment,
        tax, or legal advice. Trading involves substantial risk of loss.
        Trydecorn does not recommend any security, strategy, or course of action.
        You alone are responsible for your trading decisions and compliance
        with laws and regulations applicable to you.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be at least the age of majority in your jurisdiction (and at
        least 18 where required) to use the Services. You may not use the
        Services if you are prohibited from receiving them under applicable law.
      </p>

      <h2>4. Accounts and security</h2>
      <p>
        You must provide accurate registration information and keep your
        credentials confidential. You are responsible for activity under your
        account. Notify us promptly of any unauthorized use. We may suspend or
        terminate accounts that violate these Terms or pose security risk.
      </p>

      <h2>5. Trials, subscriptions, and billing</h2>
      <p>
        Paid access, trials, and renewals may be processed through third-party
        platforms (such as Whop). Fees, trial length, renewal terms, refunds, and
        taxes are as shown at checkout and in the applicable partner’s terms.
        You authorize us and our billing partners to charge your payment method
        according to the plan you select. Failure to pay may result in
        suspension or termination of access.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Use the Services in violation of law or third-party rights, including
          intellectual property and privacy rights;
        </li>
        <li>
          Attempt to probe, scan, or test vulnerabilities, or breach security or
          authentication measures;
        </li>
        <li>
          Interfere with or disrupt the Services or servers/networks connected to
          them;
        </li>
        <li>
          Use automated means (e.g., scraping, bots) to access the Services in
          excess of what we reasonably permit, without written consent;
        </li>
        <li>
          Upload malware, unlawful content, or content that infringes others’
          rights;
        </li>
        <li>
          Misrepresent your identity or affiliation, or use the Services to
          facilitate fraud or market manipulation.
        </li>
      </ul>

      <h2>7. Your content</h2>
      <p>
        You retain ownership of data and content you submit (“User Content”).
        You grant Trydecorn a non-exclusive, worldwide license to host, process,
        back up, and display User Content solely to provide and improve the
        Services and as described in our Privacy Policy. You represent that you
        have the rights necessary to grant this license. You are responsible for
        the accuracy and legality of User Content.
      </p>

      <h2>8. Our intellectual property</h2>
      <p>
        The Services, including software, branding, documentation, and design,
        are owned by Trydecorn or its licensors and are protected by intellectual
        property laws. Except for the limited rights expressly granted in these
        Terms, no rights are transferred to you.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        The Services may integrate with or link to third-party services
        (authentication, payments, hosting, etc.). Those services are governed by
        their own terms and privacy policies. We are not responsible for
        third-party services.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED{" "}
        <strong>“AS IS” AND “AS AVAILABLE,”</strong> WITHOUT WARRANTIES OF ANY
        KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
        NON-INFRINGEMENT. WE DO NOT WARRANT THAT DATA OR ANALYTICS IN THE
        SERVICES ARE ACCURATE, COMPLETE, OR SUITABLE FOR ANY PARTICULAR PURPOSE.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL TRYDECORN OR ITS
        SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA,
        GOODWILL, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATED TO THESE
        TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRYDECORN’S AGGREGATE LIABILITY
        FOR CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES WILL
        NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO TRYDECORN FOR THE
        SERVICES IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) ONE HUNDRED
        U.S. DOLLARS (US $100), IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS.
      </p>
      <p>
        Some jurisdictions do not allow certain limitations; in those
        jurisdictions, our liability is limited to the fullest extent permitted
        by law.
      </p>

      <h2>12. Indemnity</h2>
      <p>
        You will defend, indemnify, and hold harmless Trydecorn and its
        affiliates, officers, directors, employees, and agents from any claims,
        damages, losses, and expenses (including reasonable attorneys’ fees)
        arising from your User Content, your use of the Services, or your
        violation of these Terms or applicable law.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using the Services at any time. We may suspend or terminate
        access if you breach these Terms, if required by law, or to protect the
        Services or other users. Provisions that by their nature should survive
        (including ownership, disclaimers, limitations of liability, and dispute
        resolution) will survive termination.
      </p>

      <h2>14. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, USA,
        excluding conflict-of-law rules, unless mandatory consumer protection
        laws in your country of residence provide otherwise. Courts in Delaware
        shall have exclusive jurisdiction for disputes subject to this section,
        unless applicable law requires a different forum. You and Trydecorn agree
        to resolve disputes on an individual basis; to the fullest extent
        permitted by law, class actions and jury trials are waived.
      </p>
      <h2>15. Export</h2>
      <p>
        You may not use or export the Services in violation of U.S. or other
        export control and sanctions laws.
      </p>

      <h2>16. Changes to these Terms</h2>
      <p>
        We may modify these Terms from time to time. We will post the updated
        Terms on this page and update the “Last updated” date. For material
        changes, we may provide additional notice. If you continue to use the
        Services after changes become effective, you agree to the revised Terms.
        If you do not agree, you must stop using the Services.
      </p>

      <h2>17. Contact</h2>
      <p>
        For questions about these Terms, use the support options provided in the
        Trydecorn application or on this website.
      </p>
    </LegalShell>
  );
}
