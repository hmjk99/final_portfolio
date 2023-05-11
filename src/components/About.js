import img from '../img/Screenshot 2023-02-24 at 1.27.20 AM.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const About = () =>{
    // useEffect(()=>{
    //     Aos.init()
    // }, [])
    return(
        <>
        <section id="About">
            <div class="about-content" >
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" class="section-subtitle">My Story</h3>
                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" class="section-title">About Me</h1>
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" id="about-p">
                    <img src={img}/>
                    <p>I am a passionate software developer with a background in <span className='emphasis'>exercise science</span>. While my previous experience in the field allowed me to develop a deep understanding of the human body and the science behind movement, my passion for software development has opened up a <span className='emphasis'>whole new world</span> of problem-solving and innovation.</p>
                    <p>My positive, collaborative nature and strong problem-solving skills make me an asset to any project. I approach challenges with enthusiasm and enjoy working with others to bring <span className='emphasis'>fresh perspectives</span> to the table. </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" id="fun-fact">
                    <h3>Fun Fact:</h3>
                    <p>During my bootcamp, I was voted as the <span className='emphasis'>"Eagle Eye"</span> for my ability to catch even the tiniest of mistakes, and <span className='emphasis'>"Code Wrangler"</span> for my knack for solving the toughest problems.</p>
                </div>
            </div>
        </section>
        </>
  );
}

export default About