// Hooks

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
    return(
        <>
            <section className="bodyFavoritos">
                <section>
                    <Header />
                    <Navbar favoritos="ativo" />
                </section>
                <section className="mainFavoritos">
                    <h1>Favoritos</h1>
                    <TrocaDecor/>

                    
                </section>
                <Footer />
            </section>
        </>
    )
}

export default Favoritos