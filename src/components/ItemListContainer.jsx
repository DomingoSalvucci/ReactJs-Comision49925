import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { Center, Divider, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
//Componenten contenedro

const ItemListContainer = ({ greeting }) => {
  // Parametro que proviene de la lista de Categorias
  const { idCategory } = useParams()

  const [productos, setProductos] = useState([])

  useEffect(() => {

    const db = getFirestore()
    let miCollection

    if (idCategory == undefined) {

      miCollection = collection(db, 'products')

    } else {

      miCollection = query(collection(db, 'products'), where("categoria", "==", idCategory))
    }

    getDocs(miCollection).then((data) => {

      const auxProducts = data.docs.map((product) => ({
        ...product.data(), id: product.id
      }))

      setProductos(auxProducts)
    }
    )

  }, [idCategory])



  return (
    <div>
      <Center p="1">
        <Text as='b' fontSize='40px' color="#FF0000">{greeting}</Text>
      </Center>

      {<ItemList productos={productos} />}

    </div>
  )
}

export default ItemListContainer