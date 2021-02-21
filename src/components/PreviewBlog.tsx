import { Box, Container, Heading, SimpleGrid, Text, Stack, HStack, VStack, Flex } from '@chakra-ui/react'
import { Post } from '../interfaces/Post'

export default function PreviewBlog({ posts }: any) {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Latest posts</Heading>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <Flex columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {posts.length && posts.map(({ id, title, content, updatedAt } :Post) => (
            <HStack key={id}>
              <VStack align={'start'}>
                <Text fontWeight={600}>{title}</Text>
                <Text>{updatedAt}</Text>
                <Text>{content.substring(0, 230)}...</Text>
              </VStack>
            </HStack>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
