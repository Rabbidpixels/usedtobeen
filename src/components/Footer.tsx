import { MangaPanel } from "./MangaPanel";

export const Footer = () => {
  return (
    <MangaPanel className="mt-8">
      <div className="p-6 flex flex-col items-center gap-4">
        <div className="font-body text-sm text-muted-foreground text-center">
          New puzzle every day at midnight
        </div>
        <a
          href="https://www.facebook.com/profile.php?id=61587474022583"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity hover:opacity-80"
        >
          <img
            src="/footer.png"
            alt="Follow us on Facebook"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </a>
      </div>
    </MangaPanel>
  );
};
