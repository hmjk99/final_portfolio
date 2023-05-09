

const Skills = () =>{
    return(
        <>
         <section id="Skills">
            <div class="heading-top">
                <h3 class="section-subtitle">My Expertise</h3>
                <h1 class="section-title">Skills</h1>
            </div>
            {/* <!---------------------frontend skills----------------------> */}
            <div class="skills-content">
                <div class="skills-header front">
                    <i class='icon skills-icon bx bx-code-curly bx-md'></i>
                    <h1 class="skills-heading">Frontend Development</h1>
                </div>
                <div class="skills-info">
                    <div class="skills-detail js bx-tada-hover">
                        <h4>JavaScript</h4>
                    </div>
                    <div class="skills-detail jquery bx-tada-hover">
                        <h4>Jquery</h4>
                    </div>
                    <div class="skills-detail react bx-tada-hover">
                        <h4>React</h4>
                    </div>
                    <div class="skills-detail next bx-tada-hover">
                        <h4>Next.js</h4>
                    </div>
                    <div class="skills-detail tailwind bx-tada-hover">
                        <h4>Tailwind CSS</h4>
                    </div>
                    <div class="skills-detail html bx-tada-hover">
                        <h4>HTML</h4>
                    </div>
                    <div class="skills-detail css bx-tada-hover">
                        <h4>CSS</h4>
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
                        <h4>Python</h4>
                    </div>
                    <div class="skills-detail django bx-tada-hover">
                        <h4>Django</h4>
                    </div>
                    <div class="skills-detail node bx-tada-hover">
                        <h4>Node.js</h4>
                    </div>
                    <div class="skills-detail mongo bx-tada-hover">
                        <h4>MongoDB</h4>
                    </div>
                    <div class="skills-detail express bx-tada-hover">
                        <h4>Express.js</h4>
                    </div>
                    <div class="skills-detail sql bx-tada-hover">
                        <h4>Postgresql</h4>
                    </div>
                </div>
                
            </div>
        </section>
        </>
  );
}

export default Skills