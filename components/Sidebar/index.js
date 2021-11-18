import { Link } from 'react-scroll';
import style from './Sidebar.module.scss';
import { FaTimes } from 'react-icons/fa';

const SideBar = ({ isOpen, toggleIsOpen }) => {
    return (
        <div className={isOpen ? style.isOpen : style.isClose} onClick={toggleIsOpen}>
            <div className={style.closeIcon}>
                <FaTimes onClick={toggleIsOpen} />
            </div>
            <div className={style.sidebarWrapper}>
                <ul>
                    <li>
                        <Link
                            className={style.linkWrapper} 
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.linkWrapper} 
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.linkWrapper} 
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.linkWrapper} 
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            exact={true}
                            offset={-80}
                            onClick={toggleIsOpen}
                            >
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
