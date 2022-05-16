import { AppProps } from 'next/dist/shared/lib/router/router'
import Layout from '../components/Layout'
import "../styles/globals.css"

export default function App({Component, pagesProps}: AppProps) {
  return (
    <Layout>
      <Component {...pagesProps} />
    </Layout>
  )
}