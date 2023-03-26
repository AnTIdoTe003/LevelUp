import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Services></Services>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default App