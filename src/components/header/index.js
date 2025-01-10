import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Sticky Header Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="main-header header-style-one">
      {/* Header Top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="top-left">
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-map-marker-alt"></i> 415 NE 108th Ave,
                  Portland, Oregon, ZIP 97220
                </li>
                <li>
                  <i className="fa fa-headset"></i> Call us:{" "}
                  <a href="tel:+12059608084">+1-205-960-8084</a>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="social-icon-one">
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header Top */}

      <div className="header-lower">
        <div className="auto-container">
          <div className="main-box">
            <div className="logo-box" style={{ paddingRight: "20px" }}>
              <div className="logo">
                <Link href="/">
                  <img src="images/logo-2.png" alt="" title="Tronis" />
                </Link>
              </div>
            </div>

            {/* Nav Box */}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation" style={{ paddingRight: "20px" }}>
                  <li className="current dropdown">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/services">Services</Link>
                    <ul>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/services/1">Services Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link href="/blog">Blog</Link>
                    <ul>
                      <li>
                        <Link href="/blog">News Grid</Link>
                      </li>
                      <li>
                        <Link href="/blog/1">News Details</Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <li>
                  <div
                    className="contact-info col-lg-2"
                    style={{ paddingLeft: "250px" }}
                  >
                    <div className="inner">
                      <Link
                        href="contact"
                        className="theme-btn btn-style-three"
                      >
                        <span>Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </li>
              </nav>

              <div className="outer-box">
                <span className="divider"></span>

                {/* Removed Cart and Search */}

                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      {isSticky && (
        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container">
              {/* Logo */}
              <div className="logo">
                <Link href="/">
                  <img src="images/logo-2.png" alt="Tronis" />
                </Link>
              </div>

              {/* Right Col */}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      {/* Keep This Empty / Menu will come through JavaScript */}
                    </ul>
                  </div>
                </nav>
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/">
                <img src="images/logo.png" alt="Tronis" />
              </Link>
            </div>
            <div className="close-btn">
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix">
            {/* Keep This Empty / Menu will come through JavaScript */}
          </ul>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
};

export default Header;
