import { Link } from "react-router-dom";
import { MangaPanel } from "./MangaPanel";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MangaPanel className="mt-8">
      <div className="p-6 flex flex-col items-center gap-6">
        <div className="font-body text-sm text-muted-foreground text-center">
          New puzzle every day at midnight
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4 border-t-2 border-foreground w-full">
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
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-4 border-t-2 border-foreground w-full">
          <a
            href="https://www.facebook.com/profile.php?id=61587457495365"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity flex items-center gap-2 font-display text-sm"
            aria-label="Follow us on Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            FACEBOOK
          </a>
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-muted-foreground text-center">
          © {currentYear} usedtobeen
        </p>
      </div>
    </MangaPanel>
  );
};
