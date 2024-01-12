import { useState, useEffect } from 'react'
import DataPresentation from './DataPresentation'

const DataContainer = () => {

  const getProductos = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
  }

  const [productos, setProductos] = useState([])

  console.log(productos)

  useEffect(() => {
    getProductos().then((product) => setProductos(product))
  }, [])



  return (
    <div>{
      productos.map((p) => {
        return (
          <DataPresentation
            key={p.id}
            title={p.title}
            description={p.description}
            price={p.price}
          />
        )
      })
    }</div>
  )
}

export default DataContainer