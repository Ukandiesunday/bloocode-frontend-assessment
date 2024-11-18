export interface MovieType {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: { name: string }[];
  id: number;
}

export interface GenreType {
  id: number;
  name: string;
}

export interface CastType {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}
