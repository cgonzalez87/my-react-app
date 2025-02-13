import useData from "./useData";

interface Plaforms {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Plaforms>("/platforms/lists/parents")
export default usePlatforms;