//Style
import "./styles/Header.css"

//Imagens
import logoG3 from "../assets/logoG3.png"
import PokemonLogo from "../assets/Pokemon.png"
import ImgGitHub from "../assets/github.png"

function Header () {
    return (
        <>
        <header className="headerBox">
            <img className="logoHeader" src={logoG3} alt="Grupo03" />
            <a href="https://pokeapi.co/" target="_blank" >
                <img className="pokemonLogo" src={PokemonLogo} alt="pokemonLogo" /> 
            </a>
            <a href="https://github.com/vitorcecato-sesi/pokedex-api" target="_blank">
                <img className="imgGithub" src={ImgGitHub} alt="Logo Github" />
            </a>
        </header>
        </>
    )
}

export default Header