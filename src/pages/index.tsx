import { format, parseISO } from 'date-fns'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/api'
import { PostType } from '../types/post'

type IndexProps = {
  posts: PostType[]
}

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <div className="text-center">
        <h1>Orivelton César</h1>
        <h2>Front End Developer</h2>
      </div>
      <br />
      <hr />

      {posts.map(({ slug, date, title, description }) => (
        <article key={slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400" title={`Go to ${description}`}>
                {title}
              </a>
            </Link>
          </h1>
          <h2 className="mb-3 text-sm font-extralight">{description}</h2>
          <p>
            <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>
              <a title={`Go to ${description}`}>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title'])

  return {
    props: { posts },
  }
}

export default Index
