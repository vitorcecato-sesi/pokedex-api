import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TrocaDeCor from "../components/botaoTema";
import Carta from "../components/Carta";

import "./styles/Home.css";

function Home() {
  const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem("Dados API")) || {});
  const [busca, setBusca] = useState("");
  const [buscaInput, setBuscaInput] = useState("");
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informacoes")) || {});
  const [erro, setErro] = useState(false);

  useEffect(() => {
      async function buscarPokemons() {
        try {
          const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca.toLowerCase()}`);
          const dados = await resposta.json();
          if (dados) {
            setPokemons(dados);
            setErro(false);
            guardarInformacoes(dados);
          } else {
            setErro(true);
          }
        } catch (error) {
          console.error(error);
          setErro(true);
        }
      }
      buscarPokemons();
    
  }, [busca]);

  const guardarInformacoes = (dados) => {
    const informacoes = {
      nome: dados.name,
      imagem: dados.sprites.front_default,
      tipo: dados.types[0].type.name,
      habilidades: dados.abilities.map(abilidade => abilidade.ability.name),
      estatistica: dados.stats.map(estatistica => estatistica.base_stat),
    };
    setInformacoes(informacoes);
    localStorage.setItem("Informacoes", JSON.stringify(informacoes));
  };

  useEffect(() => {
    localStorage.setItem("Dados API", JSON.stringify(pokemons));
  }, [pokemons]);

  const clicarBotao = () => {
    if (buscaInput == "") { 
      setErro(true)
      return
    }
    setBusca(buscaInput)
    setBuscaInput("")
    setErro(false)
  }

  return (
    <>
      <Header/>
      <NavBar/>
      <section className="box-home">
      <section className="box-Barra">
        <input
          className="pesquisar"
          value={buscaInput}
          onChange={(e) => setBuscaInput(e.target.value)}
          placeholder="Insira ID ou nome de um pokémon"
        />
        <button className="botaoHome" onClick={clicarBotao}>🔍</button>
      </section>
        {erro ? (
          <p className="erro">Por favor, insira um Pokémon válido!</p>
        ) : (
          <Carta/>
        )}
        <TrocaDeCor/>
      </section>
      <Footer/>
    </>
  );
}

export default Home;