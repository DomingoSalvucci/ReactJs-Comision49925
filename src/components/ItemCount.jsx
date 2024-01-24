import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/CarContextComponent'
import { Link } from 'react-router-dom'
import { SimpleGrid, Box, Button, Center } from '@chakra-ui/react'

const ItemCount = ({ item }) => {

  const [contador, setContador] = useState(1)
  const { cart, addToCart } = useContext(cartContext)
  const [removeButton, setRemoveBotton] = useState(false)

  function sumar() {
    if (contador < item.stock) {
      setContador(contador + 1)
    }
  }

  function restar() {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  function onAdd() {

    addToCart(item, contador)
    setRemoveBotton(true)
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])


  return (
    <div>

      {removeButton ? (
        <>
          <Box>
            <Center>
              <b>Producto Agregado...</b>
            </Center>
          </Box>

          <SimpleGrid columns={2} spacing={30}>

            <Box height='30px'>
              <Button>
                <Link to="/"> Seguir Comprando </Link>
              </Button>
            </Box>

            <Box height='30px'>
              <Button>
                <Link to="/checkout"> Terminar Compra </Link>
              </Button>
            </Box>

          </SimpleGrid>

        </>
      ) : (<>
        <Button colorScheme='teal' size='xs' onClick={sumar}> + </Button>
        <Button onClick={onAdd}>Agregar al Carrito {contador} </Button>
        <Button colorScheme='teal' size='xs' onClick={restar}> - </Button>
      </>)}

    </div >

  )
}

export default ItemCount