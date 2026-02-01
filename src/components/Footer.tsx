import { Link } from "react-router-dom";
import { MangaPanel } from "./MangaPanel";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MangaPanel className="mt-8">
      <div className="p-6 flex flex-col items-center">
        <div className="font-body text-sm text-muted-foreground text-center mb-3">
          New puzzle every day at midnight
        </div>

        {/* Facebook Link - large image */}
        <a
          href="https://www.facebook.com/profile.php?id=61587457495365"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity mb-3"
          aria-label="Follow us on Facebook"
        >
          <img src="/facebook.png" alt="Follow us on Facebook" className="h-48 md:h-56 lg:h-64 w-auto object-contain" />
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 pt-3 border-t-2 border-foreground w-full">
          <Link
            to="/"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            ABOUT
          </Link>
          <Link
            to="/privacy"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            PRIVACY
          </Link>
          <Link
            to="/terms"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            TERMS
          </Link>
          <Link
            to="/contact"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            CONTACT
          </Link>
        </nav>

        {/* Copyright */}
        <p className="font-body text-xs text-muted-foreground text-center mt-4">
          © {currentYear} usedtobeen
        </p>
      </div>
    </MangaPanel>
  );
};
