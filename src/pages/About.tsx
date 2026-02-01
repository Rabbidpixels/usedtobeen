import { PageLayout } from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout title="About usedtobeen">
      <p className="text-lg mb-6">
        usedtobeen is a daily nostalgia trivia game. One puzzle per day about
        something that no longer exists. You get 8 guesses. You remember this.
        Or maybe you don't.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">How to Play</h2>
      <p className="mb-4">
        Every day at midnight, we reveal a new mystery from the past. You get 8
        attempts to guess what it is. Start with a handful of clues, and each
        wrong guess unlocks more:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>The category and era it belongs to</li>
        <li>Distinctive features and characteristics</li>
        <li>Historical context and significance</li>
        <li>Why it disappeared or what replaced it</li>
        <li>A final memorable detail</li>
      </ul>
      <p className="mb-4">
        Running low on guesses? After your 5th attempt, we start revealing
        letters from the answer — first letters of each word, then last letters.
        Use them wisely.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Why This Exists</h2>
      <p className="mb-4">
        Some things disappear slowly. Others vanish overnight. Either way, they
        leave behind a strange kind of absence — the store that used to be on
        the corner, the sound a dial-up modem made, the smell of a Blockbuster
        on a Friday night.
      </p>
      <p className="mb-4">
        usedtobeen is a daily ritual for people who remember. We feature
        discontinued products, closed businesses, obsolete technology, forgotten
        fads, and cultural moments that exist now only in memory. Some days
        you'll guess instantly. Others will have you questioning whether you
        actually lived through the '90s.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Who Made This</h2>
      <p className="mb-4">
        usedtobeen is an independent project built by people who miss things
        that don't exist anymore. No corporate backing, no venture capital —
        just a small team that wanted this to exist and made it happen.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Share Your Score</h2>
      <p className="mb-4">
        Got it on the first guess? Barely scraped by on attempt eight? Share
        your results and see if your friends remember what you remember. The
        daily format means everyone gets the same puzzle — no spoilers, just
        collective nostalgia.
      </p>

      <p className="text-muted-foreground mt-8">
        New puzzle every day at midnight. Good luck remembering.
      </p>
    </PageLayout>
  );
};

export default About;
