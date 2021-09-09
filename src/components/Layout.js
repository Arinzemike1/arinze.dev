import Styles from '../../styles/Layout.module.css'
import Nav from '../components/Nav'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={Styles.container}>
                <main className={Styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout