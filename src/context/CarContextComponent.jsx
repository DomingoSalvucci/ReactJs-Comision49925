import React, { useEffect } from 'react'
import { useState, createContext } from 'react'

export const cartContext = createContext()

export default function CarContextComponent({ children }) {

    const [cart, setCart] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [totalToPay, setTotalToPay] = useState(0)

    function addToCart(item, contador) {

        const cartAux = [...cart]

        let foundInCart = false
        for (let i = 0; i < cartAux.length; i++) {

            if (cartAux[i].id == item.id) {
                cartAux[i].contador = cartAux[i].contador + contador
                foundInCart = true
            }
        }

        if (!foundInCart) {
            cartAux.push({ ...item, contador })
        }

        setCart(cartAux)

    }

    function deleteFromCart(id){
        setCart(cart.filter((item) => item.id !== id))
    }
    function deleteAllFromCart(){
        setCart([])
    }

    useEffect(() => {
        setTotalCount(cart.reduce((acc, item) => acc + item.contador, 0))
        setTotalToPay(cart.reduce((acc, item) => acc + item.contador * item.precio, 0))
    }, [cart] )

    useEffect(() => {
        console.log(totalToPay)
    }, [totalToPay] )

    return (
        <cartContext.Provider value={{ cart, addToCart, totalCount, totalToPay, deleteFromCart, deleteAllFromCart }}>
            {children}
        </cartContext.Provider>
    )
}

