import React from 'react'
import Layout from '../components/Layout'

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Orivelton César',
      }}
    >
      <h1>About me</h1>
      <p>{`I work as a Front End but I have already ventured into the logistics and administrative area but found myself even within the codes. I've worked on big projects with many challenges and always been in love with open source projects`}</p>
    </Layout>
  )
}

export default About
