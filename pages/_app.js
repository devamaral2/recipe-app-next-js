import 'bootstrap/dist/css/bootstrap.css'
import Provider from '../context/Provider';

function MyApp({ Component, pageProps }) {
  return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp;
