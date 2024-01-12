import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Center, Button, Flex, Box, SimpleGrid, CardHeader } from '@chakra-ui/react'
import ItemCount from './ItemCount'


// no recibe (key) en Item y dejo de dar error.
const ItemDetail = ({ producto }) => {

    return (

        <Card maxW='sm' borderWidth='1px'>
            <CardBody >
                <Image
                    src=""
                />
                <Stack mt='6' spacing='3'>
                    <Center>
                        <Heading size='md' fontSize='40px' color='tomato'>{producto.titulo}</Heading>
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
                </Stack>
            </CardBody>
            <Divider />
            <Center>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount></ItemCount>
                    </ButtonGroup>
                </CardFooter>
            </Center>
        </Card>
    )
}

export default ItemDetail