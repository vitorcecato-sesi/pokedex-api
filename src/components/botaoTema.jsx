import { useState,useEffect } from "react";
import './styles/botaoTema.css'
function TrocaDeCor() {
  const [tema, setTema] = useState(false) // Começa no claro
  
  useEffect(() => {
      document.body.style.backgroundColor = tema ? "red" : "white"
      document.body.style.color = tema ? "white" : "black"
      console.log(`Tema atualizado: ${tema ? "poke" : "bola"}`)
  }, [tema])

    return (
        <section className="button">
      <div >
        <h1>Botao para alterar</h1>
        <p>Teste para o botao</p>
 <button className="botao" onClick={() => setTema(!tema)} > {tema ? "Poke" : "Bola"}</button>
  
        
      </div>
      </section>
    );
  }
  
  export default TrocaDeCor;