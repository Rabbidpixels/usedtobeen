import { useState } from "react";
import { MangaPanel } from "./MangaPanel";
import { ThemeToggle } from "./ThemeToggle";
import { Category } from "@/data/animeData";

interface HeroPanelProps {
  category?: Category;
}

export const HeroPanel = ({ category }: HeroPanelProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <MangaPanel thick className="relative overflow-hidden">
      {!imageError ? (
        /* Banner Image Container */
        <div className="relative w-full">
          <img
            src="/banner.png"
            alt="AniHunter - Daily Anime Guessing Game"
            className="w-full h-auto object-cover dark:brightness-90 dark:contrast-110"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-black/0 dark:bg-black/20 pointer-events-none" />

          {/* Top overlay with badges and theme toggle */}
          <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-start justify-between">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <span className="clue-badge-filled text-[10px] md:text-xs">Daily Challenge</span>
              <span className="clue-badge text-[10px] md:text-xs">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                })}
              </span>
              {category && (
                <span className="clue-badge text-[10px] md:text-xs">
                  {category}
                </span>
              )}
            </div>
            <ThemeToggle />
          </div>
        </div>
      ) : (
        /* Fallback text-based hero */
        <>
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
                {category && (
                  <span className="clue-badge text-[10px] md:text-xs">
                    {category}
                  </span>
                )}
              </div>
              <ThemeToggle />
            </div>

            <h1 className="manga-title-lg text-6xl md:text-8xl lg:text-9xl leading-none mb-6 animate-hero-slide">
              ANI
              <br />
              <span className="manga-title-outline">HUNTER</span>
            </h1>

            <p className="font-body text-lg md:text-xl max-w-md font-medium animate-fade-in">
              Guess the anime from the clues. You get 8 chances.{" "}
              <span className="font-bold">Don't waste them.</span>
            </p>
          </div>

          {/* Decorative speed lines */}
          <div className="absolute right-0 top-0 bottom-0 w-32 speed-lines opacity-30" />
        </>
      )}
    </MangaPanel>
  );
};
