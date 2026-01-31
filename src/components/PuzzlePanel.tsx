import { MangaPanel } from "./MangaPanel";
import { cn } from "@/lib/utils";

interface PuzzlePanelProps {
  title: string;
  solved: boolean;
  failed: boolean;
  isShaking: boolean;
  showImpact: boolean;
}

export const PuzzlePanel = ({ 
  title, 
  solved, 
  failed, 
  isShaking,
  showImpact 
}: PuzzlePanelProps) => {
  const hiddenTitle = title.replace(/[A-Z]/gi, "?").replace(/[0-9]/g, "?");
  
  return (
    <MangaPanel 
      thick 
      className={cn(
        "relative overflow-hidden",
        isShaking && "animate-manga-shake"
      )}
    >
      {/* Impact burst effect */}
      {showImpact && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-64 h-64 border-[8px] border-foreground animate-burst" 
               style={{ borderRadius: "50%" }} />
        </div>
      )}
      
      <div className="relative p-8 md:p-12 text-center">
        <p className="clue-badge mb-6">The Anime Is...</p>
        
        <div className="relative inline-block">
          <h2 className={cn(
            "manga-title text-4xl md:text-6xl lg:text-7xl tracking-wider transition-all duration-300",
            solved && "text-foreground",
            failed && "line-through opacity-50"
          )}>
            {solved || failed ? title : hiddenTitle}
          </h2>
          
          {solved && (
            <div className="absolute -top-4 -right-4 rotate-12">
              <span className="manga-title text-2xl md:text-3xl text-foreground">
                ✓
              </span>
            </div>
          )}
        </div>
        
        {!solved && !failed && (
          <p className="mt-6 font-body text-muted-foreground text-sm">
            {title.length} characters • {title.split(" ").length} word(s)
          </p>
        )}
        
        {solved && (
          <p className="mt-6 font-display text-2xl">CORRECT!</p>
        )}
        
        {failed && (
          <p className="mt-6 font-display text-2xl">GAME OVER</p>
        )}
      </div>
    </MangaPanel>
  );
};
