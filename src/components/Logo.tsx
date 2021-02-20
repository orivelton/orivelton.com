import Link from 'next/link'
import Icon from '@chakra-ui/icon'
import { GiMoebiusTriangle } from 'react-icons/gi'

const Logo = () => (
  <Link href="/">
    <Icon as={GiMoebiusTriangle} w={45} h={45} />
  </Link>
)

export default Logo;