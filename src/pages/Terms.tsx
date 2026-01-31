import { PageLayout } from "@/components/PageLayout";

const Terms = () => {
  return (
    <PageLayout title="Terms of Service">
      <p className="text-lg mb-6">
        Welcome to AniHunter! These terms are pretty simple — we're just a trivia
        game, not a bank. Here's what you need to know.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">It's Just for Fun</h2>
      <p className="mb-4">
        AniHunter is an entertainment site. We're here to test your anime
        knowledge and maybe help you discover some titles you haven't seen yet.
        That's it. We're not providing professional advice, educational services,
        or anything official.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">We're Not Affiliated</h2>
      <p className="mb-4">
        AniHunter is an independent fan project. We are not affiliated with,
        endorsed by, or connected to any anime studios, production companies,
        streaming platforms, or manga publishers. All anime titles, character
        names, and related content belong to their respective creators and
        copyright holders.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Accuracy Not Guaranteed</h2>
      <p className="mb-4">
        We do our best to make sure our trivia is accurate, but we're human (and
        anime fans, which means we occasionally argue about canon). If you spot
        an error, let us know! But please don't cite AniHunter as a source for
        your anime dissertation.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Limitation of Liability</h2>
      <p className="mb-4">
        AniHunter is provided "as is" without any warranties. We're not
        responsible for any issues that arise from using the site — including
        but not limited to: missed trivia answers, spoilers you weren't ready
        for, or the urge to rewatch your favorite series at 2 AM.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Acceptable Use</h2>
      <p className="mb-4">
        Please use AniHunter responsibly. Don't try to break the site, scrape
        our content, or do anything that would make us sad. Play fair, have fun,
        and share your scores with friends.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Changes to These Terms</h2>
      <p className="mb-4">
        We might update these terms occasionally. If we do, we'll post the new
        version here. Continued use of AniHunter after changes means you accept
        the updated terms.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Questions?</h2>
      <p className="mb-4">
        If you have any questions about these terms, reach out at{" "}
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
