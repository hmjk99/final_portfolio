import cloud from '../img/cloud_2601-fe0f.png'
import resume from '../img/Final_Resume.pdf'

const Home = () =>{
    return(
        <>
        <section id="Home">
            <div className="container-clouds">
                <div className="clouds">
                    <img className="cloud-middle1 small speed4" src={cloud} />
                    <img className="cloud-start1 large speed2" src={cloud} />
                    <img className="cloud-end3 medium speed6" src={cloud} />
                    <img className="cloud-middle4 small speed7" src={cloud} />
                    <img className="cloud-start2 large speed3" src={cloud} />
                    <img className="cloud-middle2 small speed1" src={cloud} />
                    <img className="cloud-start3 small speed3" src={cloud} />
                    <img className="cloud-end1 medium speed4" src={cloud} />
                    <img className="cloud-middle3 large speed5" src={cloud} />
                    <img className="cloud-end4 small speed7" src={cloud} />
                    <img className="cloud-start4 medium speed2" src={cloud} />
                </div>
            </div>
            <div className="home-container">
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
                    <li><a href="https://github.com/hmjk99" target="_blank"><i className='icon bx bxl-github bx-tada-hover'></i></a></li>
                    <li><a href="https://www.linkedin.com/in/moonjookim/" target="_blank"><i className='icon bx bxl-linkedin bx-tada-hover'></i></a></li>
                    <li><a href={resume} download><i className='icon bx bxs-download bx-tada-hover'></i></a></li>
                </ul>
            </div>
        </section>
        </>
  );
}

export default Home