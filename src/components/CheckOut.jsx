import { useContext, useState } from 'react'
import React from 'react'
import { cartContext } from '../context/CarContextComponent'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Box, Button, Center, HStack, Flex, Card, CardBody, Divider, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'

const CheckOut = () => {

    const { totalToPay, cart, deleteAllFromCart } = useContext(cartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [orderId, setOrderId] = useState("")

    // Funcion que verifica si el carrito esta vacio para mostrar un Alert, si tiene valor entonces carga en BBDD
    function validateForm() {

        if (cart.length == 0) {
            alert("El Carrito esta Vacio, No puede finalizar su compra")
        } else {
            const order = {
                buyer: { name, tel, email },
                totalToPay,
                cart,
            }

            // poner if para validar y controlar que no pusieron basura.
            const db = getFirestore();
            const orders = collection(db, "orders")

            addDoc(orders, order).then(
                ({ id }) => {
                    setOrderId(id)
                    deleteAllFromCart()
                })
        }
    }

    return (
        <>
            {orderId ? (<>
                
                <Center>
                    <Text fontSize='3xl' color="#CD5C5C">Gracias por Confiar en nosotros. </Text>
                </Center>
                
                <Center>
                    <Text fontSize='2xl'>El Identificador de su Compra es:</Text>
                </Center>
                <Center>
                    <Text fontSize='2xl' color="#00CED1">{orderId}</Text>
                </Center>
                <br />
                <Divider></Divider>
            </>

            ) :
                <div>
                    <Center>
                        <Card maxW='sm' borderWidth='1px'>
                            <CardHeader>
                                <Heading size='md'>Terminar Compra, Ingrese sus Datos</Heading>
                            </CardHeader>

                            <Divider />
                            <CardBody >
                                <Stack divider={<StackDivider />} spacing='2'>

                                    <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} /> <br />
                                    <input type="tel" placeholder="tel" onChange={(e) => setTel(e.target.value)} /> <br />
                                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} /> <br />

                                </Stack>

                            </CardBody>

                            <Divider />

                            <Center>
                                <Button onClick={validateForm}> Enviar Tus Datos</Button>
                            </Center>

                        </Card>

                    </Center>

                </div>

            }
        </>
    )
}

export default CheckOut