import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="main-header header-style-one">
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
                  <i className="fa fa-headset"></i> Call us :{" "}
                  <Link href="tel:12345678910">205-960-8084</Link>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="social-icon-one">
                <li>
                  <Link href="#">
                    <span className="fab fa-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fab fa-facebook-square"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fab fa-pinterest-p"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-lower">
        <div className="auto-container">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/logo-2.png"
                    alt="Tronis"
                    width={200}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li className="current">
                    <Link href="/" style={{ paddingLeft: "150px" }}>
                      Home
                    </Link>
                  </li>

                  <li className="dropdown">
                    <Link href="/about">About</Link>
                  </li>

                  <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                      <li>
                        <Link href="/services" onClick={closeMobileMenu}>
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" onClick={closeMobileMenu}>
                          Services Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                      <li>
                        <Link href="/blog" onClick={closeMobileMenu}>
                          News Grid
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" onClick={closeMobileMenu}>
                          News Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div
                      className="contact-info col-lg-2"
                      style={{ paddingLeft: "150px" }}
                    >
                      <div className="inner">
                        <Link
                          href="contact"
                          className="theme-btn btn-style-three"
                          onClick={closeMobileMenu}
                        >
                          <span>Contact Us</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className="outer-box">
                <div
                  className="mobile-nav-toggler"
                  onClick={toggleMobileMenu}
                  role="button"
                  aria-label="Toggle Mobile Menu"
                >
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="menu-backdrop" onClick={closeMobileMenu}></div>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/">
                <Image
                  src="/images/logo-2.png"
                  alt="Tronis"
                  width={150}
                  height={40}
                />
              </Link>
            </div>
            <div
              className="close-btn"
              onClick={closeMobileMenu}
              role="button"
              aria-label="Close Mobile Menu"
            >
              <i className="icon fa fa-times"></i>
            </div>
          </div>
          <ul className="navigation clearfix">
            <li>
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="dropdown">
              <Link href="#">Services</Link>
              <ul>
                <li>
                  <Link href="/services" onClick={closeMobileMenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/services" onClick={closeMobileMenu}>
                    Services Details
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">Blog</Link>
              <ul>
                <li>
                  <Link href="/blog" onClick={closeMobileMenu}>
                    News Grid
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={closeMobileMenu}>
                    News Details
                  </Link>
                </li>
              </ul>
            </li>
            <div className="contact-info col-lg-2">
              <div className="inner">
                <Link
                  href="contact"
                  className="theme-btn btn-style-three"
                  onClick={closeMobileMenu}
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </ul>
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <Link href="tel:+92880098670">+92 (8800) - 98670</Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <Link href="mailto:email@domain.com">email@domain.com</Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock"></span>
                <span className="title">Working Hours</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <Link href="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-pinterest"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
