import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Favorites from '../pages/Favorites';
import { likedMovies } from './likedMovies';
function MovieCard({movie,onClick}){


const [likedMovies,setlikedMovies]=useState([]);
var mov=null;
const onFavoriteClick= (e) => {
    e.stopPropagation();
    mov=movie.id
    setlikedMovies(likedMovies.push(mov))
  console.log(likedMovies); // if you want to see the updated list immediately
localStorage.setItem('likedMovies',JSON.stringify(likedMovies))
};

    return(
        <div className="movie-card card" onClick={()=>onClick(movie)}>
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} style={{
                width:"100%",height:'36vh'}}/>
                <div className="movie-overlay"></div>
                <a onClick={onFavoriteClick}>
                <i class="bi bi-heart" style={{
                    position:"relative",
                    top:"20px",
                    float:"right",
                    cursor:"pointer"
                }}></i>
                </a>
            </div>
            <div className="movie-info">
                <h6>{movie.title}</h6>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}


export default MovieCard;
