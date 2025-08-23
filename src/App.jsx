import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import "./assets/scss/index.scss"

function App() {

  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  )
}

export default App
