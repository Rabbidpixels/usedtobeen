import { useState, useEffect } from "react";
import { MangaPanel } from "./MangaPanel";
import { Check, Copy, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTwitterShareUrl, getFacebookShareUrl } from "@/utils/shareText";

interface ResultPanelProps {
  solved: boolean;
  failed: boolean;
  guessCount: number;
  maxGuesses?: number;
  streakMessage: string | null;
  shareText: string;
  onCopyShare: () => Promise<boolean>;
}

// Social media icons as inline SVGs for better control
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const ResultPanel = ({
  solved,
  failed,
  guessCount,
  maxGuesses = 8,
  streakMessage,
  shareText,
  onCopyShare
}: ResultPanelProps) => {
  const [copied, setCopied] = useState(false);
  const [instagramCopied, setInstagramCopied] = useState(false);
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

  const handleCopy = async () => {
    const success = await onCopyShare();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleTwitterShare = () => {
    const url = getTwitterShareUrl(shareText);
    window.open(url, "_blank", "width=550,height=420");
  };

  const handleFacebookShare = () => {
    const url = getFacebookShareUrl(shareText);
    window.open(url, "_blank", "width=550,height=420");
  };

  const handleInstagramShare = async () => {
    const success = await onCopyShare();
    if (success) {
      setInstagramCopied(true);
      setTimeout(() => setInstagramCopied(false), 3000);
    }
  };

  // Generate result boxes
  const renderResultBoxes = () => {
    const boxes = [];
    for (let i = 0; i < maxGuesses; i++) {
      const isUsed = i < guessCount;
      const isWinningGuess = i === guessCount - 1 && solved;

      boxes.push(
        <div
          key={i}
          className={cn(
            "w-8 h-8 md:w-10 md:h-10 border-2 border-foreground flex items-center justify-center transition-all",
            isUsed
              ? isWinningGuess
                ? "bg-green-500 dark:bg-green-600"
                : "bg-foreground"
              : "bg-background"
          )}
        >
          {isUsed && (
            isWinningGuess ? (
              <Check className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
            ) : (
              <X className="w-5 h-5 md:w-6 md:h-6 text-background" strokeWidth={3} />
            )
          )}
        </div>
      );
    }
    return boxes;
  };

  // Get emotional header based on result
  const getEmotionalHeader = () => {
    if (!solved) {
      return { emoji: "😵", title: "DEFEAT", subtitle: "My memory failed me today" };
    }
    if (guessCount === 1) {
      return { emoji: "🔥", title: "LEGENDARY!", subtitle: "First try!" };
    }
    if (guessCount === 2) {
      return { emoji: "⚡", title: "AMAZING!", subtitle: "Second guess!" };
    }
    if (guessCount <= 4) {
      return { emoji: "🎯", title: "NICE!", subtitle: `Got it in ${guessCount}!` };
    }
    if (guessCount <= 6) {
      return { emoji: "😅", title: "PHEW!", subtitle: "That was close!" };
    }
    return { emoji: "😰", title: "CLUTCH!", subtitle: "Down to the wire!" };
  };

  const header = getEmotionalHeader();

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
          {/* Emotional header */}
          <div className="text-5xl md:text-6xl mb-2">{header.emoji}</div>
          <h2 className={cn(
            "manga-title text-4xl md:text-6xl mb-2",
            solved ? "animate-stamp-in" : "animate-defeat-fade"
          )}>
            {header.title}
          </h2>
          <p className="font-display text-xl md:text-2xl mb-2 animate-fade-in">
            {header.subtitle}
          </p>
          {streakMessage && (
            <p className="font-body text-lg text-muted-foreground mb-6 animate-fade-in">
              {streakMessage}
            </p>
          )}

          {/* Result boxes in a single line */}
          <div className="flex justify-center gap-1 md:gap-2 mb-6">
            {renderResultBoxes()}
          </div>

          {/* Taglines */}
          <p className="font-display text-xl md:text-2xl mb-1">How well do you remember?</p>
          <p className="font-body text-muted-foreground mb-8">Test your nostalgia.</p>

          {/* Social Share Buttons */}
          <div className="mb-6">
            <p className="font-display text-sm mb-4">SHARE YOUR RESULT</p>
            <div className="flex justify-center gap-3">
              {/* X (Twitter) */}
              <button
                onClick={handleTwitterShare}
                className="w-12 h-12 border-3 border-foreground bg-foreground text-background flex items-center justify-center hover:bg-background hover:text-foreground transition-all active:scale-95"
                aria-label="Share on X"
              >
                <TwitterIcon />
              </button>

              {/* Facebook */}
              <button
                onClick={handleFacebookShare}
                className="w-12 h-12 border-3 border-foreground bg-foreground text-background flex items-center justify-center hover:bg-background hover:text-foreground transition-all active:scale-95"
                aria-label="Share on Facebook"
              >
                <FacebookIcon />
              </button>

              {/* Instagram */}
              <button
                onClick={handleInstagramShare}
                className="w-12 h-12 border-3 border-foreground bg-foreground text-background flex items-center justify-center hover:bg-background hover:text-foreground transition-all active:scale-95 relative"
                aria-label="Copy for Instagram"
              >
                <InstagramIcon />
              </button>

              {/* Copy */}
              <button
                onClick={handleCopy}
                className="w-12 h-12 border-3 border-foreground bg-background text-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all active:scale-95"
                aria-label="Copy to clipboard"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* Instagram copy feedback */}
            {instagramCopied && (
              <p className="font-body text-sm text-green-600 dark:text-green-400 mt-3 animate-fade-in">
                Copied! Paste in your Instagram story or post.
              </p>
            )}
          </div>

          {/* Share preview */}
          <div className="p-4 border-2 border-foreground bg-background">
            <pre className="font-body text-sm text-center whitespace-pre-wrap">
              {shareText}
            </pre>
          </div>
        </div>
      </div>
    </MangaPanel>
  );
};
