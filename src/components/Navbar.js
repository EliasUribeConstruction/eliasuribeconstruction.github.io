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

function Navbar() {
  return (
    <header>
      <div className="bg-white w-[90%] mx-auto h-full">
        <div className="flex flex-row justify-between items-center h-full py-3">
          <div className="navbar-logo-container">
            <a href="/">
              <img src={logo} className="company-logo" alt="logo" />
            </a>
          </div>
          <div className="flex flex-row max-w-[80%] overflow-hidden">
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
            <a
              href="#contact"
              className="contact-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("footer").scrollIntoView({
                  behavior: "smooth",
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
