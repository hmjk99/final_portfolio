import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    const [showNav, setShowNav] = useState(false)
    const toggleNav = () => {
        setShowNav(!showNav)
    }
    return(
        <header>
            <div class="whole-nav">
                <div onClick={toggleNav} class="nav-icon">
                    <i class='bx bx-menu bx-sm'  ></i>           
                 </div>
                 <div class="nav-right">
                    <span id="name">Moonjoo</span>
                 </div>
                 {showNav ? 
                    <div class="nav-menu">
                        <div onClick={toggleNav} class="close-icon">
                            <i class='bx bx-x-circle bx-sm' ></i>
                        </div>
                        <ul class="nav-list">
                            <li onClick={toggleNav} class="nav-item" id="nav-home"><a href="#Home">HOME</a></li>
                            <li onClick={toggleNav} class="nav-item" id="nav-about"><a href="#About">ABOUT</a></li>
                            <li onClick={toggleNav} class="nav-item" id="nav-skills"><a href="#Skills">SKILLS</a></li>
                            <li onClick={toggleNav} class="nav-item" id="nav-project"><a href="#Projects">PROJECTS</a></li>
                            <li onClick={toggleNav} class="nav-item" id="nav-contact"><a href="#Contact">CONTACT ME</a></li>
                        </ul>
                    </div>
                    : null
                 }
            </div>
        </header>
        
  );
}

export default Nav