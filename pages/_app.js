import Layout from '../components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/App.scss';

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
