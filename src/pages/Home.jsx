// Style
    import "./styles/Home.css"
//.

import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function Home() {
    return(
        <>
        <Header/>
        <NavBar home="ativo" />
        <Footer/>

        </>
    )
}

export default Home