import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async(category) => {
        const gifs = await getGifs(category);
        setImages( gifs );
        setIsLoading(false);
    }
    useEffect( () => {
        getImages( category );
        // getGifs( category )
        //     .then( (gifs) => {
        //         setImages( gifs )
        //         setIsLoading(false);
        //     }
        // );
    }, []);

    return {
        images,
        isLoading
    }
}
