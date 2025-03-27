import { useEffect, useState } from "react"
import "./styles/Home.css"

function Home() {

    const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem("Dados API")) || [])
    const [busca, setBusca] = useState ("")
    const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "")
    
    useEffect(() => {
      async function buscarPokemons() {
        try {
          const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${(busca.toLowerCase)}`)
          const dados = await resposta.json()
          setPokemons(dados)
        } catch (error) {
          console.error(error)
        }
      }
      buscarPokemons()
    }, [])
  
    const guardarInformacoes = (pokemon) => {
      const informacoes = {
        nome: pokemon.name,
        imagem: pokemon.sprites.front_default,
        tipo: pokemon.types.type.name,
        habilidades: pokemon.abilities,
        estatistica: pokemon.stats

      }
      setInformacoes(informacoes)
      localStorage.setItem("Informações", JSON.stringify(informacoes))
    }
  
    useEffect(() => {
      localStorage.setItem("Dados API", JSON.stringify(pokemons))
    }, [pokemons])

const mudancaInput = (e) => {
    setBusca(e.target.value)
    guardarInformacoes(informacoes)
}

    return(
        <>
        <section class="contIco">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input class="pesquisar" value={busca} onChange={mudancaInput} placeholder="Insira  ID ou nome de um pokémon"/>
    </section>
        </>
    )
}

export default Home