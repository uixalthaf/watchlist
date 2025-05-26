import { useState } from "react";
import MovieCard from "../components/movieCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "bootstrap";
import ModalCard from "../components/ModalCard";
import { ModalHeader } from "react-bootstrap";
import movies from "../components/movieList";
function Home(){

    const[searchQuery,setSearchQuery]=useState("");


const [modalShow, setModalShow] = useState(false);
const [header,setHeader]=useState("");
const [desc,setDesc]=useState("");
const [url,setUrl]=useState("")

  
const handleSearch=(e)=>{
    e.preventDefault();
};
const showInfo=(movie)=>{
setHeader(movie.title)
setDesc(movie.description)
setUrl(movie.url)
setModalShow(true);


}
    return(
        <div className="home">

      <ModalCard
        show={modalShow}
        onHide={() => setModalShow(false)
        
        }
        title={header}
        url={url}
        description={desc}

      />
            <form action="" onSubmit={handleSearch} className="search-form">
                <div className="d-flex gap-1 align-items-center">
                <input type="text" placeholder="Search for Movies" 
                value={searchQuery} className="form-control"
                onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit"  variant="primary" className="search-button btn btn-dark">Search</button>
                </div>
            </form>
            <div className="movies-grid">
                {
                    movies.map(movie=>
                      movie.title.toLowerCase().startsWith(searchQuery)&&(
                      <MovieCard  movie={movie} key={movie.id} description={movie.description}
                      onClick={showInfo}/>
                      )
                    )
                }
            </div>
        </div>
    )
}

export default Home