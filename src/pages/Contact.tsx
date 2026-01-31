import { PageLayout } from "@/components/PageLayout";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout title="Contact Us">
      <p className="text-lg mb-6">
        Found a bug? Spotted wrong info in a puzzle? Have an anime you think we
        should feature? We want to hear it.
      </p>

      <div className="my-8 p-6 border-4 border-foreground bg-background">
        <div className="flex items-center justify-center gap-3">
          <Mail className="w-6 h-6" />
          <a
            href="mailto:contact@anihunter.com"
            className="font-display text-xl md:text-2xl hover:underline underline-offset-4"
          >
            contact@anihunter.com
          </a>
        </div>
      </div>

      <h2 className="font-display text-xl mt-8 mb-4">What to Send</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Bug reports:</strong> Something not working right? Tell us
          what happened, what browser you're using, and we'll look into it.
        </li>
        <li>
          <strong>Trivia corrections:</strong> Wrong episode count? Incorrect
          studio? Different release year? Let us know with a source and we'll
          fix it.
        </li>
        <li>
          <strong>Anime suggestions:</strong> Got a title you think deserves to
          be a puzzle? We're always looking for good additions.
        </li>
        <li>
          <strong>General feedback:</strong> Thoughts on the game, feature ideas,
          or just want to say what's working (or not) — all useful.
        </li>
      </ul>

      <h2 className="font-display text-xl mt-8 mb-4">Response Time</h2>
      <p className="mb-4">
        We're a small operation. Expect a reply within a few days for anything
        that needs one. Bug reports and corrections get priority. We read
        everything, even if we can't respond to every message individually.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Follow Along</h2>
      <p className="mb-4">
        For announcements and updates, follow us on{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61587474022583"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Facebook
        </a>
        .
      </p>

      <p className="text-muted-foreground mt-8">
        Thanks for playing — and for helping make AniHunter better.
      </p>
    </PageLayout>
  );
};

export default Contact;
