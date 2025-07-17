import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Sports from './pages/Sports'
import Footer from './pages/Footer'
import Admission from './pages/Admission'
import Faculty from './pages/Faculty'
// import AddFaculty from './components/AddFaculty'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
// import Faculty2 from './pages/Faculty2'
import FacultyPage from './pages/FacultyPage'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />

         <Route path='/faculty' element={<Faculty />} />
         <Route path="/facultyPage" element={<FacultyPage />} />



          <Route path='/faculty/add' element={
            <PrivateRoute>
              <FacultyPage />
            </PrivateRoute>
          } />


        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
