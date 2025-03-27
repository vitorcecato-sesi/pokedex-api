import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
    <br/>
    <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
