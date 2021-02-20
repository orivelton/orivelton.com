import { Flex } from '@chakra-ui/react'
import CtaPrimary from '../components/CtaPrimary'
import PreviewBlog from '../components/PreviewBlog'

const Index = () => (
  <>
    <Flex flexDirection="column">
      <CtaPrimary />
      <PreviewBlog />
    </Flex>
  </>
)

export default Index
