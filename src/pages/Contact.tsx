import { PageLayout } from "@/components/PageLayout";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout title="Contact Us">
      <p className="text-lg mb-6">
        Got something to say? We'd love to hear from you! Whether it's
        feedback, bug reports, or just anime recommendations — our inbox
        is open.
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

      <h2 className="font-display text-xl mt-8 mb-4">What We Want to Hear</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Bug reports:</strong> Something broken? Let us know and we'll
          fix it.
        </li>
        <li>
          <strong>Corrections:</strong> Spotted an error in our trivia? We
          appreciate the heads up.
        </li>
        <li>
          <strong>Suggestions:</strong> Ideas to make AniHunter better? We're
          all ears.
        </li>
        <li>
          <strong>General feedback:</strong> Love it? Hate it? Tell us why.
        </li>
      </ul>

      <h2 className="font-display text-xl mt-8 mb-4">Response Time</h2>
      <p className="mb-4">
        We're a small team, so responses might take a day or two. But we read
        every message and do our best to reply when a response is needed.
      </p>

      <h2 className="font-display text-xl mt-8 mb-4">Follow Us</h2>
      <p className="mb-4">
        Want to stay updated? Follow us on social media for announcements,
        behind-the-scenes content, and the occasional anime meme.
      </p>
      <p className="mb-4">
        <a
          href="https://www.facebook.com/profile.php?id=61587474022583"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Find us on Facebook
        </a>
      </p>

      <p className="text-muted-foreground mt-8">
        Thanks for playing AniHunter!
      </p>
    </PageLayout>
  );
};

export default Contact;
