import { Box, Container, Text, Stack } from '@chakra-ui/react'

export default function CtaPrimary() {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Text as={'div'}>
          <Text as={'h1'} fontWeight={600} fontSize={{ base: '5xl', sm: '4xl', md: '6xl' }}>
            Orivelton César
          </Text>
          <Text as={'h2'} fontSize={{ base: '1xl', sm: '1xl', md: '3xl' }}>
            Software engineer
          </Text>
        </Text>
        <Text as={'h3'}>
          I work as a Front End but I have already ventured into the logistics and administrative area but found myself even within the codes. I've worked on big projects with many challenges and always been in love with open source projects
        </Text>
      </Stack>
    </Container>
  )
}
