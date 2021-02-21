import { Flex } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import CtaPrimary from '../components/CtaPrimary'
import PreviewBlog from '../components/PreviewBlog'
import Request from '../graphql/request'
import { gql } from '@apollo/client'

const Index = ({ posts }: any) => (
  <>
    <Flex flexDirection="column">
      <CtaPrimary />
      <PreviewBlog {...{ posts }}/>
    </Flex>
  </>
)

export default Index

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await Request.query({
    query: gql`
      query {
        posts{
          id
          title
          content
          image {
            hash
          }
          updatedAt
        }
      }
    `
  })
  
  return {
    props: data
  }
}
