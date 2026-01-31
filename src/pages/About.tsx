import { PageLayout } from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout title="About AniHunter">
      <p className="text-lg mb-6">
        AniHunter is a daily anime guessing game built by fans, for fans. Every
        day at midnight, a new anime title awaits — can you guess it before
        running out of clues?
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">How It Works</h2>
      <p className="mb-4">
        Each day, we pick an anime and give you 8 chances to guess it. You start
        with a few basic clues, and with each wrong guess, we reveal more hints
        to help you narrow it down:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Synopsis snippets (no spoilers, we promise)</li>
        <li>Character descriptions</li>
        <li>Genre and themes</li>
        <li>Studio and release year</li>
        <li>Episode count and more</li>
      </ul>
      <p className="mb-4">
        After 5 guesses, we start revealing letters from the title. It's a
        race against time and your own memory!
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Why We Made This</h2>
      <p className="mb-4">
        Remember staying up late watching anime, discovering new series through
        recommendations, and arguing with friends about which show is the best?
        AniHunter captures that feeling. It's a daily dose of nostalgia mixed
        with the satisfaction of proving you really do know your stuff.
      </p>
      <p className="mb-4">
        Whether you've been watching anime since the Toonami days or just
        started binging on streaming platforms, there's something here for
        everyone. From classics that shaped the medium to modern hits that
        broke the internet — we cover it all.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Built by Fans</h2>
      <p className="mb-4">
        AniHunter was created by anime enthusiasts who wanted a fun way to
        test their knowledge and connect with other fans. We're not a big
        company — just people who love anime and thought this would be cool.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Share Your Results</h2>
      <p className="mb-4">
        Nailed it on the first guess? Scraped by on your last try? Either way,
        share your results! Challenge your friends, compare streaks, and see
        who really deserves the title of anime expert.
      </p>
      <p className="mb-4">
        New puzzle drops every day at midnight. See you there!
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Get in Touch</h2>
      <p className="mb-4">
        Got feedback? Spotted an error? Just want to say hi? Reach us at{" "}
        <a
          href="mailto:contact@anihunter.com"
          className="underline hover:no-underline"
        >
          contact@anihunter.com
        </a>
        .
      </p>
    </PageLayout>
  );
};

export default About;
