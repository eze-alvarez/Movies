import { useEffect, useState } from "react";
import { getMovie } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";


export function MoviesGrid(){

    const [movies,setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search")

    useEffect(() => {
            setIsLoading(true)
            const searchUrl = search
                ?"/search/movie?query=" + search
                :"/discover/movie";
                
            getMovie(searchUrl)
                .then(data=>{
                    setIsLoading(false)
                    setMovies(data.results)
                })
    },[search]);
    
    if(isLoading){
        return <Spinner/>
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map(movie=>{
                return <MovieCard key={movie.id} movie={movie}/>
            })}    
        </ul>
    )
}