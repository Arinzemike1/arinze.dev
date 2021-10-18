import Header from '../components/Header/Header';
import Styles from '../styles/index.module.scss'
import HomePage from '../components/HomePage';

const Home = () => {

  return (
    <div>
      <Header pageTitle="Home Page" />
      <main className={Styles.main}>
        <HomePage />
      </main>
    </div>
  )
}
export default Home;
