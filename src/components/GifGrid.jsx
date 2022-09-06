import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]); 

    const getImages = async() => {
        const newImages = await getGifs( category);
        console.log(newImages);
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, [])

    //getGifs(category); //mala practica se llamara cada vez que renderize este componente

    return (
        <>
            <h3> { category } </h3>

            <div className="card-grid">
            {
            images.map( (image) => (
                        <GifItem key={image.id} {...image}/>
                    ))
            }

            </div>
        
        </>
    )
}
