import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            {isLoading && ( <h4>Loading...</h4> )}
            <h3>{ category }</h3>
            <div className="card-grid">
                { 
                    images.map( image => {
                        return (
                            <GifItem 
                                key={ image.id } 
                                { ...image }
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
