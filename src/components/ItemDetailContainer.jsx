
import ItemDetail from './ItemDetail'
import { SimpleGrid, Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

//Componenten contenedro


const ItemDetailContainer = ({ greeting }) => {
    // Parametro que llega de la seleccion de un producto en particular
    const { idItem } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const refDoc = doc(db, 'products', idItem)

        getDoc(refDoc).then((item) => {

            const auxProduct = { ...item.data(), id: item.id }

            setProducto(auxProduct)
        }
        )

    }, [idItem])

    return (
        <div>
            <Center>
                {/* <SimpleGrid columns={3} spacingX='40px' spacingY='20px'> */}
                    <ItemDetail
                        producto={producto} >
                    </ItemDetail>
                {/* </SimpleGrid> */}
            </Center>
        </div>
    )
}

export default ItemDetailContainer








