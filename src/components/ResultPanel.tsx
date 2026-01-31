import { useState, useEffect } from "react";
import { MangaPanel } from "./MangaPanel";
import { Share2, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultPanelProps {
  solved: boolean;
  failed: boolean;
  guessCount: number;
  streakMessage: string | null;
  shareText: string;
  onCopyShare: () => Promise<boolean>;
}

export const ResultPanel = ({
  solved,
  failed,
  guessCount,
  streakMessage,
  shareText,
  onCopyShare
}: ResultPanelProps) => {
  const [copied, setCopied] = useState(false);
  const [showVictoryShake, setShowVictoryShake] = useState(false);

  // Trigger victory shake animation when solved
  useEffect(() => {
    if (solved) {
      setShowVictoryShake(true);
      const timer = setTimeout(() => setShowVictoryShake(false), 600);
      return () => clearTimeout(timer);
    }
  }, [solved]);

  if (!solved && !failed) return null;

  const handleShare = async () => {
    // Try native share first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: "ANIHUNTER",
          text: shareText,
        });
        return;
      } catch {
        // User cancelled or error, fall through to copy
      }
    }

    // Fallback to clipboard copy
    const success = await onCopyShare();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopy = async () => {
    const success = await onCopyShare();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <MangaPanel
      thick
      className={cn(
        "relative overflow-hidden",
        solved && showVictoryShake && "animate-victory-shake"
      )}
    >
      {/* Victory burst effect */}
      {solved && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 border-[4px] border-foreground/20 rounded-full animate-victory-burst" />
        </div>
      )}

      <div className="halftone-light">
        <div className="p-8 md:p-12 text-center relative">
          {solved ? (
            <>
              <h2 className="manga-title text-4xl md:text-6xl mb-4 animate-stamp-in">
                VICTORY!
              </h2>
              <p className="font-body text-lg md:text-xl mb-2 animate-fade-in">
                Got it in <span className="font-bold">{guessCount}</span> {guessCount === 1 ? "try" : "tries"}!
              </p>
              {streakMessage && (
                <p className="font-body text-lg text-muted-foreground mb-8 animate-fade-in">
                  {streakMessage}
                </p>
              )}
            </>
          ) : (
            <>
              <h2 className="manga-title text-4xl md:text-6xl mb-4 animate-defeat-fade">
                DEFEAT
              </h2>
              <p className="font-body text-lg md:text-xl mb-2 animate-fade-in">
                The answer was right there... Come back tomorrow.
              </p>
              {streakMessage && (
                <p className="font-body text-lg text-muted-foreground mb-8 animate-fade-in">
                  {streakMessage}
                </p>
              )}
            </>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button
              onClick={handleShare}
              className="manga-button-filled inline-flex items-center justify-center gap-3"
            >
              <Share2 size={20} />
              SHARE RESULT
            </button>
            <button
              onClick={handleCopy}
              className="manga-button inline-flex items-center justify-center gap-3"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? "COPIED!" : "COPY TO CLIPBOARD"}
            </button>
          </div>

          <div className="p-4 border-2 border-foreground bg-background">
            <pre className="font-body text-sm text-left whitespace-pre-wrap">
              {shareText}
            </pre>
          </div>
        </div>
      </div>
    </MangaPanel>
  );
};
