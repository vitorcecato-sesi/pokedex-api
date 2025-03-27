import { Link } from "react-router-dom"
import "./styles/NavBar.css"

import Pokebola from "../assets/pokebolaSemFundo.png"
import Estrela from "../assets/estrelaFundo.png"

function Navbar(props) {

  return (
    <nav className="blocoNavBar"> 
<div className="blox-pokebox">
           <Link className="link" id="link" to="/"> <strong id={props.home} className="Texto">Pokedéx</strong> </Link>
           <img  className="imagem1" src={Pokebola}  /> 
           </div>
    
          <div className="blox-favoritos">
           <Link className="link" id="link" to="/favoritos"><strong id={props.favoritos} className="Texto">Favoritos</strong></Link>
           <img  className="imagem2" src={Estrela}  />
           </div>
    </nav>
  )
}
export default Navbar;