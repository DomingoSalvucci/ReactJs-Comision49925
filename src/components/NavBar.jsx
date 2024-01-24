import React from 'react'
import CartWidget from './CartWidget'
import { Center, Button, Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons' /*Import Icons*/

const NavBar = () => {
  return (
    <div>

      <Flex p='4' >

        <Link to={"/"}>
          <Box p='4' bg='blue.200'>
            MyEcommerce  🏠
          </Box>
        </Link>

        <Spacer />

        <Menu>
          <MenuButton p='7' as={Button} bg='blue.200' size='sm' rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <Link to={'category/Mujer'}>
              <MenuItem>Categoria Mujer</MenuItem>
            </Link>
            <Link to={'category/Hombre'}>
              <MenuItem>Categorai Hombre</MenuItem>
            </Link>
            <Link to={'category/Niño'}>
              <MenuItem>Categorai Niño</MenuItem>
            </Link>

          </MenuList>
        </Menu>


        <Spacer />
        <Link to={"/cart"}>
          <Box p='4' bg='blue.200'>
            <CartWidget />
          </Box>
        </Link>
      </Flex>
      <Divider />
      <br />
    </div>
  )
}

export default NavBar