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
                            <li class="nav-item" id="nav-home"><Link to={'/'}><h4>Home</h4></Link></li>
                            <li class="nav-item" id="nav-about"><Link to={'/about'}><h4>About</h4></Link></li>
                            <li class="nav-item" id="nav-skills"><Link to={'/skills'}><h4>Skills</h4></Link></li>
                            <li class="nav-item" id="nav-project"><Link to={'/projects'}><h4>About</h4></Link></li>
                            <li class="nav-item" id="nav-contact"><Link to={'/contact'}><h4>Contact</h4></Link></li>
                        </ul>
                    </div>
                    : null
                 }
            </div>
        </header>
        
  );
}

export default Nav