import { MangaPanel } from "./MangaPanel";
import { ThemeToggle } from "./ThemeToggle";

export const HeroPanel = () => {
  return (
    <MangaPanel thick className="relative overflow-hidden">
      <div className="halftone-light absolute inset-0 opacity-50" />
      <div className="relative px-6 py-12 md:px-12 md:py-20">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
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

        <h1 className="manga-title-lg text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-hero-slide">
          used
          <br />
          <span className="manga-title-outline">tobeen</span>
        </h1>

        <p className="font-body text-lg md:text-xl max-w-md font-medium animate-fade-in">
          Guess the thing that used to be. You get 8 chances.{" "}
          <span className="font-bold">You remember this. Or maybe you don't.</span>
        </p>
      </div>

      {/* Decorative speed lines */}
      <div className="absolute right-0 top-0 bottom-0 w-32 speed-lines opacity-30" />
    </MangaPanel>
  );
};
