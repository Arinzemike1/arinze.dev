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
            <div className={Style.homeContainer} id="home">
                <Navbar toggleIsOpen={toggleIsOpen} />
                <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />

                <div className={Style.headlineText}>
                    <h2>Hi, <br />{ "I'm Arinze Ihemedu, Front-end engineer." }</h2>
                    <span>Based in Lagos, Nigeria.</span>

                    <div className="mt-5 pt-3">  
                        <a href="./updatedCV.pdf" className={Style.ctaBtn} download>Download CV</a>
                    </div>
                </div>
            </div>

            <section id="about" className={Style.aboutSection}>
                <div className={"container" }>
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

            <section id="projects" style={{ padding: '400px 50px' }}>
                PROJECTS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ex reiciendis rem quae eaque esse non pariatur aliquid vel quis dolorum, consequatur iste repellat sequi quas sapiente laudantium dignissimos? Perspiciatis.
                Aliquam omnis voluptate quo possimus consectetur sint in eum quos maiores id excepturi, hic aspernatur recusandae fugit accusamus veritatis modi quam libero similique, aut ipsam dignissimos magnam sed aperiam! Quidem!
                Ex illum fuga a iusto, est beatae alias qui, provident unde dolor, facere neque totam ratione numquam veritatis amet? Recusandae eum commodi architecto eligendi enim. A ex sapiente qui illo.
                Repudiandae ipsum nam rem delectus totam, odit blanditiis eveniet quaerat ratione? Veritatis porro aperiam fuga non quo qui ea corporis deserunt earum architecto perspiciatis quas itaque totam, libero modi mollitia.
                Ducimus illum obcaecati itaque tempore! Enim numquam voluptatibus error autem nesciunt ex iste? Repudiandae libero tempora iusto magnam nemo, voluptatibus vero qui vel dolorum consectetur laudantium eius cum odio est!
                Incidunt, voluptas, nulla harum dolore quasi nostrum, eveniet dolorum facilis totam eius quis similique! Ipsam nulla architecto deleniti minima omnis ullam repudiandae, distinctio mollitia quasi eius, iure similique impedit itaque.
                Eos vitae esse sequi impedit! Molestiae excepturi autem quia velit laboriosam minus explicabo iure. Explicabo esse beatae, sapiente eos illo quibusdam assumenda laborum ipsa incidunt dolor, reprehenderit adipisci commodi corporis?
                Iste nam veniam quia praesentium alias eaque aliquid adipisci rerum reiciendis, modi in. Et, provident. Ratione animi alias deserunt! Atque inventore reprehenderit quia ipsa eligendi voluptatum, enim magnam quas? Sunt.
                Possimus, aliquam! Soluta doloribus dicta, ducimus adipisci sunt ipsa suscipit harum tempora architecto excepturi repudiandae omnis dolorum, nesciunt exercitationem fuga eum. Sapiente dolores in numquam officia tempore repudiandae sit magni?
                Deserunt hic commodi quod? Illum ratione delectus similique voluptatibus magnam dignissimos adipisci ipsum commodi recusandae, exercitationem quasi sed voluptate, tenetur, illo architecto nam ad? Vero, voluptate. Voluptate aut libero vero.
            </section>

            <section id="services" style={{ padding: '400px 50px' }}>
                SERVICES Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ex reiciendis rem quae eaque esse non pariatur aliquid vel quis dolorum, consequatur iste repellat sequi quas sapiente laudantium dignissimos? Perspiciatis.
                Aliquam omnis voluptate quo possimus consectetur sint in eum quos maiores id excepturi, hic aspernatur recusandae fugit accusamus veritatis modi quam libero similique, aut ipsam dignissimos magnam sed aperiam! Quidem!
                Ex illum fuga a iusto, est beatae alias qui, provident unde dolor, facere neque totam ratione numquam veritatis amet? Recusandae eum commodi architecto eligendi enim. A ex sapiente qui illo.
                Repudiandae ipsum nam rem delectus totam, odit blanditiis eveniet quaerat ratione? Veritatis porro aperiam fuga non quo qui ea corporis deserunt earum architecto perspiciatis quas itaque totam, libero modi mollitia.
                Ducimus illum obcaecati itaque tempore! Enim numquam voluptatibus error autem nesciunt ex iste? Repudiandae libero tempora iusto magnam nemo, voluptatibus vero qui vel dolorum consectetur laudantium eius cum odio est!
                Incidunt, voluptas, nulla harum dolore quasi nostrum, eveniet dolorum facilis totam eius quis similique! Ipsam nulla architecto deleniti minima omnis ullam repudiandae, distinctio mollitia quasi eius, iure similique impedit itaque.
                Eos vitae esse sequi impedit! Molestiae excepturi autem quia velit laboriosam minus explicabo iure. Explicabo esse beatae, sapiente eos illo quibusdam assumenda laborum ipsa incidunt dolor, reprehenderit adipisci commodi corporis?
                Iste nam veniam quia praesentium alias eaque aliquid adipisci rerum reiciendis, modi in. Et, provident. Ratione animi alias deserunt! Atque inventore reprehenderit quia ipsa eligendi voluptatum, enim magnam quas? Sunt.
                Possimus, aliquam! Soluta doloribus dicta, ducimus adipisci sunt ipsa suscipit harum tempora architecto excepturi repudiandae omnis dolorum, nesciunt exercitationem fuga eum. Sapiente dolores in numquam officia tempore repudiandae sit magni?
                Deserunt hic commodi quod? Illum ratione delectus similique voluptatibus magnam dignissimos adipisci ipsum commodi recusandae, exercitationem quasi sed voluptate, tenetur, illo architecto nam ad? Vero, voluptate. Voluptate aut libero vero.
            </section>

            <section id="thoughts" style={{ padding: '400px 50px' }}>
                THOUGHTS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ex reiciendis rem quae eaque esse non pariatur aliquid vel quis dolorum, consequatur iste repellat sequi quas sapiente laudantium dignissimos? Perspiciatis.
                Aliquam omnis voluptate quo possimus consectetur sint in eum quos maiores id excepturi, hic aspernatur recusandae fugit accusamus veritatis modi quam libero similique, aut ipsam dignissimos magnam sed aperiam! Quidem!
                Ex illum fuga a iusto, est beatae alias qui, provident unde dolor, facere neque totam ratione numquam veritatis amet? Recusandae eum commodi architecto eligendi enim. A ex sapiente qui illo.
                Repudiandae ipsum nam rem delectus totam, odit blanditiis eveniet quaerat ratione? Veritatis porro aperiam fuga non quo qui ea corporis deserunt earum architecto perspiciatis quas itaque totam, libero modi mollitia.
                Ducimus illum obcaecati itaque tempore! Enim numquam voluptatibus error autem nesciunt ex iste? Repudiandae libero tempora iusto magnam nemo, voluptatibus vero qui vel dolorum consectetur laudantium eius cum odio est!
                Incidunt, voluptas, nulla harum dolore quasi nostrum, eveniet dolorum facilis totam eius quis similique! Ipsam nulla architecto deleniti minima omnis ullam repudiandae, distinctio mollitia quasi eius, iure similique impedit itaque.
                Eos vitae esse sequi impedit! Molestiae excepturi autem quia velit laboriosam minus explicabo iure. Explicabo esse beatae, sapiente eos illo quibusdam assumenda laborum ipsa incidunt dolor, reprehenderit adipisci commodi corporis?
                Iste nam veniam quia praesentium alias eaque aliquid adipisci rerum reiciendis, modi in. Et, provident. Ratione animi alias deserunt! Atque inventore reprehenderit quia ipsa eligendi voluptatum, enim magnam quas? Sunt.
                Possimus, aliquam! Soluta doloribus dicta, ducimus adipisci sunt ipsa suscipit harum tempora architecto excepturi repudiandae omnis dolorum, nesciunt exercitationem fuga eum. Sapiente dolores in numquam officia tempore repudiandae sit magni?
                Deserunt hic commodi quod? Illum ratione delectus similique voluptatibus magnam dignissimos adipisci ipsum commodi recusandae, exercitationem quasi sed voluptate, tenetur, illo architecto nam ad? Vero, voluptate. Voluptate aut libero vero.
            </section>
        </div>
    )
}

export default HomePage
