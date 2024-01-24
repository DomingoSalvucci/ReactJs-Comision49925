import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CarContextComponent';
import { Box, Button, Center, HStack, Flex, Card, CardBody, Divider, CardHeader, Heading, Stack, StackDivider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { DeleteIcon } from '@chakra-ui/icons'

const Cart = () => {

  const { cart, totalCount, totalToPay, deleteFromCart } = useContext(cartContext)

  return (
    <div>
      <Center>

        <Card maxW='sm' borderWidth='1px'>

          <CardHeader>
            <Heading size='md'>Sus Productos</Heading>
          </CardHeader>

          <CardBody >

            <Stack divider={<StackDivider />} spacing='4'>
              {cart.map((item) => (

                <div key={item.id}>
                  <Link onClick={() => deleteFromCart(item.id)}>
                    <DeleteIcon w={5} h={5} />
                  </Link>
                  {" - " + item.titulo + "   -   Cantidad: " + item.contador +" - " + (item.contador*item.precio) +" $ "}
                </div>

              ))}

              <div>Prodcutos: {totalCount} - Total a pagar: {totalToPay} $</div>
            </Stack>

          </CardBody>

          <Divider />

          <Center>

            <Button>
              <Link to={'/checkout'}>Terminar Compra</Link>
            </Button>
            
          </Center>

        </Card>
      </Center>
    </div>
  )
}

export default Cart
