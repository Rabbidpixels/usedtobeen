import { useState, useEffect, useCallback } from "react";
import { getTodaysPuzzle, clueOrder, AnimeData } from "@/data/animeData";

interface GameState {
  guesses: string[];
  solved: boolean;
  failed: boolean;
  currentClueIndex: number;
  streak: number;
  lastPlayedDate: string | null;
}

const MAX_GUESSES = 8;
const STORAGE_KEY = "anime-recall-state";

const getInitialState = (): GameState => ({
  guesses: [],
  solved: false,
  failed: false,
  currentClueIndex: 0,
  streak: 0,
  lastPlayedDate: null,
});

const getTodayString = () => new Date().toISOString().split("T")[0];

export const useGameState = () => {
  const [puzzle] = useState<AnimeData>(getTodaysPuzzle);
  const [gameState, setGameState] = useState<GameState>(getInitialState);
  const [isShaking, setIsShaking] = useState(false);
  const [showImpact, setShowImpact] = useState(false);

  // Load state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed: GameState = JSON.parse(stored);
      const today = getTodayString();
      
      if (parsed.lastPlayedDate === today) {
        // Same day, restore state
        setGameState(parsed);
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
          });
        } else {
          // Reset streak
          setGameState(getInitialState());
        }
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
      setGameState((prev) => ({
        ...prev,
        guesses: newGuesses,
        failed: isFailed,
        currentClueIndex: Math.min(prev.currentClueIndex + 1, clueOrder.length - 1),
      }));
    }
  }, [gameState, puzzle.title]);

  const getVisibleClues = useCallback(() => {
    return clueOrder.slice(0, gameState.currentClueIndex + 1);
  }, [gameState.currentClueIndex]);

  const generateShareText = useCallback(() => {
    if (!gameState.solved && !gameState.failed) return "";
    
    const result = gameState.solved
      ? `🎯 I solved today's ANIME RECALL in ${gameState.guesses.length}/8 guesses!`
      : `💀 I failed today's ANIME RECALL...`;
    
    const blocks = gameState.guesses.map((_, i) => 
      i === gameState.guesses.length - 1 && gameState.solved ? "⬛" : "⬜"
    ).join("");
    
    return `${result}\n\n${blocks}\n\nCan you beat me? 👊`;
  }, [gameState]);

  return {
    puzzle,
    gameState,
    isShaking,
    showImpact,
    submitGuess,
    getVisibleClues,
    generateShareText,
    maxGuesses: MAX_GUESSES,
    remainingGuesses: MAX_GUESSES - gameState.guesses.length,
  };
};
