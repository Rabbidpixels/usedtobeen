import { MangaPanel } from "./MangaPanel";
import { cn } from "@/lib/utils";

interface PuzzlePanelProps {
  title: string;
  solved: boolean;
  failed: boolean;
  isShaking: boolean;
  showImpact: boolean;
  guessCount: number;
}

export const PuzzlePanel = ({
  title,
  solved,
  failed,
  isShaking,
  showImpact,
  guessCount
}: PuzzlePanelProps) => {
  // Letter hint logic based on guess count:
  // - After 5 wrong guesses (about to make guess 6): reveal first letter of each word
  // - After 6 wrong guesses (about to make guess 7): also reveal last letter of each word
  const showFirstLetters = guessCount >= 5;
  const showLastLetters = guessCount >= 6;

  const getHiddenTitle = () => {
    return title.split(" ").map(word => {
      if (word.length === 0) return "";

      // Replace alphanumeric characters with ?
      const chars = word.split("").map((char, index) => {
        const isAlphaNumeric = /[A-Za-z0-9]/.test(char);
        if (!isAlphaNumeric) return char; // Keep special characters like : ; -

        // Show first letter after 5 guesses
        if (showFirstLetters && index === 0) return char;

        // Show last letter after 6 guesses
        if (showLastLetters && index === word.length - 1) return char;

        return "?";
      });

      return chars.join("");
    }).join(" ");
  };

  const hiddenTitle = getHiddenTitle();

  // Build hint message
  const getHintMessage = () => {
    if (showFirstLetters && showLastLetters) {
      return "First & last letters revealed!";
    }
    if (showFirstLetters) {
      return "First letters revealed!";
    }
    return null;
  };

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
        <p className="clue-badge mb-6">It used to be...</p>

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
            {getHintMessage() && ` • ${getHintMessage()}`}
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
