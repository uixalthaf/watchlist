import {Link} from "react-router-dom";
function NavBar(){
    return(
        <nav className="navbar">
            <h2>My Watchlist</h2>
            <div className="navbar-brand">
            <Link to="/home"></Link>  
            <Link to="/favs"></Link>
            </div>
        </nav>
    )
}

export default NavBar;