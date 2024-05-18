import logo from "../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const pages = [
  {
    name: "ABOUT",
    link: "about",
  },
  {
    name: "SERVICES",
    link: "services",
  },
  {
    name: "PORTFOLIO",
    link: "portfolio",
  },
];

function Footer() {
  return (
    <section id="footer">
      <div className="bg-white w-[90%] mx-auto py-4">
        <div className="flex flex-row justify-space-between align-center">
          <div className="footer-page-titles-container">
            {pages.map((item, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  className="navbar-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.link).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="max-w-[20%] mx-auto">
            <a href="/">
              <img src={logo} className="company-logo" alt="logo" />
            </a>
          </div>
          <div className="contact-section">
            <div className="flex-1 flex items-center justify-center bg-red-500 text-white text-center text-sm sm:text-lg lg:text-xl px-3 max-h-8 py-auto mb-2 ">
              {"CONTACT"}
            </div>
            <div className="contact-content">406-922-9782</div>
            <div className="contact-content">sunroadconstruction@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
