import { useEffect, useState } from "react"
import "./styles/Home.css"

import Carta from "../components/Carta"

function Home() {

  const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem("Dados API")) || {})
  const [busca, setBusca] = useState("")
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informacoes")) || "")

  useEffect(() => {
    async function buscarPokemons() {
      try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca.toLowerCase()}`)
        const dados = await resposta.json()
        setPokemons(dados)
        guardarInformacoes(dados)
      } catch (error) {
        console.error(error)
      }
    }
    if(busca) buscarPokemons()
  }, [busca])

  const guardarInformacoes = (pokemon) => {
    const informacoes = {
      nome: pokemon.name,
      imagem: pokemon.sprites.front_default,
      tipo: pokemon.types[0].type.name,
      habilidades: pokemon.abilities.map(abilidade => abilidade.ability.name),
      estatistica: pokemon.stats.map(estatistica => estatistica.base_stat)
    }
    setInformacoes(informacoes)
    localStorage.setItem("Informacoes", JSON.stringify(informacoes))
  }

  useEffect(() => {
    localStorage.setItem("Dados API", JSON.stringify(pokemons))
  }, [pokemons])

  const mudancaInput = (e) => {
    setBusca(e.target.value)
  }

  return(
    <>
      <section className="contIco">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className="pesquisar" value={busca} onChange={mudancaInput} placeholder="Insira ID ou nome de um pokémon"/>
      </section>

      <Carta informacoes={informacoes} />
    </>
  )
}

export default Home