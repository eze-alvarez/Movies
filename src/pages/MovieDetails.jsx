import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getMovie } from "../utils/httpClient";
import styles from "./MovieDetails.module.css"


export function MovieDetails(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    //console.log(movieId)
    useEffect(()=>{
        setIsLoading(true);
        getMovie("/movie/"+ movieId)
        .then((data)=> {
            setIsLoading(false);
            setMovie(data);
        })
    },[movieId]);

    if(isLoading){
        return <Spinner/>;
    }

    if(!movie){
        return null;
    }

    const imageUrl= "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    return (
    <div className={styles.detailsContainers}>
        <img className={`${styles.col} ${styles.movieImage} `} src={imageUrl} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}><strong>Title:</strong>{movie.title}</p>
            <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map(genre=>genre.name).join(", ")}
            </p>
            <p>Description:{movie.overview}</p>
        </div>
    </div>
)}