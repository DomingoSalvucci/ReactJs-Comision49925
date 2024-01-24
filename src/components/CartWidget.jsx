import React, { useContext, useEffect } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons' /*Import Icons*/
import { TiShoppingCart } from "react-icons/ti";
import { Flex } from '@chakra-ui/react';
import { cartContext } from '../context/CarContextComponent';

const CartWidget = () => {

    const { cart, totalCount } = useContext(cartContext)

    return (
        <div >
            <Flex>
                <TiShoppingCart style={{ color: 'blue' }} size={20} />
                <p>{totalCount}</p>
            </Flex>
        </div>
    )
}

export default CartWidget