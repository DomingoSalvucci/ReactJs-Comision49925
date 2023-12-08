import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p='4'>
          MyEcommerce
        </Box>
        <Spacer />
        <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Categoria 1</MenuItem>
            <MenuItem>Categoria 2</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box p='4'>
          <CartWidget />
        </Box>
      </Flex>
      
    </div>
  )
}

export default NavBar