import Head from 'next/head';
import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';

export default function CtaPrimary() {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Orivelton Cesar
          <Text as={'p'}>
            Software engineer
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          I work as a Front End but I have already ventured into the logistics and administrative area but found myself even within the codes. I've worked on big projects with many challenges and always been in love with open source projects
        </Text>
      </Stack>
    </Container>
  );
}