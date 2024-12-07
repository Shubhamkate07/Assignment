import React from 'react'
import Nav from './Components/Nav/Nav.js'
import Home from './Components/Header/Home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './Components/Header/ProductDetails.js'
import About from './Components/Header/AboutPage/About.js'
import Buybook from './Components/Buybook/Buybook.js'
import Contact from './Components/Contact/Contact.js'
import PageNotFound from './Components/404/PageNotFound.js'

const App = () => {
  
  return (
    <div>

            <Nav/>
      <BrowserRouter>
      <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/bookid/:id' element={<ProductDetails/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/buybook' element={<Buybook/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
