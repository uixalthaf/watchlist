import {Link} from "react-router-dom";
function NavBar(){
    return(
        <nav className="navbar">
            <h2>My Watchlist</h2>
            <div className="navbar-brand">
            <Link to="/home">Home</Link>  
            <Link to="/favs">Favourites</Link>
           <a href="">Arman</a> 
            <img width="30" height="30" src="https://img.icons8.com/external-others-inmotus-design/67/external-Avatar-avatars-others-inmotus-design-30.png" alt="external-Avatar-avatars-others-inmotus-design-30"
            style={{
                marginLeft:'10px',
                cursor:'pointer'
            }}/>
            </div>
        </nav>
    )
}

export default NavBar;