//Style
import "./styles/Footer.css";

//Imagens
import foto1 from "../assets/gmail.png"
import foto2 from "../assets/instagram.png"
import logoG3 from "../assets/logoG3.png"

function Footer() {
  return (
    <>
      <footer className="footerBox">

        <section className="contatos">
            <section className="bloco-img1">
                <img className="img-redes" src={foto1} />
                <h3 className="email">abacate.grupo3@gmail.com</h3>
            </section>

            <section className="bloco-img2">
                <img className="img-redes" src={foto2} />
                <h3 className="instagram">@grupo3_abacates</h3>
             </section>
        </section>

        <img className="imglogo" src={logoG3} />

        <section className="integrantes">
            <p>
            Laura Betti Migliaccio - Lucas Casagrande da Silva - Milena Oliveira Souza<br />
            Pietro Melle Michelin - Pyetro Joaquim Nunes - Vitor Geraldo Cecato
            </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
