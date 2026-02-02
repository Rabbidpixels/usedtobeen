/**
 * Generates engaging social share content for usedtobeen game results
 * Designed for maximum shareability with nostalgic copy
 */

export interface ShareTextParams {
  date: string;           // Format: YYYY-MM-DD
  solved: boolean;        // Whether the puzzle was solved
  guessCount: number;     // Number of guesses made (1-8)
  maxGuesses?: number;    // Maximum guesses allowed (default: 8)
  siteUrl?: string;       // Site URL to include (default: https://usedtobeen.cool)
}

/**
 * Generate result blocks - green for correct, black for wrong, white for unused
 */
export function generateGuessBlocks(
  guessCount: number,
  solved: boolean,
  maxGuesses: number = 8
): string {
  const blocks: string[] = [];

  for (let i = 0; i < maxGuesses; i++) {
    if (i < guessCount) {
      if (i === guessCount - 1 && solved) {
        blocks.push("🟩"); // Green for winning guess
      } else {
        blocks.push("⬛"); // Black for wrong guess
      }
    } else {
      blocks.push("⬛"); // Black for unused (cleaner look)
    }
  }

  return blocks.join("");
}

/**
 * Get performance title based on guess count
 */
function getPerformanceTitle(guessCount: number, solved: boolean): string {
  if (!solved) {
    return "DEFEATED";
  }
  if (guessCount === 1) {
    return "LEGENDARY";
  }
  if (guessCount === 2) {
    return "AMAZING";
  }
  if (guessCount <= 4) {
    return "NICE";
  }
  if (guessCount <= 6) {
    return "CLOSE ONE";
  }
  return "CLUTCH";
}

/**
 * Get header emoji and tagline based on result
 */
function getShareHeader(guessCount: number, solved: boolean): { emoji: string; tagline: string } {
  if (!solved) {
    return {
      emoji: "😵",
      tagline: "My memory failed me today"
    };
  }

  if (guessCount === 1) {
    return {
      emoji: "🔥",
      tagline: "First try!"
    };
  }

  if (guessCount === 2) {
    return {
      emoji: "⚡",
      tagline: "Second guess!"
    };
  }

  if (guessCount <= 4) {
    return {
      emoji: "🎯",
      tagline: `Got it in ${guessCount}!`
    };
  }

  if (guessCount <= 6) {
    return {
      emoji: "😅",
      tagline: "That was close!"
    };
  }

  return {
    emoji: "😰",
    tagline: "Down to the wire!"
  };
}

/**
 * Generate the complete share text for social platforms
 */
export function generateShareText({
  solved,
  guessCount,
  maxGuesses = 8,
  siteUrl = "https://usedtobeen.cool"
}: ShareTextParams): string {
  const { emoji, tagline } = getShareHeader(guessCount, solved);
  const blocks = generateGuessBlocks(guessCount, solved, maxGuesses);
  const performanceTitle = getPerformanceTitle(guessCount, solved);

  if (solved) {
    return `${emoji} ${performanceTitle}!
📼 usedtobeen - Nostalgia Trivia
✅ ${tagline}

${blocks}
${siteUrl}`;
  }

  return `${emoji} ${performanceTitle}
📼 usedtobeen - Nostalgia Trivia
❌ ${tagline}

${blocks}
Try tomorrow!
${siteUrl}`;
}

/**
 * Generate share URL for Twitter/X
 */
export function getTwitterShareUrl(shareText: string): string {
  const encoded = encodeURIComponent(shareText);
  return `https://twitter.com/intent/tweet?text=${encoded}`;
}

/**
 * Generate share URL for Facebook
 * Uses quote parameter to include share text
 */
export function getFacebookShareUrl(shareText: string, siteUrl: string = "https://usedtobeen.cool"): string {
  const encodedUrl = encodeURIComponent(siteUrl);
  const encodedQuote = encodeURIComponent(shareText);
  return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedQuote}`;
}

/**
 * Copy text and open Instagram (user pastes manually)
 * Instagram doesn't support direct sharing from web
 */
export function getInstagramInstructions(): string {
  return "Text copied! Open Instagram and paste in your story or post.";
}

// Example outputs:
//
// First try win:
// 🔥 LEGENDARY!
// 📼 usedtobeen - Nostalgia Trivia
// ✅ First try!
//
// 🟩⬛⬛⬛⬛⬛⬛⬛
// https://usedtobeen.cool
//
// 4 tries:
// 🎯 NICE!
// 📼 usedtobeen - Nostalgia Trivia
// ✅ Got it in 4!
//
// ⬛⬛⬛🟩⬛⬛⬛⬛
// https://usedtobeen.cool
//
// Failed:
// 😵 DEFEATED
// 📼 usedtobeen - Nostalgia Trivia
// ❌ My memory failed me today
//
// ⬛⬛⬛⬛⬛⬛⬛⬛
// Try tomorrow!
// https://usedtobeen.cool
