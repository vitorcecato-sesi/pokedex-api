import { useState } from "react";
import './styles/botaoTema.css'
function TrocaDecor() {

  const [Tema, setCor] = useState(false);
    return (
        <section className="button">
      <div className={Tema ? 'poke' : 'bola'}  >
        <h1>Botao para alterar</h1>
        <p>Teste para o botao</p>
 <button className="botao" onClick={() => setCor(!Tema)} > {Tema ? "Poke" : "Bola"}</button>
  
        
      </div>
      </section>
    );
  }
  
  export default TrocaDecor;