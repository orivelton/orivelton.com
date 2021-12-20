import Layout from '../components/Layout'

export const About = (): JSX.Element => {
  return (
    <Layout customMeta={{ title: 'About - Orivelton César' }}>
      <h1>About me</h1>
      <h2 className="text-base font-normal">
        I've been work as Front End but I have already ventured into the logistics and administrative area but found myself even within the codes. I've worked on big projects with many challenges and always been in love with open source projects
      </h2>
    </Layout>
  )
}

export default About
