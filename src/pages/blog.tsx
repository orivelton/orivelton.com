import { gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import PreviewBlog from '../components/PreviewBlog'
import Request from '../graphql/request'

export default function BlogPage({ posts }: any) {
  return(
    <PreviewBlog {...{ posts }}/>
  )
}

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
