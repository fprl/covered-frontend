import GlobalStyles from '../styles/GlobalStyles'
import Reset from '../styles/Reset'
import '../styles/fonts.css' // separate because of styled-components bug

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />    
    </>
  )
}
