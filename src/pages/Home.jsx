import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TrocaDeCor from "../components/botaoTema";
import Carta from "../components/Carta";

import "./styles/Home.css";

function Home() {
  const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem("Dados API")) || {});  // Todos os valores da api
  const [busca, setBusca] = useState(""); // Pega o valor pesquisado
  const [buscaInput, setBuscaInput] = useState(""); // Pega o valor do input
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informacoes")) || {});  // Pega as informações do pokemon pesquisado
  const [erro, setErro] = useState(false);  // Tratamento de erro

  useEffect(() => {
      async function buscarPokemons() {
        try {
          const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca.toLowerCase()}`); // LowerCase para tratar letras maiusculas
          const dados = await resposta.json();
          if (dados) {
            setPokemons(dados);
            setErro(false);
            guardarInformacoes(dados);  // Função para tratar os dados
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
    const informacoes = {   // Objeto com as informações do pokemon
      nome: dados.name,
      imagem: dados.sprites.front_default,
      tipo: dados.types[0].type.name,
      habilidades: dados.abilities.map(abilidade => abilidade.ability.name),
      estatistica: dados.stats.map(estatistica => estatistica.base_stat),
    };
    setInformacoes(informacoes);
    localStorage.setItem("Informacoes", JSON.stringify(informacoes)); // Atualiza os dados do local storage
  };

  useEffect(() => {
    localStorage.setItem("Dados API", JSON.stringify(pokemons));  // Atualiza os dados do local storage
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
      <NavBar home="ativo"/>
      <section className="box-home">
      <section className="box-Barra">
        <input
          className="pesquisar"
          value={buscaInput}
          onChange={(e) => setBuscaInput(e.target.value)} // Quando o input for alterado, salva as informações do input
          placeholder="Insira ID ou nome de um pokémon"
        />
        <button className="botaoHome" onClick={clicarBotao}>🔍</button>
      </section>
        {erro ? (
          <p className="erro">Por favor, insira um Pokémon válido!</p>  // Tratamento de erro
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