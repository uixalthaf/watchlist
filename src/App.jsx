import { useState } from 'react'
import './App.css'
import MovieCard from './components/movieCard'
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom";
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
function App() {
  const movieNumber=1;
  const [count, setCount] = useState(0)

  return (
    <div>
<NavBar/>

   <main>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/Favs" element={<Favorites/>}/>

    </Routes>
   </main>
   </div>
  )
}

export default App
