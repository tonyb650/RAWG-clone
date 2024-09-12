import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import Trailer from "../entities/Trailer"


const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)
  
  return useQuery({
  queryKey: ['trailers', gameId],
  queryFn: apiClient.getAll,
  staleTime: 30 * 24 * 60 * 60 *1000, // 1mo
})
}

export default useTrailers