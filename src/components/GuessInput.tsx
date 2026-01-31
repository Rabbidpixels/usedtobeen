import { useState, FormEvent } from "react";
import { MangaPanel } from "./MangaPanel";

interface GuessInputProps {
  onSubmit: (guess: string) => void;
  disabled: boolean;
  remainingGuesses: number;
  guesses: string[];
}

export const GuessInput = ({ 
  onSubmit, 
  disabled, 
  remainingGuesses,
  guesses 
}: GuessInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <MangaPanel thick className="relative">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="font-display text-lg md:text-xl">YOUR GUESS</span>
          <div className="flex items-center gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`
                  w-3 h-3 border-2 border-foreground
                  ${i < guesses.length 
                    ? i === guesses.length - 1 && remainingGuesses === 8 - guesses.length
                      ? "bg-foreground"
                      : "bg-foreground"
                    : "bg-background"
                  }
                `}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter anime title..."
            disabled={disabled}
            className="manga-input flex-1 disabled:opacity-50"
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={disabled || !value.trim()}
            className="manga-button-filled disabled:opacity-50 disabled:cursor-not-allowed"
          >
            GUESS
          </button>
        </form>

        {!disabled && (
          <p className="mt-4 font-body text-sm text-muted-foreground">
            {remainingGuesses} guess{remainingGuesses !== 1 ? "es" : ""} remaining
          </p>
        )}

        {guesses.length > 0 && (
          <div className="mt-6 pt-6 border-t-2 border-foreground">
            <p className="font-display text-sm mb-3">PREVIOUS GUESSES</p>
            <div className="flex flex-wrap gap-2">
              {guesses.map((guess, i) => (
                <span key={i} className="clue-badge line-through opacity-60">
                  {guess}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </MangaPanel>
  );
};
