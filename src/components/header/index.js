import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/services">Services Details</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                      <li>
                        <Link href="/blog">News Grid</Link>
                      </li>
                      <li>
                        <Link href="/blog">News Details</Link>
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
                        >
                          <span>Contact Us</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className="outer-box">
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="close-btn">
              <i className="icon fa fa-times"></i>
            </div>
          </div>
          <ul className="navigation clearfix">
            <li style={{ paddingLeft: "150px" }}>
              <Link href="/">Home</Link>
            </li>
            <li className="dropdown" style={{ paddingLeft: "150px" }}>
              <Link href="/about">About</Link>
            </li>
            <li className="dropdown">
              <Link href="#">Services</Link>
              <ul>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/services">Services Details</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">Blog</Link>
              <ul>
                <li>
                  <Link href="/blog">News Grid</Link>
                </li>
                <li>
                  <Link href="/blog">News Details</Link>
                </li>
              </ul>
            </li>
            <div
              className="contact-info col-lg-2"
              style={{ paddingLeft: "150px" }}
            >
              <div className="inner">
                <Link href="contact" className="theme-btn btn-style-three">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
