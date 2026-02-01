import { PageLayout } from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <p className="text-lg mb-6">
        We believe in being transparent about data. Here's the plain-English
        version of what usedtobeen collects, why, and how you stay in control.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">The Short Version</h2>
      <p className="mb-4">
        usedtobeen is a free trivia game. We don't require accounts or collect
        personal information like your name or email. We use cookies for ads
        and save your game progress locally on your device. That's the gist.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">What We Store on Your Device</h2>
      <p className="mb-4">
        We use localStorage (a browser feature) to save:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Your current game progress and guess history</li>
        <li>Your win streak and stats</li>
        <li>Your theme preference (light or dark mode)</li>
      </ul>
      <p className="mb-4">
        This data stays on your device and is never sent to our servers. If you
        clear your browser data or switch devices, this information resets.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Cookies and Advertising</h2>
      <p className="mb-4">
        We display ads through Google AdSense to keep usedtobeen free. Google
        and its advertising partners use cookies to show you relevant ads based
        on your interests and browsing activity across websites.
      </p>
      <p className="mb-4">
        You can control personalized advertising:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Google Ad Settings
          </a>
          {" "}— manage Google's ad personalization
        </li>
        <li>
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            NAI Opt-Out
          </a>
          {" "}— opt out of interest-based ads from participating networks
        </li>
        <li>
          <a
            href="https://optout.aboutads.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            DAA Opt-Out
          </a>
          {" "}— Digital Advertising Alliance opt-out tool
        </li>
      </ul>

      <h2 className="font-display text-xl mt-8 mb-4">Analytics</h2>
      <p className="mb-4">
        We use analytics to understand how people play usedtobeen — things like
        page views, popular features, and general usage patterns. This data is
        aggregated and anonymous. We can't identify individual visitors.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Children's Privacy</h2>
      <p className="mb-4">
        usedtobeen is designed for general audiences. We do not knowingly collect
        personal information from children under 13. Since we don't require
        registration or collect identifying information, children can play
        without providing personal data. If you believe a child has somehow
        submitted personal information to us, please contact us and we'll
        remove it promptly.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Your Rights</h2>
      <p className="mb-4">
        Since your game data is stored locally on your device, you have full
        control. You can clear it anytime through your browser settings. For
        ad-related data, use the opt-out links above.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        If we update this policy, we'll revise the date below. We won't make
        changes that reduce your privacy protections without notice.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Contact</h2>
      <p className="mb-4">
        Questions about privacy? Email us at{" "}
        <a
          href="mailto:hello@usedtobeen.com"
          className="underline hover:no-underline"
        >
          hello@usedtobeen.com
        </a>
        .
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Last updated: February 2026
      </p>
    </PageLayout>
  );
};

export default Privacy;
