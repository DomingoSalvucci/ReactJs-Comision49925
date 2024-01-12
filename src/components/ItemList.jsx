import React from 'react'
import Item from './Item'
import { Flex, SimpleGrid } from '@chakra-ui/react'

//Componenete de presentacion

const ItemList = ({ productos }) => {
  // console.log(productos)

  return (

    <div>
      {/* <Flex w='1000px' bg='green.500'> */}
      <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
        {
          productos.map((p) => {
            return (
              <Item
                key={p.id}
                titulo={p.titulo}
                descripcion={p.descripcion}
                categoria={p.categoria}
                precio={p.precio}
                productoId={p.id}>

              </Item>
            )
          })

        }
        {/* </Flex> */}
      </SimpleGrid>
    </div>

  )
}

export default ItemList