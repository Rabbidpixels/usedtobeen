import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MangaPanelProps {
  children: ReactNode;
  className?: string;
  thick?: boolean;
  animate?: boolean;
}

export const MangaPanel = ({ 
  children, 
  className, 
  thick = false,
  animate = false 
}: MangaPanelProps) => {
  return (
    <div
      className={cn(
        thick ? "manga-panel-thick" : "manga-panel",
        animate && "animate-panel-slide",
        className
      )}
    >
      {children}
    </div>
  );
};
