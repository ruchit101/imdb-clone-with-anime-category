import React, {useEffect, useState} from "react"
import "./animelist.css"
import { useParams } from "react-router-dom"
import Cards1 from "../card/card1"

const Animelist = () => {
    
    const [animelist, setanimelist] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://api.jikan.moe/v4/anime`)
        .then(res => res.json())
        .then(dat => setanimelist(dat.data))
    }
    console.log(animelist);

    return (
        <div className="movie__list">
            <h2 className="list__title">{("Animes").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    animelist.map((anime) => (
                        <Cards1 anime={anime} />
                    ))
                }
            </div>
        </div>
    )
}

export default Animelist;