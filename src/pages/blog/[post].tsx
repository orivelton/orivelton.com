import { gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import Request from '../../graphql/request'

export default function BlogPage({ post: { content } }: any) {
  return(
    <p>{content}</p>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params: { post } }) => {
  const { data } = await Request.query({
    query: gql`
      query {
        post(id: "${post}") {
          title
          content
          image {
            hash
          }
        }
      }
    `
  })  
  
  return {
    props: data
  }
}