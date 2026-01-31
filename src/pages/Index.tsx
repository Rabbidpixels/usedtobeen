import { useGameState } from "@/hooks/useGameState";
import { HeroPanel } from "@/components/HeroPanel";
import { PuzzlePanel } from "@/components/PuzzlePanel";
import { CluePanel } from "@/components/CluePanel";
import { GuessInput } from "@/components/GuessInput";
import { ResultPanel } from "@/components/ResultPanel";
import { Footer } from "@/components/Footer";

const Index = () => {
  const {
    puzzle,
    gameState,
    isShaking,
    showImpact,
    submitGuess,
    getVisibleClues,
    generateShareText,
    copyShareText,
    getStreakMessage,
    remainingGuesses,
    guessCount,
  } = useGameState();

  const visibleClues = getVisibleClues();

  return (
    <div className="min-h-screen bg-page">
      <div className="container max-w-5xl py-6 md:py-12">
        {/* Hero Section */}
        <HeroPanel />

        {/* Puzzle Section */}
        <div className="mt-6 md:mt-8">
          <PuzzlePanel
            title={puzzle.title}
            solved={gameState.solved}
            failed={gameState.failed}
            isShaking={isShaking}
            showImpact={showImpact}
            guessCount={guessCount}
          />
        </div>

        {/* Clues Grid - Manga Panel Layout */}
        <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4 md:gap-6">
          {visibleClues.map((clueKey, index) => (
            <CluePanel
              key={clueKey}
              clueKey={clueKey}
              clueValue={puzzle.clues[clueKey]}
              index={index}
              isNew={index === visibleClues.length - 1 && gameState.guesses.length > 0}
            />
          ))}
        </div>

        {/* Guess Input */}
        {!gameState.solved && !gameState.failed && (
          <div className="mt-6 md:mt-8">
            <GuessInput
              onSubmit={submitGuess}
              disabled={gameState.solved || gameState.failed}
              remainingGuesses={remainingGuesses}
              guesses={gameState.guesses}
            />
          </div>
        )}

        {/* Result Panel */}
        <div className="mt-6 md:mt-8">
          <ResultPanel
            solved={gameState.solved}
            failed={gameState.failed}
            guessCount={guessCount}
            streakMessage={getStreakMessage()}
            shareText={generateShareText()}
            onCopyShare={copyShareText}
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
