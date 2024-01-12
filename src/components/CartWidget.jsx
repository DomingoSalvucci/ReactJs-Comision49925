import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons' /*Import Icons*/
import { TiShoppingCart } from "react-icons/ti";
import { Flex } from '@chakra-ui/react';
const CartWidget = () => {
    return (
        <div >
            <Flex>
                <TiShoppingCart style={{color: 'blue'}} size={20}/>
                <p>0</p>
            </Flex>
        </div>
    )
}

export default CartWidget