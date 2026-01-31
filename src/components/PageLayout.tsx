import { Link } from "react-router-dom";
import { MangaPanel } from "./MangaPanel";
import { SiteFooter } from "./SiteFooter";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-page">
      <div className="container max-w-3xl py-6 md:py-12 px-4">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-display text-sm hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO GAME
        </Link>

        {/* Page Content */}
        <MangaPanel thick>
          <div className="p-6 md:p-8">
            <h1 className="font-display text-3xl md:text-4xl mb-6 border-b-4 border-foreground pb-4">
              {title}
            </h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none font-body">
              {children}
            </div>
          </div>
        </MangaPanel>

        {/* Footer */}
        <SiteFooter />
      </div>
    </div>
  );
};
