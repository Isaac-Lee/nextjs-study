import { AppProps } from 'next/dist/shared/lib/router/router'
import NavBar from '../components/NavBar'
import "../styles/globals.css"

export default function App({Component, pagesProps}: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pagesProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  )
}