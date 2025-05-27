import { likedMovies } from "../components/likedMovies.js";
import movies from "../components/movieList.js";
function Favorites(){
    const saved=localStorage.getItem('likedMovies');
    const likedMovies=saved ? JSON.parse(saved) : [];
    console.log(likedMovies);
    const index = movies.findIndex(movie => movie.id === likedMovies[0]);

console.log(index); // Output: 1
    return(
        <div className="fav-block d-flex flex-column gap-1 justify-content-center align-items-center">

            <h5 className="">No Favorite Movies added yet</h5>
            <p className="fav-cap">Add them and they will show up here</p>

            <h5>{movies[index].title}</h5>
            <img src={movies[index].url} alt="" />
        </div>
    )
}
export default Favorites;