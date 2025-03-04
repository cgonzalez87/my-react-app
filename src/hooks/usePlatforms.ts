import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import { Platform } from "./useGames";

interface Plaforms {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h      
    // initialData: { count: 0, results: [] as Plaforms[] }
})
export default usePlatforms;