import React from 'react'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Sports from './pages/Sports'
import Footer from './pages/Footer'
import Admission from './pages/Admission'
import Faculty from './pages/Faculty'


const App = () => {
  return (
    <BrowserRouter >
    <Navbar />

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/admission' element={<Admission />} />
      <Route path='/faculty' element={<Faculty />} />


    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
