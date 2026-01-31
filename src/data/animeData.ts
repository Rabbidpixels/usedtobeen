export interface AnimeData {
  id: string;
  title: string;
  clues: {
    genre: string;
    year: number;
    studio: string;
    episodes: number;
    rating: string;
    demographic: string;
    synopsis: string;
    protagonist: string;
  };
}

// Daily anime puzzles - in production, this would come from an API
export const animePuzzles: AnimeData[] = [
  {
    id: "1",
    title: "DEATH NOTE",
    clues: {
      genre: "Psychological Thriller",
      year: 2006,
      studio: "Madhouse",
      episodes: 37,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "A notebook that kills anyone whose name is written in it",
      protagonist: "A genius high school student with a god complex",
    },
  },
  {
    id: "2",
    title: "ATTACK ON TITAN",
    clues: {
      genre: "Action / Dark Fantasy",
      year: 2013,
      studio: "Wit Studio / MAPPA",
      episodes: 87,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "Humanity fights for survival against giant humanoid creatures",
      protagonist: "A vengeful boy who witnessed his mother's death",
    },
  },
  {
    id: "3",
    title: "STEINS;GATE",
    clues: {
      genre: "Sci-Fi / Thriller",
      year: 2011,
      studio: "White Fox",
      episodes: 24,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "A group accidentally invents time travel via microwave",
      protagonist: "A self-proclaimed mad scientist",
    },
  },
  {
    id: "4",
    title: "FULLMETAL ALCHEMIST",
    clues: {
      genre: "Action / Adventure",
      year: 2009,
      studio: "Bones",
      episodes: 64,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "Two brothers seek the Philosopher's Stone to restore their bodies",
      protagonist: "A young state alchemist with automail limbs",
    },
  },
  {
    id: "5",
    title: "NEON GENESIS EVANGELION",
    clues: {
      genre: "Mecha / Psychological",
      year: 1995,
      studio: "Gainax",
      episodes: 26,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "Teenagers pilot giant bio-mechs to fight mysterious beings",
      protagonist: "A reluctant 14-year-old with abandonment issues",
    },
  },
  {
    id: "6",
    title: "ONE PUNCH MAN",
    clues: {
      genre: "Action / Comedy",
      year: 2015,
      studio: "Madhouse",
      episodes: 24,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "A hero so powerful he defeats enemies with a single blow",
      protagonist: "A bald, unassuming man seeking a worthy opponent",
    },
  },
  {
    id: "7",
    title: "COWBOY BEBOP",
    clues: {
      genre: "Sci-Fi / Action",
      year: 1998,
      studio: "Sunrise",
      episodes: 26,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "Bounty hunters travel through space catching criminals",
      protagonist: "A laid-back ex-hitman haunted by his past",
    },
  },
];

// Get today's puzzle based on date
export const getTodaysPuzzle = (): AnimeData => {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const puzzleIndex = dayOfYear % animePuzzles.length;
  return animePuzzles[puzzleIndex];
};

// Clue reveal order
export const clueOrder: (keyof AnimeData["clues"])[] = [
  "genre",
  "year",
  "studio",
  "episodes",
  "rating",
  "demographic",
  "synopsis",
  "protagonist",
];

export const clueLabels: Record<keyof AnimeData["clues"], string> = {
  genre: "Genre",
  year: "Year Aired",
  studio: "Studio",
  episodes: "Episodes",
  rating: "Rating",
  demographic: "Demographic",
  synopsis: "Plot Hint",
  protagonist: "Protagonist",
};
