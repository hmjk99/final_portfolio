import img1 from '../img/Screenshot 2023-04-19 at 12.15.36 AM.png'
import img2 from '../img/Screenshot 2023-04-19 at 12.23.21 AM.png'
import img3 from '../img/Screenshot 2023-04-19 at 12.18.28 AM.png'
import img4 from '../img/Screenshot 2023-05-01 at 9.09.52 PM.png'
import img5 from '../img/Screenshot 2023-05-01 at 9.10.12 PM.png'
import img6 from '../img/Screenshot 2023-05-23 at 4.52.46 PM.png'
import img7 from '../img/Screenshot 2023-06-07 at 9.06.55 PM.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Projects = () =>{
    // useEffect(()=>{
    //     Aos.init()
    // }, [])
    return(
        <>
        <section id="Projects">
            <div className='projects-whole'>
                <div data-aos="zoom-in-down" data-aos-duration="1000" data-aos-easing="linear" className="heading-top">
                    <h3 className="section-subtitle">Recent Works</h3>
                    <h1 className="section-title">Projects</h1>
                </div>
                <div id="projects-content">
                    <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" className="project-img">
                        <img src={img7} alt=""/>
                        <div className="link-popup">
                            <a href="https://summar-ai.vercel.app/" target="_blank" rel="noreferrer"><i className='project-icon bx bx-desktop'></i></a>
                            <a href="https://github.com/hmjk99/summar-ai" target="_blank" rel="noreferrer"><i className='project-icon bx bxl-github'></i></a>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear" className="project-descrip">
                        <h3>Summar-AI</h3>
                        <p>Summar-ai is an AI article summarizer that transforms lengthy articles into clear and concise summaries. OpenAI's ChatGPT model API from Rapid API was used. Some features are copy to clipboard functionality and displaying loader and error messages for best user experience.</p>
                        <div className="project-skills">
                            <h5>React.js</h5>
                            <h5>Tailwind CSS</h5>
                            <h5>Redux</h5>
                            <h5>Vite</h5>
                            <h5>Rapid API</h5>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" className="project-img" id="img4">
                        <img src={img4} alt=""/>
                        <div className="link-popup">
                            <a href="https://ecommerce-admin-hmjk99.vercel.app/" target="_blank" rel="noreferrer"><i className='project-icon bx bx-desktop'></i></a>
                            <a href="https://github.com/hmjk99/pineapple-admin" target="_blank" rel="noreferrer"><i className='project-icon bx bxl-github'></i></a>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear" className="project-descrip">
                        <h3>Pineapple-Admin</h3>
                        <p>Pineapple-admin is a full-stack application that allows the admin login with their Google account and perform full CRUD functionality with products for the ecommerce website (Pineapple-Front).</p>
                        <div className="project-skills">
                            <h5>Nextjs</h5>
                            <h5>NextAuth</h5>
                            <h5>MongoDB</h5>
                            <h5>Amazon Web Service</h5>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" className="project-img" id="img5">
                        <img src={img5} alt=""/>
                        <div className="link-popup">
                            <a href="https://ecommerce-front-hmjk99.vercel.app/" target="_blank" rel="noreferrer"><i className='project-icon bx bx-desktop'></i></a>
                            <a href="https://github.com/hmjk99/pineapple-front" target="_blank" rel="noreferrer"><i className='project-icon bx bxl-github'></i></a>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear" className="project-descrip">
                        <h3>Pineapple-Front</h3>
                        <p>Pineapple-Front is an Apple clone ecommerce application using the data the admin uploaded from the Pineapple-Admin website. The application lets users view, add to cart, and purchase products through Stripe.</p>
                        <div className="project-skills">
                            <h5>Nextjs</h5>
                            <h5>MongoDB</h5>
                            <h5>Stripe</h5>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" className="project-img" id="img5">
                        <img src={img6} alt=""/>
                        <div className="link-popup">
                            <a href="https://utube-clone-app.vercel.app/" target="_blank" rel="noreferrer"><i className='project-icon bx bx-desktop'></i></a>
                            <a href="https://github.com/hmjk99/u_tube" target="_blank" rel="noreferrer"><i className='project-icon bx bxl-github'></i></a>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear" className="project-descrip">
                        <h3>U-tube Clone</h3>
                        <p>U-tube is a Youtube clone streaming application created by using Rapid API. The application renders the data from the API and lets users search channels and videos. The application is responsive and was styled using Material UI.</p>
                        <div className="project-skills">
                            <h5>React.js</h5>
                            <h5>Rapid API</h5>
                            <h5>Material UI</h5>
                            <h5>React-router</h5>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" className="project-img">
                        <img src={img2} alt=""/>
                        <div className="link-popup">
                            <a href="https://stackbook.herokuapp.com/login" target="_blank" rel="noreferrer"><i className='project-icon bx bx-desktop'></i></a>
                            <a href="https://github.com/hmjk99/Social_Media_Front" target="_blank" rel="noreferrer"><i className='project-icon bx bxl-github'></i></a>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear" className="project-descrip">
                        <h3>StackBook</h3>
                        <p>StackBook is a responsive full-stack social media application. The name was inspired by <i>Facebook</i> and allows users to register and login to upload and like posts. <em>Collaborated with a fellow software engineer</em> to build this application in a 1 week sprint</p>
                        <div className="project-skills">
                            <h5>React.js</h5>
                            <h5>Express.js</h5>
                            <h5>Node.js</h5>
                            <h5>MongoDB</h5>
                            <h5>JWT Token</h5>
                            <h5>Heroku</h5>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" className="project-img">
                        <img src={img3} alt=""/>
                        <div className="link-popup">
                            <a href="https://cookbook-front.herokuapp.com/" target="_blank" rel="noreferrer"><i className='project-icon bx bx-desktop'></i></a>
                            <a href="https://github.com/hmjk99/CookBook_Front" target="_blank" rel="noreferrer"><i className='project-icon bx bxl-github'></i></a>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear" className="project-descrip">
                        <h3>CookBook</h3>
                        <p>CookBook is a full-stack recipe app where users can share their recipes. The user has to register or login to see the content of the app and to perform CRUD functionality. <em>Collaborated with 2 fellow software engineers</em> to build this application in a 1 week sprint</p>
                        <div className="project-skills">
                            <h5>React.js</h5>
                            <h5>Python</h5>
                            <h5>Django</h5>
                            <h5>Postgresql</h5>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear" className="project-img">
                        <img src={img1} alt=""/>
                        <div className="link-popup">
                            <a href="https://memo-app-p2.herokuapp.com/memo" target="_blank" rel="noreferrer"><i className='project-icon bx bx-desktop'></i></a>
                            <a href="https://github.com/hmjk99/Memo-App" target="_blank" rel="noreferrer"><i className='project-icon bx bxl-github'></i></a>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear" className="project-descrip">
                        <h3>Memo-Pad</h3>
                        <p>Memo-Pad is a responsive full-stack application that allows users to create, delet, and edit their notes. The design inspiration was from the application <i>Notion</i> and took a mobile-first approach.</p>
                        <div className="project-skills">
                            <h5>JavaScript</h5>
                            <h5>Express.js</h5>
                            <h5>Node.js</h5>
                            <h5>MongoDB</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  );
}

export default Projects