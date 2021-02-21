import Link from 'next/link'
import Icon from '@chakra-ui/icon'
import { GiMoebiusTriangle } from 'react-icons/gi'

const Logo = () => {
  return (
    <Link href="/">
      <a title="Go to Home">
        <Icon as={GiMoebiusTriangle} w={45} h={45}/>
      </a>
    </Link>
  )
}

export default Logo;