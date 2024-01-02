import logo from '../assets/logo.png';
import { Link, animateScroll as scroll } from "react-scroll";

const pages = [
    {
        name: 'ABOUT',
        link: "about",
    },
    {
        name: 'SERVICES',
        link: "services",
    },
    {
        name: 'PORTFOLIO',
        link: "portfolio",
    },
]

function Navbar() {
  return (
    <header>
        <div className="navbar-content-area">
            <div className="navbar-containers">
                <div className="navbar-page-titles-container">
                    <a href="about"><img src={logo} className="company-logo" alt="logo"/></a>
                </div>
                <div className="navbar-page-titles-container">
                    {pages.map((item, index)=>{
                        return (
                            <a href="#"
                            key={index}
                            className="navbar-link"
                            onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.link).scrollIntoView({
                                behavior: "smooth"
                            });
                            }}>{item.name}</a>
                        )        
                    })}
                    <a
                        href="#contact"
                        className="contact-link"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact").scrollIntoView({
                                behavior: "smooth"
                            });
                        }}
                    >
                        {"CONTACT"}
                    </a> 
                </div>
            </div>

        </div>
    </header>
    
  );
}

export default Navbar;