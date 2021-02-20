import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import Logo from './Logo'

const Links = ['Projects', 'Blog', 'Contact']


export default function Nav() {

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
          </HStack>
          <Box alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}>
              {Links.map((link) => (
                <Link
                  key={link}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{ textDecoration: 'none', bg: 'gray.200' }}
                  href={'#'}>
                  {link}
                </Link>
              ))}
            </HStack>
          </Box>
          <DarkModeSwitch />
        </Flex>
      </Box>
    </>
  );
}