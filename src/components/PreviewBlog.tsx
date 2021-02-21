import { Box, Container, Heading, SimpleGrid, Icon, Text, Stack, HStack, VStack } from '@chakra-ui/react';
import { BsFileRichtext } from 'react-icons/bs';
import { Post } from '../interfaces/Post';

const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});

export default function PreviewBlog({ posts }: any) {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Latest posts</Heading>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {posts.length && posts.map(({ id, title, content, updatedAt } :Post) => (
            <HStack key={id} align={'top'}>
              <Box px={2}>
                <Icon as={BsFileRichtext} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{title}</Text>
                <Text>{content.substring(0, 200)}</Text>
                <Text>{updatedAt}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
