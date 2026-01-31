import { MangaPanel } from "./MangaPanel";
import { clueLabels, AnimeData } from "@/data/animeData";

interface CluePanelProps {
  clueKey: keyof AnimeData["clues"];
  clueValue: string | number;
  index: number;
  isNew?: boolean;
}

export const CluePanel = ({ clueKey, clueValue, index, isNew }: CluePanelProps) => {
  const isWide = clueKey === "synopsis" || clueKey === "protagonist";
  
  return (
    <MangaPanel 
      className={`
        ${isWide ? "col-span-2" : "col-span-1"}
        ${isNew ? "animate-panel-slide" : ""}
      `}
    >
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <span className="clue-badge-filled">{clueLabels[clueKey]}</span>
          <span className="font-display text-xs text-muted-foreground">
            CLUE #{index + 1}
          </span>
        </div>
        
        <p className={`
          font-body font-bold mt-3
          ${isWide ? "text-base md:text-lg" : "text-xl md:text-2xl"}
        `}>
          {clueValue}
        </p>
      </div>
    </MangaPanel>
  );
};
