import { useEffect, useState } from "react"
import "./styles/Home.css"

function Home() {

  const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem("Dados API")) || {})
  const [busca, setBusca] = useState("")
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "")
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [mensagem, setMensagem] = useState ("")


  useEffect(() => {
    async function buscarPokemons() {
      try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca.toLowerCase()}`)
        const dados = await resposta.json()
        setPokemons(dados)
      } catch (error) {
        console.error(error)
        setErro(erro.message);
      } finally {
        setLoading(false);
      }
    }
    if(busca) buscarPokemons()
  }, [])

  const guardarInformacoes = () => {
    const dados = {
      nome: pokemons.name,
      imagem: pokemons.sprites.front_default,
      tipo: pokemons.types[0].type.name,
      habilidades: pokemons.abilities.map((abilidade) => abilidade.ability.name),
      estatistica: pokemons.stats.map((estatistica) => estatistica.base_stat)
    }
    setInformacoes(dados)
    localStorage.setItem("Informações", JSON.stringify(informacoes))

  }

  useEffect(() => {
    localStorage.setItem("Dados API", JSON.stringify(pokemons))
  }, [pokemons])

    if (erro) return setMensagem ("Pokémon não encontrado!")
        
    

function mensagemLoading () {
    if (loading) {
        return (
        <p>Carregando pokemons...</p>
        )
    }
}

  return(
    <>

    <h2>Pokédex: </h2>
    <p>Busque seus pokemons preferidos!</p>
      <section className="boxBarra">
        <input className="pesquisar" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Insira ID ou nome de um pokémon"/>
        <button className="botaoBusca" onClick={guardarInformacoes}> Buscar </button>
        <p>{mensagem}</p>
      </section>
    </>
  )
}

export default Home