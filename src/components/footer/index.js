import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer class="main-footer footer-style-one">
      <div class="bg-pattern-2 bounce-y"></div>

      <div class="auto-container">
        <div class="footer-upper">
          <div class="row">
            <div class="footer-logo col-xl-3 col-lg-2">
              <div class="inner">
                <div class="logo">
                  <img src="images/logo.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-xl-7 col-lg-8">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="contact-info-block">
                    <div class="inner">
                      <i class="icon fa fa-phone-square"></i>
                      <span class="sub-title">Phone:</span>
                      <div class="text">
                        <Link href="tel:+12059608084">+1 (205) 960-8084</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="contact-info-block">
                    <div class="inner">
                      <i class="icon fa fa-envelope"></i>
                      <span class="sub-title">Email:</span>
                      <div class="text">
                        <Link href="mailto:dreamcarehomes@yahoo.com">
                          dreamcarehomes@yahoo.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="contact-info-block before-none">
                    <div class="inner">
                      <i class="icon fa fa-map-marker"></i>
                      <span class="sub-title">Our Location:</span>
                      <div class="text">
                        <p>
                          <strong>Dream Care Homes LLC</strong>
                        </p>
                        <p>415 NE 108th Ave, Portland</p>
                        <p>Portland, Oregon, ZIP 97220</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-info col-lg-2">
              <div class="inner">
                <Link href="contact" className="theme-btn btn-style-three">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="widgets-section">
        <div class="auto-container">
          <div class="row align-items-center">
            <div class="footer-column pe-0 col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="footer-widget about-widget">
                <div class="widget-content">
                  <div class="footer-abvout-icon-box">
                    <div class="inner-box pr-10">
                      <div class="icon flex-shrink-0">
                        <i class="far fa-clock-rotate-left"></i>
                      </div>
                      <div class="inner">
                        <h5 class="title">Opening Hours</h5>
                        <div class="time">Mon-Sat(8.00-6.00) Sunday-Closed</div>
                      </div>
                    </div>
                  </div>

                  <div class="text">
                    Dream Care Homes LLC provides compassionate care for
                    individuals with developmental disabilities.
                  </div>
                  <ul class="social-icon-four">
                    <li>
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-pinterest"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="footer-column col-lg-2 offset-xl-1 col-md-6 col-sm-6">
              <div class="footer-widget links-widget">
                <h5 class="widget-title">Types of Services</h5>
                <div class="widget-content">
                  <ul class="user-links">
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i>{" "}
                        Support Groups
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> Family
                        Counseling
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> Crisis
                        Intervention
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> Home
                        Care
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> Job
                        Training
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i>{" "}
                        Nutrition Plans
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="footer-column col-xl-3 col-lg-2 col-md-6 col-sm-6">
              <div class="footer-widget links-widget-2">
                <h5 class="widget-title">Explore</h5>
                <div class="widget-content">
                  <ul class="user-links">
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> Meet
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> About
                        Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> Our
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> New
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> Latest
                        News
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="arrow-icon far fa-window-minimize"></i> FAQ’s
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="footer-widget blog-widget">
                <h5 class="widget-title">Latest news</h5>
                <div class="widget-content">
                  <article class="recent-post">
                    <div class="inner">
                      <figure class="post-thumb">
                        <Link href="#">
                          <img src="images/resource/post-thumb-1.jpg" alt="" />
                        </Link>
                      </figure>
                      <div class="post-info">
                        <i class="fas fa-calendar-alt"></i> January 11, 2024
                      </div>
                      <h6 class="post-title">
                        <Link href="#">
                          New Caring Thoughts You Can Fundraise
                        </Link>
                      </h6>
                    </div>
                  </article>
                  <article class="recent-post">
                    <div class="inner">
                      <figure class="post-thumb">
                        <Link href="#">
                          <img src="images/resource/post-thumb-2.jpg" alt="" />
                        </Link>
                      </figure>
                      <div class="post-info">
                        <i class="fas fa-calendar-alt"></i> January 11, 2024
                      </div>
                      <h6 class="post-title">
                        <Link href="#">
                          Five Tips to Improve Seniors’ Quality of Life
                        </Link>
                      </h6>
                    </div>
                  </article>
                  <article class="recent-post">
                    <div class="inner">
                      <figure class="post-thumb">
                        <Link href="#">
                          <img src="images/resource/post-thumb-3.jpg" alt="" />
                        </Link>
                      </figure>
                      <div class="post-info">
                        <i class="fas fa-calendar-alt"></i> January 11, 2024
                      </div>
                      <h6 class="post-title">
                        <Link href="#">
                          Exploring your In home care support options
                        </Link>
                      </h6>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="auto-container">
          <div class="inner-container">
            <div class="copyright-text">
              © Copyright 2024 by Softleeklimited
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
