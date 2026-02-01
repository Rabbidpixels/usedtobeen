import { PageLayout } from "@/components/PageLayout";

const Terms = () => {
  return (
    <PageLayout title="Terms of Service">
      <p className="text-lg mb-6">
        These are the ground rules for using usedtobeen. Nothing complicated —
        we're a trivia game, not a legal minefield.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">What usedtobeen Is</h2>
      <p className="mb-4">
        usedtobeen is a free entertainment site. We make nostalgia trivia
        puzzles for fun. We don't provide historical certifications, professional
        consulting, or any services beyond "guess this thing from the past."
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">We're Independent</h2>
      <p className="mb-4">
        usedtobeen has no affiliation with any of the brands, companies, or
        products featured in our puzzles. We're not sponsored by anyone, and
        mentioning something doesn't mean we endorse it (or that it endorses us).
      </p>
      <p className="mb-4">
        All trademarks, product names, and company names belong to their
        respective owners. References are for trivia and educational purposes
        only.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Accuracy</h2>
      <p className="mb-4">
        We research our puzzles, but history is messy and memories are unreliable.
        Dates vary by source. Some things had different names in different places.
        We do our best, but if you spot an error, tell us — don't use usedtobeen
        to settle bets or win arguments about when exactly something stopped
        existing.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Liability</h2>
      <p className="mb-4">
        usedtobeen is provided as-is. We're not liable for incorrect trivia
        answers, lost streaks due to browser issues, heated debates about whether
        something counts as "discontinued," or any other consequences of using
        the site. Play at your own (extremely low) risk.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Fair Play</h2>
      <p className="mb-4">
        Use usedtobeen the way it's meant to be used: play the daily puzzle,
        share your results, have fun remembering. Don't scrape content, don't
        try to break things, don't use bots, and don't do anything that ruins
        the experience for others.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Updates</h2>
      <p className="mb-4">
        We may revise these terms if needed. Changes take effect when posted.
        If you keep using usedtobeen after an update, you're accepting the new
        terms.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Questions</h2>
      <p className="mb-4">
        Something unclear? Contact us at{" "}
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

export default Terms;
