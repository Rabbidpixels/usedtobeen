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
 * Get an engaging message based on the number of tries
 */
export function getResultMessage(guessCount: number, solved: boolean): string {
  if (!solved) {
    // Failed messages
    const failMessages = [
      "This one fought back.",
      "Absolutely brutal.",
      "That was humbling.",
      "I refused to quit... but lost.",
      "Harder than it looks.",
    ];
    return failMessages[Math.floor(Math.random() * failMessages.length)];
  }

  // Success messages by tier
  if (guessCount === 1) {
    const firstTryMessages = [
      "First try. No hints needed.",
      "One shot. Nailed it.",
      "First guess. Too easy.",
      "One and done.",
      "First try supremacy.",
      "First try. I'm built different.",
    ];
    return firstTryMessages[Math.floor(Math.random() * firstTryMessages.length)];
  }

  if (guessCount <= 3) {
    const quickMessages = [
      `Got it in ${guessCount} tries!`,
      `Locked it in on try #${guessCount}.`,
      `Figured it out in ${guessCount} attempts.`,
      `Dialed it in on try ${guessCount}.`,
    ];
    return quickMessages[Math.floor(Math.random() * quickMessages.length)];
  }

  if (guessCount <= 6) {
    const midMessages = [
      `That took ${guessCount} tries.`,
      "Persistence paid off.",
      "Had to think on that one.",
      "Finally cracked it.",
      "Not easy — but I got it.",
    ];
    return midMessages[Math.floor(Math.random() * midMessages.length)];
  }

  // 7-8 tries
  const hardMessages = [
    "This one fought back.",
    "Absolutely brutal. Still solved it.",
    "I refused to quit.",
    "That was humbling.",
    "Close call but I got it.",
  ];
  return hardMessages[Math.floor(Math.random() * hardMessages.length)];
}

/**
 * Generate result boxes in a single line
 * ❌ = wrong guess, ✅ = correct guess, ⬜ = unused
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
        blocks.push("✅"); // Green checkmark for winning guess
      } else {
        blocks.push("❌"); // X for wrong guess
      }
    } else {
      blocks.push("⬜"); // White for unused
    }
  }

  return blocks.join("");
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
  // Get engaging message
  const message = getResultMessage(guessCount, solved);

  // Score display
  const scoreEmoji = solved ? "🏆" : "💀";
  const scoreText = solved
    ? `Solved in ${guessCount} ${guessCount === 1 ? "try" : "tries"} ${scoreEmoji}`
    : `Failed ${scoreEmoji}`;

  // Generate blocks in a single line
  const blocks = generateGuessBlocks(guessCount, solved, maxGuesses);

  // Combine all parts
  return `ANIHUNTER ${date}\n\n${message}\n\n${scoreText}\n${blocks}\n\n${siteUrl}`;
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
  const scoreEmoji = solved ? "🏆" : "💀";
  const scoreDisplay = solved ? `${guessCount}/${maxGuesses}` : `X/${maxGuesses}`;
  const blocks = generateGuessBlocks(guessCount, solved, maxGuesses);

  return `ANIHUNTER ${date} ${scoreEmoji} ${scoreDisplay} ${blocks} ${siteUrl}`;
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

// Example outputs:
//
// First try win:
// ANIHUNTER 2026-01-31
//
// First try. No hints needed.
//
// Solved in 1 try 🏆
// ✅⬜⬜⬜⬜⬜⬜⬜
//
// https://anihunter.com
//
// 3 tries:
// ANIHUNTER 2026-01-31
//
// Got it in 3 tries!
//
// Solved in 3 tries 🏆
// ❌❌✅⬜⬜⬜⬜⬜
//
// https://anihunter.com
//
// Failed:
// ANIHUNTER 2026-01-31
//
// This one fought back.
//
// Failed 💀
// ❌❌❌❌❌❌❌❌
//
// https://anihunter.com
