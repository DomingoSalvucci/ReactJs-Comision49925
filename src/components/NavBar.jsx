import React from 'react'
import CartWidget from './CartWidget'
import { Center, Button, Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons' /*Import Icons*/

const NavBar = () => {
  return (
    <div>

      <Flex p='4' >

        <Link to={"/"}>
          <Box p='4' bg='blue.200'>
            MyEcommerce
          </Box>
        </Link>

        <Spacer />

        <Menu>
          <MenuButton p='7' as={Button} bg='blue.200' size='sm' rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <Link to={'category/A'}>
              <MenuItem>Categoria A</MenuItem>
            </Link>
            <Link to={'category/B'}>
              <MenuItem>Categorai B</MenuItem>
            </Link>
            <Link to={'category/C'}>
              <MenuItem>Categorai C</MenuItem>
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

    </div>
  )
}

export default NavBar