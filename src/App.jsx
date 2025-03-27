// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Style
  import './App.css'
//.

// Pages
  import Home from "./pages/Home"
  import Favoritos from './pages/favoritos'
//.

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/favoritos' element={<Favoritos />}/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App