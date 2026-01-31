import { PageLayout } from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <p className="text-lg mb-6">
        Hey there! We want to be upfront about how AniHunter handles your data.
        No confusing legal jargon here — just straight talk about what we collect
        and why.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">What We Store Locally</h2>
      <p className="mb-4">
        AniHunter uses your browser's localStorage to save your game progress,
        streaks, and preferences (like dark mode). This data never leaves your
        device — it stays right there in your browser. If you clear your browser
        data, your progress resets. That's it.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Cookies</h2>
      <p className="mb-4">
        We use cookies to remember your preferences and keep the site running
        smoothly. These are small files stored on your device that help us
        recognize you when you come back. Nothing creepy, just the basics to
        make your experience better.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Advertising</h2>
      <p className="mb-4">
        We use Google AdSense to display ads on AniHunter. Google and its partners
        may use cookies to serve ads based on your browsing history. You can opt
        out of personalized advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Google's Ad Settings
        </a>
        .
      </p>
      <p className="mb-4">
        Third-party vendors, including Google, use cookies to serve ads based on
        your prior visits to this website or other websites. You can also opt out
        of third-party vendor cookies by visiting the{" "}
        <a
          href="https://optout.networkadvertising.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Network Advertising Initiative opt-out page
        </a>
        .
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Analytics</h2>
      <p className="mb-4">
        We may use analytics tools to understand how people use AniHunter — stuff
        like which pages are popular and how long people play. This helps us make
        the game better. The data is aggregated and doesn't personally identify you.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Your Consent</h2>
      <p className="mb-4">
        By using AniHunter, you're agreeing to this privacy policy. If we make
        any significant changes, we'll update this page. We won't suddenly start
        doing anything weird with your data — this is just a trivia game, after all.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Questions?</h2>
      <p className="mb-4">
        If you have any questions about how we handle your data, feel free to
        reach out at{" "}
        <a
          href="mailto:contact@anihunter.com"
          className="underline hover:no-underline"
        >
          contact@anihunter.com
        </a>
        .
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Last updated: January 2025
      </p>
    </PageLayout>
  );
};

export default Privacy;
