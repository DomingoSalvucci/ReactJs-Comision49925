import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart'
import CarContextComponent from './context/CarContextComponent'
import CheckOut from './components/CheckOut'

export default function App() {

  return (
    <div>

      <CarContextComponent>

        <BrowserRouter>

          <NavBar />

          <Routes>

            <Route exact path='/' element={<ItemListContainer greeting={"Venta de Indumentaria Deportiva"} />} />
            <Route exact path='/about' element={< About />} />
            <Route exact path='/contact' element={< ContactUs />} />

            <Route exact path='/cart' element={< Cart />} />
            <Route exact path='/category/:idCategory' element={< ItemListContainer />} />
            <Route exact path='/item/:idItem' element={< ItemDetailContainer />} />
            <Route exact path='/checkout' element={<CheckOut />} />

          </Routes>

        </BrowserRouter>
      </CarContextComponent>

    </div>

  )
}

// export default App