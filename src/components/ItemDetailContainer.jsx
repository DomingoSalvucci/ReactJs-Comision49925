
import React from 'react'
import ItemDetail from './ItemDetail'
import { SimpleGrid } from '@chakra-ui/react'
import ProductCategory from './ProductCategory'
import { useParams } from 'react-router-dom'
//Componenten contenedro


const ItemDetailContainer = ({ greeting }) => {
    // Parametro que llega de la seleccion de un producto en particular
    const { Id } = useParams()

    const productos = [
        { id: 1, titulo: "Producto A", descripcion: "Descripcion de Producto A", precio: 1000, categoria: "A" },
        { id: 2, titulo: "Producto B", descripcion: "Descripcion de Producto B", precio: 2000, categoria: "A" },
        { id: 3, titulo: "Producto C", descripcion: "Descripcion de Producto C", precio: 3000, categoria: "A" },
        { id: 4, titulo: "Producto D", descripcion: "Descripcion de Producto D", precio: 3000, categoria: "B" },
        { id: 5, titulo: "Producto E", descripcion: "Descripcion de Producto E", precio: 3000, categoria: "B" },
        { id: 6, titulo: "Producto F", descripcion: "Descripcion de Producto F", precio: 3000, categoria: "B" },
        { id: 7, titulo: "Producto G", descripcion: "Descripcion de Producto G", precio: 3000, categoria: "C" },
        { id: 8, titulo: "Producto H", descripcion: "Descripcion de Producto H", precio: 3000, categoria: "C" },
        { id: 9, titulo: "Producto I", descripcion: "Descripcion de Producto I", precio: 3000, categoria: "C" },
        { id: 10, titulo: "Producto J", descripcion: "Descripcion de Producto J", precio: 4000, categoria: "C" }
    ]

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(" No se obtuvieron productos ")
        }
    })

    mostrarProductos
        .then((resultado) => {
            // console.log("Prodcutos: ", productos)
        }
        )
        .catch((error) => {
            alert(error)
        }
        )

    const productoFiltrado = productos.find((productos) => productos.id == Id)

    return (
        <div>
            <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>

                <ItemDetail
                    producto={productoFiltrado} >
                </ItemDetail>
            </SimpleGrid>
        </div>
    )
}

export default ItemDetailContainer








