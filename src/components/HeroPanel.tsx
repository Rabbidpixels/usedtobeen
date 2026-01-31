import { MangaPanel } from "./MangaPanel";
import { ThemeToggle } from "./ThemeToggle";

export const HeroPanel = () => {
  return (
    <MangaPanel thick className="relative overflow-hidden">
      {/* Banner Image Container */}
      <div className="relative w-full">
        {/* Full-width banner image */}
        <img
          src="/banner.png"
          alt="AniHunter - Daily Anime Guessing Game"
          className="w-full h-auto object-cover dark:brightness-90 dark:contrast-110"
        />

        {/* Dark mode overlay for better contrast */}
        <div className="absolute inset-0 bg-black/0 dark:bg-black/20 pointer-events-none" />

        {/* Top overlay with badges and theme toggle */}
        <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-start justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="clue-badge-filled text-[10px] md:text-xs">Daily Challenge</span>
            <span className="clue-badge text-[10px] md:text-xs">
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
              })}
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </MangaPanel>
  );
};
