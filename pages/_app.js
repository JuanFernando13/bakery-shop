import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import Layaout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layaout titlePage="Home">
        <Component {...pageProps} />
      </Layaout>
    </Provider>
  )
}

export default MyApp
