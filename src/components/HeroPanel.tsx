import { MangaPanel } from "./MangaPanel";
import { ThemeToggle } from "./ThemeToggle";

export const HeroPanel = () => {
  return (
    <MangaPanel thick className="relative overflow-hidden">
      {/* Hero Image fills entire panel */}
      <img
        src="/hero.png"
        alt="usedtobeen - Daily Nostalgia Guessing Game"
        className="w-full h-auto block"
      />

      {/* Overlaid controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <span className="clue-badge-filled text-[10px] md:text-xs">Daily Challenge</span>
          <span className="clue-badge text-[10px] md:text-xs">
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric"
            }).toUpperCase()}
          </span>
        </div>
        <ThemeToggle />
      </div>
    </MangaPanel>
  );
};
