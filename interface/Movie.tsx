import { List } from "lodash"

export interface MoviePopularResult {
  poster_path: string | null,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_id: number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string | null,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number,
}

export interface MoviePopular {
  page: number
  results: MoviePopularResult[]
  total_result: number
  total_pages: number
}