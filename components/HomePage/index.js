import { useState } from 'react';
import Style from './Home.module.scss';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/index';
import Image from 'next/image';
import SidePic from '../../public/sidepic.jpg';

const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className={Style.homeContainer}>
                <Navbar toggleIsOpen={toggleIsOpen} />
                <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />

                <div className={Style.headlineText}>
                    <h2>Hi, I am Arinze Ihemedu, Front-end engineer.</h2>
                    <span>Based in Lagos, Nigeria.</span>

                    <div className="mt-5">  
                        <a href="./updatedCV.pdf" className={Style.ctaBtn} download>Download CV</a>
                    </div>
                </div>
            </div>

            <section>
                <div className={"container " + Style.aboutSection}>
                    <div className="row">
                        <div className={"col-lg-5 " + Style.aboutImage}>
                            <Image src={SidePic} width={800} height={860} alt="Portrait picture"  />
                        </div>
                        <div className={"col-lg-7 " + Style.aboutText}>
                            <h1>About Me</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel esse corporis voluptatum sequi, soluta quaerat 
                            fugit distinctio optio officiis excepturi doloremque harum aut modi, cumque quasi atque nemo accusamus.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
