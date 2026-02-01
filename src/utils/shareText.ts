/**
 * Generates engaging social share content for AniHunter game results
 * Designed for maximum shareability with emotional copy
 */

export interface ShareTextParams {
  date: string;           // Format: YYYY-MM-DD
  solved: boolean;        // Whether the puzzle was solved
  guessCount: number;     // Number of guesses made (1-8)
  maxGuesses?: number;    // Maximum guesses allowed (default: 8)
  siteUrl?: string;       // Site URL to include (default: anihunter.com)
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
 * Get header emoji and tagline based on result
 */
function getShareHeader(guessCount: number, solved: boolean): { emoji: string; tagline: string } {
  if (!solved) {
    return {
      emoji: "😵",
      tagline: "I missed today's anime"
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
  siteUrl = "anihunter.com"
}: ShareTextParams): string {
  const { emoji, tagline } = getShareHeader(guessCount, solved);
  const blocks = generateGuessBlocks(guessCount, solved, maxGuesses);

  if (solved) {
    return `${emoji} AniHunter
🎌 Anime Trivia
✅ ${tagline}

${blocks}
${siteUrl}`;
  }

  return `${emoji} AniHunter
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
 * Note: Facebook doesn't support pre-filled text, so we share the URL
 */
export function getFacebookShareUrl(siteUrl: string = "https://anihunter.com"): string {
  const encoded = encodeURIComponent(siteUrl);
  return `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
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
// 🔥 AniHunter
// 🎌 Anime Trivia
// ✅ First try!
//
// 🟩⬛⬛⬛⬛⬛⬛⬛
// anihunter.com
//
// 4 tries:
// 🎯 AniHunter
// 🎌 Anime Trivia
// ✅ Got it in 4!
//
// ⬛⬛⬛🟩⬛⬛⬛⬛
// anihunter.com
//
// Failed:
// 😵 AniHunter
// ❌ I missed today's anime
//
// ⬛⬛⬛⬛⬛⬛⬛⬛
// Try tomorrow!
// anihunter.com
