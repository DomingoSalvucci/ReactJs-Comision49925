import React from 'react'
import NavBar from './components/NavBar'
import { Button, ButtonGroup } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos a mi ecommerce"} />

    </div>
  )
}

export default App