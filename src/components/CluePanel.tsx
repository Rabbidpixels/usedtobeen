import { MangaPanel } from "./MangaPanel";
import { clueLabels, NostalgiaData } from "@/data/nostalgiaData";
import { cn } from "@/lib/utils";

interface CluePanelProps {
  clueKey: keyof NostalgiaData["clues"];
  clueValue: string | number;
  index: number;
  isNew?: boolean;
}

export const CluePanel = ({ clueKey, clueValue, index, isNew }: CluePanelProps) => {
  const isWide = clueKey === "description" || clueKey === "endingNote";

  return (
    <MangaPanel
      className={cn(
        isWide ? "col-span-2" : "col-span-1",
        isNew && "animate-clue-reveal",
        "manga-panel-interactive"
      )}
    >
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <span className={cn(
            "clue-badge-filled",
            isNew && "animate-pulse-border"
          )}>
            {clueLabels[clueKey]}
          </span>
          <span className="font-display text-xs text-muted-foreground">
            CLUE #{index + 1}
          </span>
        </div>

        <p className={cn(
          "font-body font-bold mt-3",
          isWide ? "text-base md:text-lg" : "text-xl md:text-2xl"
        )}>
          {clueValue}
        </p>
      </div>
    </MangaPanel>
  );
};
