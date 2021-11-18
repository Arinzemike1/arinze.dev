import Layout from '../components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.scss';
import '../components/Tab/_Tabs.scss';

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
