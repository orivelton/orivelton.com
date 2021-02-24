import { Box, Flex, HStack} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DarkModeSwitch } from './DarkModeSwitch'
import Logo from './Logo'
import style from '../scss/Nav.scss';

const Links = ['Home', 'Projects', 'Blog', 'Contact']

export default function Nav() {
  const router = useRouter();
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
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  title={`Go to ${link === '/Home' ? 'Home' : link}`}
                >
                  <a className={router.pathname === `/${link.toLowerCase()}` || router.pathname === '/' && link === 'Home' ? 'selected' : 'link'}>
                    {link}
                  </a>
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
