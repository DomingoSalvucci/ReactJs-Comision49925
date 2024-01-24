
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Center, Button, Flex, Box, SimpleGrid, CardHeader } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {

    return (

            <Card maxW='sm' borderWidth='1px'>
                <CardBody >
                    <Center>
                        <Image style={{ height: "200px" }} src={producto.img} alt={producto.descripcion} />
                    </Center>
                    <Stack mt='6' spacing='3'>
                        <Center>
                            <Heading size='md' fontSize='40px' color='blue'>{producto.titulo}</Heading>
                        </Center>
                        <Center>
                            <Text>
                                {producto.descripcion}
                            </Text>
                        </Center>

                        <Center>
                            <Text color='blue.600' fontSize='2xl'>
                                ${producto.precio}
                            </Text>
                        </Center>
                        <Center>
                            <Text as='b' color='black' fontSize='1xl'>
                                Stok: {producto.stock}
                            </Text>
                        </Center>
                    </Stack>
                </CardBody>
                <Divider />
                <Center>
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <ItemCount item={producto}></ItemCount>
                        </ButtonGroup>
                    </CardFooter>
                </Center>
            </Card>


    )
}

export default ItemDetail