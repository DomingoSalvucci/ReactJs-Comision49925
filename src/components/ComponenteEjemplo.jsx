
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ComponenteEjemplo = () => {

    const { comision } = useContext(CartContext)

    


    return (
        <div>
            {/* <button onClick={() => setCart("Nuevo valor")}> Boton </button> */}
            {comision}
            
        </div>
    )
}

export default ComponenteEjemplo