import React from 'react'
import Nav from './Components/Nav/Nav.js'
import Home from './Components/Header/Home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './Components/Header/ProductDetails.js'
import About from './Components/AboutPage/About.js'
import Buybook from './Components/Buybook/Buybook.js'
import Contact from './Components/Contact/Contact.js'
import PageNotFound from './Components/404/PageNotFound.js'
import Items from './Components/Header/Items.js'
import Login from './Components/Login/Login.js'
import Signup from './Components/Signup/Signup.js'

const App = () => {
  
  return (
    <div>

            <Nav/>
      <BrowserRouter>
      <Routes>



{/* used api and fetch data of book */}
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/' element={<Login/>}/> */}
    {/* <Route path='/item' element={<Items/>}/> */}
    <Route path='/signup' element={<Signup/>}/>
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
