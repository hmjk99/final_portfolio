import { useState, useEffect } from "react";

const Nav = () =>{
    const [showNav, setShowNav] = useState(false)
    const [fullNav, setFullNav] = useState(false)
    const toggleNav = () => {
        setShowNav(!showNav)
    }
    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 800) { 
            setFullNav(true);
          } else {
            setFullNav(false);
          }
        }
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return(
        <header>
            <div className="whole-nav">
                <div onClick={toggleNav} className="nav-icon">
                    <i className='bx bx-menu bx-sm'  ></i>           
                 </div>
                 <div className="nav-right">
                    <span id="name">Moonjoo</span>
                 </div>
                 {fullNav ? (
                    <div className="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item" id="nav-home"><a href="#Home">HOME</a></li>
                            <li className="nav-item" id="nav-about"><a href="#About">ABOUT</a></li>
                            <li className="nav-item" id="nav-skills"><a href="#Skills">SKILLS</a></li>
                            <li className="nav-item" id="nav-project"><a href="#Projects">PROJECTS</a></li>
                            <li className="nav-item" id="nav-contact"><a href="#Contact">CONTACT</a></li>
                        </ul>
                    </div>
                 ) : (
                    showNav ? (
                        <div className="nav-menu">
                            <div onClick={toggleNav} className="close-icon">
                                <i className='bx bx-x-circle bx-sm' ></i>
                            </div>
                            <ul className="nav-list">
                                <li onClick={toggleNav} className="nav-item" id="nav-home"><a href="#Home">HOME</a></li>
                                <li onClick={toggleNav} className="nav-item" id="nav-about"><a href="#About">ABOUT</a></li>
                                <li onClick={toggleNav} className="nav-item" id="nav-skills"><a href="#Skills">SKILLS</a></li>
                                <li onClick={toggleNav} className="nav-item" id="nav-project"><a href="#Projects">PROJECTS</a></li>
                                <li onClick={toggleNav} className="nav-item" id="nav-contact"><a href="#Contact">CONTACT</a></li>
                            </ul>
                        </div>
                    ) : null
                 )
                 }
            </div>
        </header>
        
  );
}

export default Nav