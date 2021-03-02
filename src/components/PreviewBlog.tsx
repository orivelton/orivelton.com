import { Box, Container, Heading, Text, Stack, HStack, VStack, Flex, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import { Post } from '../interfaces/Post'

export default function PreviewBlog({ posts }: any) {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={6}>
        <Heading fontSize={'3xl'}>Most Popular</Heading>
      </Stack>

      
      <Flex spacing={10} mb={5}>
        {posts.length && posts.map(({ id, title, content, updatedAt } :Post) => (
          <Link href={{
            pathname: `/blog/${id}`,
            query: id
          }}>
            <HStack key={id}>
              <VStack align={'start'}>
                <Text fontWeight={600}>{title}</Text>
                <Text fontWeight={600}>{id}</Text>
                <Text>{updatedAt}</Text>
                <Text>{content.substring(0, 230)}...</Text>
              </VStack>
            </HStack>
          </Link>
        ))}
      </Flex>
    </Box>
  )
}
