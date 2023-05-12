import Header from './components/header'
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/contact'

import { Routes, Route } from "react-router-dom"
import './App.css'


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
