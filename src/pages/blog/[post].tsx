import { gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import Request from '../../graphql/request'

export default function BlogPage({ post: { content } }: any) {
  return(
    <p>{content}</p>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await Request.query({
    query: gql`
      query {
        post(id: "603254230e0fba001506f870") {
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