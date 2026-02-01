import { PageLayout } from "@/components/PageLayout";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout title="Contact Us">
      <p className="text-lg mb-6">
        Found a bug? Spotted wrong info in a puzzle? Have a nostalgic memory
        you think deserves to be featured? We want to hear it.
      </p>

      <div className="my-8 p-6 border-4 border-foreground bg-background">
        <div className="flex items-center justify-center gap-3">
          <Mail className="w-6 h-6" />
          <a
            href="mailto:hello@usedtobeen.com"
            className="font-display text-xl md:text-2xl hover:underline underline-offset-4"
          >
            hello@usedtobeen.com
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
          <strong>Trivia corrections:</strong> Wrong date? Incorrect details?
          Different regional name? Let us know with a source and we'll fix it.
        </li>
        <li>
          <strong>Nostalgia suggestions:</strong> Know something that used to
          exist and would make a great puzzle? We're always looking for
          additions.
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

      <p className="text-muted-foreground mt-8">
        Thanks for playing — and for helping make usedtobeen better.
      </p>
    </PageLayout>
  );
};

export default Contact;
