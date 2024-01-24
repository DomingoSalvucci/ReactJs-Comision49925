import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Flex, Box, SimpleGrid, CardHeader, Center } from '@chakra-ui/react'
// import ItemCount from './ItemCount'

// no recibe (key) en Item y dejo de dar error.
const Item = ({ titulo, descripcion, categoria, precio, productoId, img }) => {

    return (
        <>

            <Card maxW='sx' borderWidth='1px'>
                <CardBody >

                    <Center>
                        <Image style={{ height: "200px" }} src={img} alt={descripcion} />
                    </Center>

                    <Stack mt='6' spacing='1'>
                        <Center>
                            <Heading size='md' fontSize='30px' color='green.500' align="center">{titulo}</Heading>
                            {/* <Text fontSize='2xl' align="center">{titulo}</Text> */}
                        </Center>

                        <Center>
                            <Text as='b'>
                                Categoria: {categoria}
                            </Text>
                        </Center>

                        <Center>
                            <Text>
                                {descripcion}
                            </Text>
                        </Center>
                        <Center>
                            <Text color='blue.600' fontSize='2xl'>
                                ${precio}
                            </Text>
                        </Center>
                    </Stack>
                </CardBody>

                <Divider />

                <Center>
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            {/* <ItemCount></ItemCount> */}
                            <Button>
                                <Link to={`/item/${productoId}`}>
                                    Ver detalle
                                </Link>
                            </Button>
                        </ButtonGroup>

                    </CardFooter>
                </Center>
            </Card>

        </>
    )
}

export default Item