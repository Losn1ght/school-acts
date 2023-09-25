import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import About from './pages/about'
import './app.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
