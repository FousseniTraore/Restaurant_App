import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About'
import Contact from './Pages/Contact'
import SearchResult from './Pages/SearchResult';
import RestaurantDetails from './Pages/RestaurantDetails';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/results/:location" element={<SearchResult />} />
        <Route path="/restaurant/:index" element={<RestaurantDetails />} />
      </Routes>
      <Footer/>
  </BrowserRouter>
  )
}

export default App
