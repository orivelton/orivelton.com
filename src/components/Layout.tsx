import { MetaProps } from '../types/layout'
import Head from './Head'
import Navigation from './Navigation'
import ThemeSwitch from './ThemeSwitch'
import { AiFillGithub } from 'react-icons/ai'

type LayoutProps = {
  children: React.ReactNode
  customMeta?: MetaProps
}

export const WEBSITE_HOST_URL = 'https://orivelton.com'

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
          <hr />
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto ">
          <p className="flex flex-row justify-center">
            Orivelton César - { new Date().getFullYear() }
          </p>
          <ul className="flex flex-row justify-center">
            <li>
              <a href="https://github.com/orivelton" title="Go to my profile on Github" rel="noopener noreferrer nofollow" target="_blank">
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Layout
