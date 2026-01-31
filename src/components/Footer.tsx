import { MangaPanel } from "./MangaPanel";

export const Footer = () => {
  return (
    <MangaPanel className="mt-8">
      <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-body text-sm text-muted-foreground">
          New puzzle every day at midnight
        </div>
        <div className="flex items-center gap-4">
          <span className="clue-badge">Built with 愛</span>
        </div>
      </div>
    </MangaPanel>
  );
};
