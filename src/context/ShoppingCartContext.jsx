import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const comision = "React en CoderHouse"

    return (
        <CartContext.Provider value={{ comision, cart }}>
            {children}
        </CartContext.Provider>)
}

export default ShoppingCartProvider