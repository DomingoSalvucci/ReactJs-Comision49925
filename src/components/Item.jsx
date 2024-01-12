import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Flex, Box, SimpleGrid, CardHeader, Center } from '@chakra-ui/react'
// import ItemCount from './ItemCount'

// no recibe (key) en Item y dejo de dar error.
const Item = ({ titulo, descripcion, categoria, precio, productoId }) => {

    return (

        <Card maxW='sm' borderWidth='1px'>
            <CardBody >
                <Image
                    src=""
                />
                <Stack mt='6' spacing='3'>
                    <Center>
                        <Heading size='md' fontSize='30px' color='blue.500'>{titulo}</Heading>
                    </Center>

                    <Center>
                        <Text>
                            Categoria: {categoria}
                        </Text>
                    </Center>

                    {/* <Center>
                        <Text>
                            {descripcion}
                        </Text>
                    </Center>
                    <Center>
                        <Text color='blue.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Center> */}
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
    )
}

export default Item