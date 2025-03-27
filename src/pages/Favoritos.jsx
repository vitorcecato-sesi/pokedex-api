// Hooks

//.

// Style
    import "./styles/Favoritos.css"
//.

// Componente
    import Header from "../components/Header"
    import NavBar from "../components/NavBar"
    // import Footer from "../components/Footer"
//.

function Favoritos() {
    return(
        <>
            <Header />
            <NavBar/>
            <section className="mainFavoritos">
                <h1>Favoritos</h1>

            </section>
        </>
    )
}

export default Favoritos