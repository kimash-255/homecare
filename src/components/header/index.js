import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import servicesData from "@/data/servicesData"; // Import the services data

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
          <div
            className="main-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo Box */}
            <div className="logo-box" style={{ marginRight: "80px" }}>
              <div className="logo">
                <Link href="/">
                  <strong
                    style={{
                      fontSize: "20px",
                      color: "#000",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Dream Care Homes
                  </strong>
                </Link>
              </div>
            </div>

            {/* Nav Box */}
            <div className="nav-outer" style={{ flex: 1 }}>
              <nav className="nav main-menu">
                <ul className="navigation" style={{ paddingRight: "20px" }}>
                  <li className="current">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/services">Services</Link>
                    <ul>
                      {/* Loop over servicesData to generate links dynamically */}
                      {servicesData.map((service) => (
                        <li key={service.slug}>
                          <Link href={`/services/${service.slug}`}>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
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
                        <span> Get in Touch</span>
                      </Link>
                    </div>
                  </div>
                </li>
              </nav>
            </div>

            <div className="outer-box" style={{ marginLeft: "20px" }}>
              <span className="divider"></span>

              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <span className="icon lnr-icon-bars"></span>
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
                  <strong
                    style={{
                      fontSize: "30px",
                      color: "#000",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Dream Care Homes
                  </strong>
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
      <div className={`${isMobileMenuOpen ? "mobile-menu-visible" : ""}`}>
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>

          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <strong className="text-lg font-bold text-white whitespace-nowrap">
                    Dream Care Homes
                  </strong>
                </Link>
              </div>
              <div className="close-btn" onClick={closeMobileMenu}>
                <i className="icon fa fa-times"></i>
              </div>
            </div>

            <ul className="navigation">
              {/* Home */}
              <li className="current">
                <Link href="/" className="text-white hover:text-blue-600">
                  Home
                </Link>
              </li>

              {/* About */}
              <li>
                <Link href="/about" className="text-white hover:text-blue-600">
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="dropdown">
                <Link
                  href="/services"
                  className="text-white hover:text-blue-600"
                >
                  Services
                </Link>
                <ul>
                  {/* Loop over servicesData to generate links dynamically */}
                  {servicesData.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-white hover:text-blue-600 block px-4 py-2"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Blog */}
              <li>
                <Link href="/blog" className="text-white hover:text-blue-600">
                  Blog
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <ul className="list-style-one mt-4">
              <li className="text-white">
                <i className="fa fa-map-marker-alt"></i> 415 NE 108th Ave,
                Portland, Oregon, ZIP 97220
              </li>
              <li className="text-white">
                <i className="fa fa-headset"></i> Call us:{" "}
                <a href="tel:+12059608084" className="text-white">
                  +1-205-960-8084
                </a>
              </li>
            </ul>

            {/* Social Links with spacing */}
            <ul className="social-links flex mt-8 space-x-4">
              <li>
                <Link href="#" className="text-white hover:text-blue-600">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-600">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-600">
                  <i className="fab fa-pinterest"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-600">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* End Mobile Menu */}
    </header>
  );
};

export default Header;
