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

function Footer() {
  return (
    <header>
        <div className="footer-contant-area">
            <div className="footer-containers">
                <div className="footer-page-titles-container">
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
                </div>
                <div className="navbar-page-titles-container">
                    <a href="about"><img src={logo} className="company-logo" alt="logo"/></a>
                </div>
                <div className="contact-section">
                    <div className="contact-title">
                        {"CONTACT"}
                    </div>
                    <div className="contact-content">406-922-9782</div>
                    <div className="contact-content">sunroadconstruction@gmail.com</div>
                </div>
            </div>

        </div>
    </header>
    
  );
}

export default Footer