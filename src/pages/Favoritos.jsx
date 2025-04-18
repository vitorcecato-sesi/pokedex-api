// Hooks
    import { useEffect, useState } from "react"
//.

// Style
    import "./styles/Favoritos.css"
//.

// Componente
    import Header from "../components/Header"
    import Footer from "../components/Footer"
    import TrocaDecor from "../components/botaoTema"
    import Navbar from "../components/NavBar"
//.

function Favoritos() {
    const [infoFavorito, setInfoFavorito] = useState(JSON.parse(localStorage.getItem("Favoritos")) || []);

    useEffect(() => {
        const timer = setInterval(() => {
            setInfoFavorito(JSON.parse(localStorage.getItem("Favoritos")))
        }, 100)

        return() => {
            clearInterval(timer) // Remove o timer ao desmontar
        }
    }, [])

    const removerFavorito = (numeroArray) => {
        const novoFavoritos = infoFavorito.filter((conteudo, index) => index !== numeroArray)
        return (localStorage.setItem("Favoritos", JSON.stringify(novoFavoritos)))
    }

    return(
        <>
            <section className="bodyFavoritos">
                <section className="headerNavFav">
                    <Header />
                    <Navbar favoritos="ativo" />
                </section>
                <section className="mainFavoritos">
                    <h1>Favoritos</h1>
                    {infoFavorito && infoFavorito.length <= 0 && <p>Você não possui favoritos.</p>}
                    <section className="infoFavoritos">
                        {infoFavorito && infoFavorito.length > 0 && infoFavorito.map((pokemon, index) => (
                            <section className="cartaFavoritos">
                                <img src={pokemon.imagem} alt={`Imagem do ${pokemon.nome} `} />
                                <h2>{pokemon.nome}</h2>
                                <button id={document.body.style.backgroundColor == "red" ? "branco" : "vermelho"} className="buttonCarta" onClick={() => removerFavorito(index)}>Desfavoritar</button>
                            </section>
                        ))}
                    </section>
                    <TrocaDecor />
                    <br />
                </section>
                <Footer />
            </section>
        </>
    )
}

export default Favoritos