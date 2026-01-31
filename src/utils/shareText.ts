/**
 * Generates plain-text social share content for AniHunter game results
 * No HTML, no markdown - just clean text suitable for any platform
 */

export interface ShareTextParams {
  date: string;           // Format: YYYY-MM-DD
  solved: boolean;        // Whether the puzzle was solved
  guessCount: number;     // Number of guesses made (1-8)
  maxGuesses?: number;    // Maximum guesses allowed (default: 8)
  siteUrl?: string;       // Site URL to include (default: https://anihunter.com)
}

/**
 * Generate Wordle-style emoji blocks for guess visualization
 * 🟩 = winning guess, ⬛ = wrong guess, ⬜ = unused guess
 */
export function generateGuessBlocks(
  guessCount: number,
  solved: boolean,
  maxGuesses: number = 8
): string {
  const blocks: string[] = [];

  for (let i = 0; i < maxGuesses; i++) {
    if (i < guessCount) {
      // This guess was used
      if (i === guessCount - 1 && solved) {
        blocks.push("🟩"); // Green for winning guess
      } else {
        blocks.push("⬛"); // Black for wrong guess
      }
    } else {
      blocks.push("⬜"); // White for unused
    }
  }

  return blocks.join("");
}

/**
 * Format blocks into rows for visual appeal
 * Default: 2 rows of 4 blocks each
 */
export function formatBlocksAsRows(
  blocks: string,
  blocksPerRow: number = 4
): string {
  const rows: string[] = [];
  for (let i = 0; i < blocks.length; i += blocksPerRow) {
    rows.push(blocks.slice(i, i + blocksPerRow));
  }
  return rows.join("\n");
}

/**
 * Generate the complete share text for social platforms
 */
export function generateShareText({
  date,
  solved,
  guessCount,
  maxGuesses = 8,
  siteUrl = "https://anihunter.com"
}: ShareTextParams): string {
  // Header with date and result
  const resultEmoji = solved ? "🎯" : "💀";
  const scoreDisplay = solved ? `${guessCount}/${maxGuesses}` : `X/${maxGuesses}`;
  const header = `ANIHUNTER ${date}\n${resultEmoji} ${scoreDisplay}`;

  // Generate and format blocks
  const blocks = generateGuessBlocks(guessCount, solved, maxGuesses);
  const formattedBlocks = formatBlocksAsRows(blocks, 4);

  // Combine all parts
  return `${header}\n\n${formattedBlocks}\n\n${siteUrl}`;
}

/**
 * Generate a shorter share text (single line) for platforms with character limits
 */
export function generateShortShareText({
  date,
  solved,
  guessCount,
  maxGuesses = 8,
  siteUrl = "https://anihunter.com"
}: ShareTextParams): string {
  const resultEmoji = solved ? "🎯" : "💀";
  const scoreDisplay = solved ? `${guessCount}/${maxGuesses}` : `X/${maxGuesses}`;
  const blocks = generateGuessBlocks(guessCount, solved, maxGuesses);

  return `ANIHUNTER ${date} ${resultEmoji} ${scoreDisplay} ${blocks} ${siteUrl}`;
}

/**
 * Generate share text with custom message
 */
export function generateCustomShareText({
  date,
  solved,
  guessCount,
  maxGuesses = 8,
  siteUrl = "https://anihunter.com",
  customMessage
}: ShareTextParams & { customMessage?: string }): string {
  const baseText = generateShareText({ date, solved, guessCount, maxGuesses, siteUrl });

  if (customMessage) {
    return `${customMessage}\n\n${baseText}`;
  }

  return baseText;
}

// Example usage:
// const text = generateShareText({
//   date: "2026-01-31",
//   solved: true,
//   guessCount: 3
// });
//
// Output:
// ANIHUNTER 2026-01-31
// 🎯 3/8
//
// ⬛⬛🟩⬜
// ⬜⬜⬜⬜
//
// https://anihunter.com
