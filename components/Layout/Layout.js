
import { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/index';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const router = useRouter();

    return (
        <>
            {router.pathname !== '/' && <Navbar toggleIsOpen={toggleIsOpen} />}
            <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;