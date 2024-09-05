import { Platform } from "./Platform"

export type Game = {
  id: number,
  name: string,
  slug: string,
  background_image: string,
  description_raw: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number,
  rating_top: number, // 1 | 2 | 3 | 4 | 5
  genres: [
    {
      id: number,
    }
  ]
}