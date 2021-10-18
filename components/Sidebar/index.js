import Link from 'next/link';
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
                        <Link href="/about" onClick={toggleIsOpen}>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={toggleIsOpen}>
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={toggleIsOpen}>
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={toggleIsOpen}>
                            <a>Services</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
