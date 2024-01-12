import React from 'react'
import { useParams } from 'react-router-dom'

const ProductCategory = () => {
    const {category} = useParams()
    console.log(category)
    
  return (
    <div>ProductCategory</div>
  )
}

export default ProductCategory