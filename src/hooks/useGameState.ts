import { useState, useEffect, useCallback } from "react";
import { getTodaysPuzzle, getTodaysCategory, clueOrder, NostalgiaData, Category, getTodayString } from "@/data/nostalgiaData";
import { generateShareText as createShareText } from "@/utils/shareText";

interface GameState {
  guesses: string[];
  solved: boolean;
  failed: boolean;
  currentClueIndex: number;
  streak: number;
  previousStreak: number;
  lastPlayedDate: string | null;
}

const MAX_GUESSES = 8;
const STORAGE_KEY = "usedtobeen-state";

const getInitialState = (): GameState => ({
  guesses: [],
  solved: false,
  failed: false,
  currentClueIndex: 0,
  streak: 0,
  previousStreak: 0,
  lastPlayedDate: null,
});

export const useGameState = () => {
  const [puzzle] = useState<NostalgiaData>(getTodaysPuzzle);
  const [category] = useState<Category>(getTodaysCategory);
  const [gameState, setGameState] = useState<GameState>(getInitialState);
  const [isShaking, setIsShaking] = useState(false);
  const [showImpact, setShowImpact] = useState(false);
  const [lostStreak, setLostStreak] = useState<number>(0);

  // Load state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: GameState = JSON.parse(stored);
        const today = getTodayString();

        if (parsed.lastPlayedDate === today) {
          // Same day, restore state
          setGameState(parsed);
          if (parsed.failed && parsed.previousStreak > 0) {
            setLostStreak(parsed.previousStreak);
          }
        } else if (parsed.lastPlayedDate) {
          // New day, check if streak continues
          const lastDate = new Date(parsed.lastPlayedDate);
          const todayDate = new Date(today);
          const diffDays = Math.floor(
            (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
          );

          if (diffDays === 1 && parsed.solved) {
            // Continue streak
            setGameState({
              ...getInitialState(),
              streak: parsed.streak,
              previousStreak: parsed.streak,
            });
          } else {
            // Reset streak - track lost streak if they had one
            if (parsed.streak > 0) {
              setLostStreak(parsed.streak);
            }
            setGameState({
              ...getInitialState(),
              previousStreak: parsed.streak,
            });
          }
        }
      } catch {
        // Invalid stored state, start fresh
        setGameState(getInitialState());
      }
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (gameState.guesses.length > 0 || gameState.solved || gameState.failed) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...gameState,
        lastPlayedDate: getTodayString(),
      }));
    }
  }, [gameState]);

  const submitGuess = useCallback((guess: string) => {
    const normalizedGuess = guess.toUpperCase().trim();
    const normalizedAnswer = puzzle.title.toUpperCase();

    if (gameState.solved || gameState.failed) return;
    if (gameState.guesses.includes(normalizedGuess)) return;

    const newGuesses = [...gameState.guesses, normalizedGuess];
    const isCorrect = normalizedGuess === normalizedAnswer;
    const isFailed = !isCorrect && newGuesses.length >= MAX_GUESSES;

    if (isCorrect) {
      setShowImpact(true);
      setTimeout(() => setShowImpact(false), 500);
      setGameState((prev) => ({
        ...prev,
        guesses: newGuesses,
        solved: true,
        streak: prev.streak + 1,
      }));
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);

      if (isFailed) {
        setLostStreak(gameState.streak);
      }

      setGameState((prev) => ({
        ...prev,
        guesses: newGuesses,
        failed: isFailed,
        currentClueIndex: Math.min(prev.currentClueIndex + 1, clueOrder.length - 1),
        previousStreak: isFailed ? prev.streak : prev.previousStreak,
      }));
    }
  }, [gameState, puzzle.title]);

  const getVisibleClues = useCallback(() => {
    return clueOrder.slice(0, gameState.currentClueIndex + 1);
  }, [gameState.currentClueIndex]);

  const generateShareText = useCallback(() => {
    if (!gameState.solved && !gameState.failed) return "";

    return createShareText({
      date: getTodayString(),
      solved: gameState.solved,
      guessCount: gameState.guesses.length,
      maxGuesses: MAX_GUESSES,
    });
  }, [gameState]);

  const getStreakMessage = useCallback(() => {
    if (gameState.solved) {
      if (gameState.streak === 1) {
        return "Starting a new streak!";
      }
      return `🔥 ${gameState.streak} day${gameState.streak !== 1 ? "s" : ""} in a row!`;
    }
    if (gameState.failed && lostStreak > 0) {
      return `💔 Lost my ${lostStreak} day streak today...`;
    }
    return null;
  }, [gameState, lostStreak]);

  // Copy share text to clipboard using Web Clipboard API
  const copyShareText = useCallback(async (): Promise<boolean> => {
    const text = generateShareText();
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback for older browsers
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        return true;
      } catch {
        return false;
      }
    }
  }, [generateShareText]);

  return {
    puzzle,
    category,
    gameState,
    isShaking,
    showImpact,
    submitGuess,
    getVisibleClues,
    generateShareText,
    copyShareText,
    getStreakMessage,
    maxGuesses: MAX_GUESSES,
    remainingGuesses: MAX_GUESSES - gameState.guesses.length,
    guessCount: gameState.guesses.length,
  };
};
