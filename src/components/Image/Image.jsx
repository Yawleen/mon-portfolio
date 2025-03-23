import style from "./Image.module.css"
import { useState, useEffect } from "react"


export default function ImageComponent({ src, alt }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = src;
    }, [src])

    return (
        <img className={`${style.image} ${imageLoaded && style.loaded}`} src={src} alt={alt} loading="lazy" />
    )
}