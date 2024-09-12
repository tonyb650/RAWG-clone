import Genre from "./Genre"
import Platform from "./Platform"
import Publisher from "./Publisher"

type Game = {
  id: number,
  name: string,
  slug: string,
  background_image: string,
  description_raw: string,
  genres: Genre[],
  publishers: Publisher[],
  parent_platforms: { platform: Platform }[],
  metacritic: number,
  rating_top: number, // 1 | 2 | 3 | 4 | 5
}
export default Game
