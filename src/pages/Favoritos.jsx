// Hooks

//.

// Style
    import "./styles/Favoritos.css"
//.

// Componente
    import Header from "../components/Header"
    import Footer from "../components/Footer"
    import TrocaDecor from "../components/botaoTema"
//.

function Favoritos() {
    return(
        <>
            <section className="bodyFavoritos">
                <Header />
                <section className="mainFavoritos">
                    <h1>Favoritos</h1>

                    
                </section>
                <Footer />
            </section>
        </>
    )
}

export default Favoritos