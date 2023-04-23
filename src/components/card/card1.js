import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card1.css"
import { Link } from "react-router-dom"

const Cards1 = ({anime}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {setIsLoading(false)}, 1500)    // setTimeout(code, delay)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`${anime.url}`}  target="_blank" style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`${anime?anime.images.jpg.image_url:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{anime?anime.title:""}</div>
                    <div className="card__runtime">
                        {anime?anime.episodes:""}
                        <span className="card__rating">{anime?anime.score:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{anime ? anime.background+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards1;