import { PageLayout } from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout title="About AniHunter">
      <p className="text-lg mb-6">
        AniHunter is a daily anime guessing game. One puzzle per day, eight
        guesses to nail it. Think you know your anime? Prove it.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">How to Play</h2>
      <p className="mb-4">
        Every day at midnight, we reveal a new mystery anime. You get 8 attempts
        to guess the title. Start with a handful of clues, and each wrong guess
        unlocks more:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>A spoiler-free synopsis snippet</li>
        <li>Main character details</li>
        <li>Genres and themes</li>
        <li>The studio behind it</li>
        <li>Release year and episode count</li>
      </ul>
      <p className="mb-4">
        Running low on guesses? After your 5th attempt, we start revealing
        letters from the title — first letters of each word, then last letters.
        Use them wisely.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Why This Exists</h2>
      <p className="mb-4">
        We grew up on anime. Saturday morning Toonami blocks, late-night Adult
        Swim runs, forum arguments about subs vs dubs. AniHunter is our way of
        celebrating that obsession — a quick daily ritual that tests whether all
        those hours of watching actually stuck.
      </p>
      <p className="mb-4">
        The game pulls from decades of anime: mainstream hits, cult classics,
        hidden gems. Some days you'll guess instantly. Others will have you
        second-guessing everything you thought you knew.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Who Made This</h2>
      <p className="mb-4">
        AniHunter is an independent project run by a small group of anime fans.
        No corporate backing, no venture capital — just people who wanted this
        to exist and built it. We curate each puzzle, maintain the site, and
        actually read the feedback you send.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Share Your Score</h2>
      <p className="mb-4">
        Won on the first guess? Squeaked by on attempt eight? Share your results
        and challenge friends to beat your streak. The daily format means
        everyone gets the same puzzle — no spoilers, just bragging rights.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Stay Connected</h2>
      <p className="mb-4">
        Follow us on{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61587474022583"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Facebook
        </a>
        {" "}for updates, or drop us a line at{" "}
        <a
          href="mailto:contact@anihunter.com"
          className="underline hover:no-underline"
        >
          contact@anihunter.com
        </a>
        . We're always looking for feedback, corrections, and anime
        recommendations.
      </p>

      <p className="text-muted-foreground mt-8">
        New puzzle every day at midnight. Good luck.
      </p>
    </PageLayout>
  );
};

export default About;
