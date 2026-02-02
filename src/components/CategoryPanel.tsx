import { memo } from "react";
import { MangaPanel } from "./MangaPanel";

interface CategoryPanelProps {
  category: string;
}

export const CategoryPanel = memo(({ category }: CategoryPanelProps) => {
  return (
    <MangaPanel className="mt-6 md:mt-8">
      <div className="px-4 py-3 flex items-center justify-center gap-3">
        <span className="font-display text-sm md:text-base uppercase tracking-wide">
          Today's Category:
        </span>
        <span className="font-display text-sm md:text-base uppercase tracking-wide font-bold">
          {category}
        </span>
      </div>
    </MangaPanel>
  );
});
