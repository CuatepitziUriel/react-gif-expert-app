import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";

export const useGetGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getImages = async () => {
            const dataGifs = await getGifs(category);
            setGifs(dataGifs);
            setIsLoading(false);
        }
        getImages();
    }, [category])

    return {
        gifs,
        isLoading
    };
}
