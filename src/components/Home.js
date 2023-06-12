import Cloud from './Cloud';
import Resume from '../img/Resume (Final).pdf'
import 'aos/dist/aos.css'

const Home = () =>{
    return(
        <>
        <section id="Home">
            <Cloud/>
            <div data-aos="zoom-in-down" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className="home-container">
                <div id="home-main">
                    <div id="home-right">
                        <h3 className="text first-text" id="sub-text">I'm Moonjoo, <br/> A <span id="home-title">Software Developer</span></h3>
                        <ul id="hashtags">
                            <li>🖥️ Software Engineer</li>
                            <li>💙 Animal-Lover</li>
                            <li>👩‍💻 Code-Wrangler</li>
                            <li>🧐 Eagle-Eye</li>
                        </ul>
                    </div>
                </div>
                <ul className="links">
                    <li><a href="https://github.com/hmjk99" target="_blank" rel="noreferrer"><i className='icon bx bxl-github bx-tada-hover'></i></a></li>
                    <li><a href="https://www.linkedin.com/in/moonjookim/" target="_blank" rel="noreferrer"><i className='icon bx bxl-linkedin bx-tada-hover'></i></a></li>
                    <li><a href={Resume} download><i className='icon bx bxs-download bx-tada-hover'></i></a></li>
                </ul>
            </div>
        </section>
        </>
  );
}

export default Home