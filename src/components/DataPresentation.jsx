import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Flex, Box, SimpleGrid, CardHeader } from '@chakra-ui/react'

const DataPresentation = ({ title, description, price }) => {
    return (
        <div>
            <Card maxW='sm' borderWidth='1px'>
                <CardBody >
                    <Image
                        src=""
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>
                        <Text>
                            {description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${price}
                        </Text>
                    </Stack>
                </CardBody>
                {/* <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <ItemCount></ItemCount>
                </ButtonGroup>
            </CardFooter> */}
            </Card>


        </div>
    )
}

export default DataPresentation
