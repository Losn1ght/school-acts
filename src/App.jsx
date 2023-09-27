import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import About from './pages/about'
import './App.css'

function App() {
  const [title, setTitle] = useState("")

  function getData(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response=> response.json())
    .then(json=> {
      console.log(json)
      setTitle(json.message)
    })
  }


  return (
    <>
      <div className="image">
          <img src={title}></img>
      </div>
      <button onClick={getData} >Click Me</button>
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
