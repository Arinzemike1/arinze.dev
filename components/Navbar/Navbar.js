import Link from 'next/link';
import navStyles from './Nav.module.scss';
import { FaBars, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = ({ toggleIsOpen }) => {
    return (
        <nav className={navStyles.navContainer}>
            <div className={navStyles.logo}>LOGO</div>

            <div className={navStyles.mobileIcon} onClick={toggleIsOpen}>
                <FaBars />
            </div>
            <ul className={navStyles.linkWrapper}>
                <li>
                    <Link href="/" className={navStyles.navLinks}>
                        <a>Home</a>
                    </Link>
                </li>

                <li>
                    <Link href="/about" className={navStyles.navLinks}>
                        <a>About</a> 
                    </Link>
                </li>

                <li>
                    <Link href="/" className={navStyles.navLinks}>
                         <a>Projects</a>
                    </Link>
                </li>

                <li>
                    <Link href="/" className={navStyles.navLinks}>
                         <a>Services</a>
                    </Link>
                </li>

                <li>
                    <Link href="/" className={navStyles.navLinks}>
                         <a>Thoughts</a>
                    </Link>
                </li>
            </ul>

            <ul className={navStyles.mediaLinks}>
                <li>
                    <a href="https://www.facebook.com">
                        <FaFacebookF />
                    </a>
                </li>

                <li>
                    <a href="https://www.facebook.com">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.facebook.com">
                        <button className={navStyles.contactBtn}>Make A Proposal</button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar