import React from 'react'
import Item from './Item'
import { Flex, SimpleGrid } from '@chakra-ui/react'

//Componenete de presentacion

const ItemList = ({ productos }) => {

  return (

    <div>

      <SimpleGrid columns={4} spacingX='40px' spacingY='20px'>
        {
          productos.map((p) => {
            return (
              <Item
                key={p.id}
                titulo={p.titulo}
                descripcion={p.descripcion}
                categoria={p.categoria}
                precio={p.precio}
                productoId={p.id}
                img={p.img}>

              </Item>
            )
          })

        }

      </SimpleGrid>
    </div>

  )
}

export default ItemList