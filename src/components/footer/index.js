import Image from "next/image";
import Link from "next/link";
import servicesData from "@/data/servicesData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer footer-style-one">
      <div className="bg-pattern-2 bounce-y"></div>

      <div className="auto-container">
        <div className="footer-upper">
          <div className="row">
            {/* <div className="footer-logo col-xl-2 col-lg-1">
              <div className="inner">
                <div className="logo">
                  <Link href="/" className=" text-white logo-text">
                    Dream Care Homes
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="col-xl-10 col-lg-8 p-2">
              <div className="row px-4">
                <div className=" col-sm-6">
                  <div className="contact-info-block">
                    <div className="inner">
                      <i className="icon fa fa-phone-square"></i>
                      <span className="sub-title">Phone:</span>
                      <div className="text">
                        <Link href="tel:+12059608084">+1 (205) 960-8084</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-sm-6">
                  <div className="contact-info-block">
                    <div className="inner">
                      <i className="icon fa fa-envelope"></i>
                      <span className="sub-title">Email:</span>
                      <div className="text">
                        <Link href="mailto:dreamcarehomes@yahoo.com">
                          dreamcarehomes@yahoo.com
                        </Link>
                        <Link href="mailto:dreamcarehomes17@gmail.com">
                          dreamcarehomes17@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-4 col-sm-6">
                  <div className="contact-info-block before-none">
                    <div className="inner">
                      <i className="icon fa fa-map-marker"></i>
                      <span className="sub-title">Our Location:</span>
                      <div className="text">
                        <p>
                          <strong>Dream Care Homes LLC</strong>
                        </p>
                        <p>415 NE 108th Ave, Portland</p>
                        <p>Portland, Oregon, ZIP 97220</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="contact-info col-lg-2">
              <div className="inner">
                <Link href="/contact" className="theme-btn btn-style-three">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="widgets-section">
        <div className="auto-container">
          <div className="row align-items-cente">
            <div className="footer-column pe-0 col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="widget-content">
                  <h5 className="text-2xl text-white mb-2">
                    Dream Care Homes LLC
                  </h5>
                  <div className="footer-abvout-icon-box">
                    <div className="inner-box pr-10">
                      <div className="flex flex-col">
                        <h5 className="title text-base mb-1 font-bold uppercase">
                          Location
                        </h5>
                        <div className="icon flex-shrink-0">
                          <i className="far fa-map-marker"></i>
                        </div>
                      </div>
                      <div className="inner">
                        <div className="time">
                          <ul className="space-y-2 text-gray-200">
                            <li className="border-l-4 border-blue-500 pl-2">
                              415 NE 108TH AVE, 97220 PORTLAND, OREGON
                            </li>
                            <li className="border-l-4 border-green-500 pl-2">
                              3819 NE 112TH AVE, 97220 PORTLAND, OREGON
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text">
                    Dream Care Homes LLC provides compassionate care for
                    individuals with developmental disabilities.
                  </div>
                  <ul className="social-icon-four">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-pinterest"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-column col-lg-4 offset-xl-1 col-md-6 col-sm-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Types of Services</h5>
                <div className="widget-content">
                  <ul className="user-links">
                    <li className="dropdown">
                      <Link href="/services">
                        {/* Remove the "Services" from the links */}
                      </Link>
                      <ul>
                        {servicesData.map((service) => (
                          <li key={service.slug} className="text-xs">
                            <Link href={`/services/${service.slug}`}>
                              <i className="arrow-icon far fa-window-minimize"></i>{" "}
                              {service.title.split(" ")[0]}{" "}
                              {service.title.split(" ").slice(-1)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-column col-xl-3 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget links-widget-2">
                <h5 className="widget-title">Explore</h5>
                <div className="widget-content">
                  <ul className="user-links">
                    <li>
                      <Link href="/about">
                        <i className="arrow-icon far fa-window-minimize"></i>{" "}
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <i className="arrow-icon far fa-window-minimize"></i>{" "}
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery">
                        <i className="arrow-icon far fa-window-minimize"></i>{" "}
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-6">
              {/* <div className="footer-widget blog-widget">
                <h5 className="widget-title">Latest news</h5>
                <div className="widget-content">
                  <article className="recent-post">
                    <div className="inner">
                      <figure className="post-thumb">
                        <Link href="#">
                          <img src="images/resource/post-thumb-1.jpg" alt="" />
                        </Link>
                      </figure>
                      <div className="post-info">
                        <i className="fas fa-calendar-alt"></i> January 11, 2024
                      </div>
                      <h6 className="post-title">
                        <Link href="#">
                          New Caring Thoughts You Can Fundraise
                        </Link>
                      </h6>
                    </div>
                  </article>
                  <article className="recent-post">
                    <div className="inner">
                      <figure className="post-thumb">
                        <Link href="#">
                          <img src="images/resource/post-thumb-2.jpg" alt="" />
                        </Link>
                      </figure>
                      <div className="post-info">
                        <i className="fas fa-calendar-alt"></i> January 11, 2024
                      </div>
                      <h6 className="post-title">
                        <Link href="#">
                          Five Tips to Improve Seniors’ Quality of Life
                        </Link>
                      </h6>
                    </div>
                  </article>
                  <article className="recent-post">
                    <div className="inner">
                      <figure className="post-thumb">
                        <Link href="#">
                          <img src="images/resource/post-thumb-3.jpg" alt="" />
                        </Link>
                      </figure>
                      <div className="post-info">
                        <i className="fas fa-calendar-alt"></i> January 11, 2024
                      </div>
                      <h6 className="post-title">
                        <Link href="#">
                          Exploring your In-home Care Support Options
                        </Link>
                      </h6>
                    </div>
                  </article>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © Copyright {currentYear} by Dream Care Homes LLC. Designed by{" "}
              <Link href="https://mslabdesigns.com">Mslabdesigns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
