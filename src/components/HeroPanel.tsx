import { MangaPanel } from "./MangaPanel";

export const HeroPanel = () => {
  return (
    <MangaPanel thick className="relative overflow-hidden">
      <div className="halftone-light absolute inset-0 opacity-50" />
      <div className="relative px-6 py-12 md:px-12 md:py-20">
        <div className="mb-4 flex items-center gap-3">
          <span className="clue-badge-filled">Daily Challenge</span>
          <span className="clue-badge">
            {new Date().toLocaleDateString("en-US", { 
              month: "short", 
              day: "numeric" 
            })}
          </span>
        </div>
        
        <h1 className="manga-title-lg text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
          ANIME
          <br />
          <span className="manga-title-outline">RECALL</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl max-w-md font-medium">
          Guess the anime from the clues. You get 8 chances.{" "}
          <span className="font-bold">Don't waste them.</span>
        </p>
      </div>
      
      {/* Decorative speed lines */}
      <div className="absolute right-0 top-0 bottom-0 w-32 speed-lines opacity-30" />
    </MangaPanel>
  );
};
