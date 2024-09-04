import { useQuery } from "@tanstack/react-query";
import { Game } from "./useGames";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>('/games')

const useGame = (slug: string) => 
  useQuery({
    queryKey: ['game',slug],
    queryFn: () =>  apiClient.getOne(slug),
    // staleTime: 60*60*1000, // 1hour
  })
  


export default useGame