import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'

{/*import { Button, ButtonGroup } from '@chakra-ui/react'*/ }
import ItemListContainer from './components/ItemListContainer'


import ProductId from './components/ProductId'
import ItemCount from './components/ItemCount'
import Item from './components/Item'

import ShoppingCartProvider from './context/ShoppingCartContext'
import { TriangleUpIcon } from '@chakra-ui/icons'
import { Spinner } from '@chakra-ui/react'
import Loader from './components/Loader'
import DataContainer from './components/DataContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CounterComponent from './components/CounterComponent'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart'
import CartWidget from './components/CartWidget'
import ProductCategory from './components/ProductCategory'

import ShoppingCartContext from './context/ShoppingCartContext'
import ComponenteEjemplo from './components/ComponenteEjemplo'


const App = () => {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setProductos(["Producto A", "Producto B", "Prodcuto C"])
  //     setLoading(false)
  //   }
  //   )
  // }, 5000)

  // if (setProductos.length > 0) {
  //   setLoading(true)
  // }

  // const isLoading = true
  return (
    <div>

      <BrowserRouter>

        <NavBar />

        {/* <ItemListContainer greeting={"Bienvenidos a mi ecommerce"} /> */}

        {/* <ItemDetailContainer /> */}

        {/* DataContainer: No se utiliza para el proyecto esta solo de ejercicio de consumo de APIs*/}
        {/* <DataContainer /> */}

        {/* CounterComponet: creacion de un Custom Hook */}
        {/* <CounterComponent /> */}
        <ShoppingCartContext>
          <ComponenteEjemplo />
        </ShoppingCartContext>
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />} />
          <Route exact path='/about' element={< About />} />
          <Route exact path='/contact' element={< ContactUs />} />
          <Route exact path='/cart' element={< Cart />} />

          <Route exact path='/category/:Id' element={< ItemListContainer />} />
          <Route exact path='/item/:Id' element={< ItemDetailContainer />} />
        </Routes>


      </BrowserRouter>

    </div>

  )
}

export default App