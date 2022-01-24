import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";


const Header = ({
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/images/logo-01.png" alt="mobile-logo" />
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <Link href="/demo-1">
                <a className="logo-black">
                  <img src="/images/logo-white.png" alt="header-logo" />
                </a>
              </Link>
            </div>
         
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <div className="overlapblackbg" onClick={() => toggleFun()} />
              <div className="desktoplogo">
              <Link href="/demo-1">
                <a className="logo-white">
                  <img
                    src={`${
                      whiteLogo
                        ? "/images/logo-white.png"
                        : "/images/logo-02.png"
                    }`}
                    alt="header-logo"
                  />
                </a>
              </Link>
            </div>
              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                {/* MEGAMENU */}
                <li className="nl-simple">
                  <Link href="/how-it-works">How it works</Link>
                </li>
                {/* END MEGAMENU */}
                {/* DROPDOWN MENU */}
                <li className="nl-simple">
                  <Link href="/pricing">Pricing</Link>
                </li>
                {/* DROPDOWN MENU */}
                <li className="nl-simple">
                  <Link href="/benefits">Benefits</Link>
                </li>
                {/* END DROPDOWN MENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="/our-dentist">Our dentists</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="/dental-hub">Dental hub</Link>
                </li>
                <li className="">
                  <Link href="#">Login</Link>
                </li>

                {/* HEADER BUTTON */}

                <li className="nl-simple">
                  <Link href="#">
                    <a
                      className={`btn ${
                        btnCustomHover
                          ? btnCustomHover
                          : "btn-tra-green green-hover"
                      } last-link`}
                    >
                      Connect to a dentist
                    </a>
                  </Link>
                </li>
                {/* HEADER SOCIAL LINKS 													
									<li class="nl-simple white-color header-socials ico-20 clearfix" >
										<span><Link href="#" class="ico-facebook"><span class="flaticon-facebook"></span></Link></span>
										<span><Link href="#" class="ico-twitter"><span class="flaticon-twitter"></span></Link></span>
										<span><Link href="#" class="ico-instagram"><span class="flaticon-instagram"></span></Link></span>
										<span><Link href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></Link></span>	
									</li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
