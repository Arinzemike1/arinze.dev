import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import Link from 'next/link';
import navStyles from './Nav.module.scss';
import { FaBars, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = ({ toggleIsOpen }) => {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', changeBackground);
        }
    }, [])
    
    return (
        <nav className={nav ? `${navStyles.navContainer} ${navStyles.onScroll}` : navStyles.navContainer}>
            <div>
                <Link 
                    className={navStyles.logo}
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    exact={true}
                    >
                    LOGO
                    </Link>
            </div>

            <div className={navStyles.mobileIcon} onClick={toggleIsOpen}>
                <FaBars />
            </div>
            <ul className={navStyles.linkWrapper}>
                <li>
                    <Link 
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
                        offset={-80}
                    >
                    Home
                    </Link>
                </li>

                <li>
                    <Link 
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
                        offset={-80}
                    >
                    About
                    </Link>
                </li>

                <li>
                    <Link 
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
                        offset={-80}
                    >
                    Projects
                    </Link>
                </li>

                <li>
                    <Link 
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
                        offset={-80}
                    >
                    Services
                    </Link>
                </li>

                <li>
                    <Link 
                        className={navStyles.linkWrapper}
                        activeClass={navStyles.active}
                        to="thoughts"
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact={true}
                        offset={-80}
                    >
                    Thoughts
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