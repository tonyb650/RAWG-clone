import { useInfiniteQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import useGameQueryStore from "../store"
import { Game } from "../entities/Game"

let apiClient = new APIClient<Game>(`/games`)

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery({
    queryKey: ['games', gameQuery], // <-- anytime any of these values change reactQuery will re-fetch
    queryFn: ({ pageParam = 1 }) => apiClient.getAll( 
      { 
        params: { 
          genres: gameQuery.genreId, 
          parent_platforms: gameQuery.platformId, 
          ordering: gameQuery.sortOrder, 
          search: gameQuery.search,
          page: pageParam,
        }
      })
    ,
    staleTime: 24*60*60*1000, // 24h 
    initialPageParam: 1,
    // lastPage: array of games
    // allPages: 2-dimensional array of games (each element in array is an array of games(a page))
    // getNextPageParam should return the page number for the next fetch
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
 })}


export default useGames