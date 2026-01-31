import { PageLayout } from "@/components/PageLayout";

const Terms = () => {
  return (
    <PageLayout title="Terms of Service">
      <p className="text-lg mb-6">
        These are the ground rules for using AniHunter. Nothing complicated —
        we're a trivia game, not a legal minefield.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">What AniHunter Is</h2>
      <p className="mb-4">
        AniHunter is a free entertainment site. We make anime trivia puzzles
        for fun. We don't provide educational certifications, professional
        anime consulting, or any services beyond "guess this show."
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">We're Independent</h2>
      <p className="mb-4">
        AniHunter has no affiliation with any anime studios, production
        committees, streaming platforms, manga publishers, or licensors. We're
        fans making a fan project. All anime titles, characters, and related
        properties belong to their respective creators and rights holders.
      </p>
      <p className="mb-4">
        References to specific anime are for trivia purposes only and don't
        imply endorsement or partnership.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Accuracy</h2>
      <p className="mb-4">
        We research our puzzles, but anime databases aren't perfect and neither
        are we. Episode counts vary by region. Release dates depend on who you
        ask. Some shows have multiple official English titles. We do our best,
        but if you spot an error, tell us — don't use AniHunter to settle bets
        or win arguments.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Liability</h2>
      <p className="mb-4">
        AniHunter is provided as-is. We're not liable for incorrect trivia
        answers, lost streaks due to browser issues, debates started at watch
        parties, or any other consequences of using the site. Play at your own
        (extremely low) risk.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Fair Play</h2>
      <p className="mb-4">
        Use AniHunter the way it's meant to be used: play the daily puzzle,
        share your results, have fun. Don't scrape content, don't try to break
        things, don't use bots, and don't do anything that ruins the experience
        for others.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Updates</h2>
      <p className="mb-4">
        We may revise these terms if needed. Changes take effect when posted.
        If you keep using AniHunter after an update, you're accepting the new
        terms.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Questions</h2>
      <p className="mb-4">
        Something unclear? Contact us at{" "}
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

export default Terms;
