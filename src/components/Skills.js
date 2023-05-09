import css from '../img/css-3.svg'
import react from '../img/react.svg'
import js from '../img/javascript.svg'
import next from '../img/nextjs-icon.svg'
import html from '../img/html-5.svg'
import tailwind from '../img/tailwindcss-icon.svg'
import jquery from '../img/jquery.svg'
import python from '../img/python.svg'
import django from '../img/django-icon.svg'
import mongo from '../img/mongodb-icon.svg'
import sql from '../img/postgresql.svg'
import node from '../img/nodejs-icon.svg'
import express from '../img/express.svg'


const Skills = () =>{
    return(
        <>
         <section id="Skills">
            <div className="heading-top">
                <h3 className="section-subtitle">My Expertise</h3>
                <h1 className="section-title">Skills</h1>
            </div>
            {/* <!---------------------frontend skills----------------------> */}
            <div className="skills-content">
                <div className="skills-header front">
                    <i className='icon skills-icon bx bx-code-curly bx-md'></i>
                    <h1 className="skills-heading">Frontend Development</h1>
                </div>
                <div className="skills-info">
                    <div className="skills-detail js bx-tada-hover">
                        <img className="skill-img" src={js}/>
                    </div>
                    <div className="skills-detail jquery bx-tada-hover">
                        <img className="skill-img" src={jquery}/>
                    </div>
                    <div className="skills-detail react bx-tada-hover">
                        <img className="skill-img" src={react}/>
                    </div>
                    <div className="skills-detail next bx-tada-hover">
                        <img className="skill-img" src={next}/>
                    </div>
                    <div className="skills-detail tailwind bx-tada-hover">
                        <img className="skill-img" src={tailwind}/>
                    </div>
                    <div className="skills-detail html bx-tada-hover">
                        <img className="skill-img" src={html}/>
                    </div>
                    <div className="skills-detail css bx-tada-hover">
                        <img className="skill-img" src={css}/>
                    </div>
                </div>
            </div>
               
            {/* <!---------------------backend skills----------------------> */}
            <div class="skills-content" id="skills-content-back">
                <div class="skills-header back">
                    <i class='icon skills-icon bx bx-desktop bx-md'></i>
                    <h1 class="skills-heading">Backend Development</h1>
                </div>
                <div class="skills-info">
                    <div class="skills-detail python bx-tada-hover">
                        <img className="skill-img" src={python}/>
                    </div>
                    <div class="skills-detail django bx-tada-hover">
                        <img className="skill-img" src={django}/>
                    </div>
                    <div class="skills-detail node bx-tada-hover">
                        <img className="skill-img" src={node}/>
                    </div>
                    <div class="skills-detail mongo bx-tada-hover">
                        <img className="skill-img" src={mongo}/>
                    </div>
                    <div class="skills-detail express bx-tada-hover">
                        <img className="skill-img" src={express}/>
                    </div>
                    <div class="skills-detail sql bx-tada-hover">
                        <img className="skill-img" src={sql}/>
                    </div>
                </div>
                
            </div>
        </section>
        </>
  );
}

export default Skills