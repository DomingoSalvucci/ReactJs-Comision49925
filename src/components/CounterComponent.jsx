import React from 'react'
import useCounter from '../hooks/UseCounter'

const CounterComponent = () => {
    // desestructuro un objeto
    const { contador, suma, resta } = useCounter(0, 2)

    return (
        <div>
            <h2>contador: {contador}</h2>
            <button onClick={resta}>restar</button>
            <button onClick={suma}>sumar</button>
        </div>
    )
}

export default CounterComponent