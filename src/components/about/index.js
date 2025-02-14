import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaTwitter,
  FaFacebookSquare,
  FaPinterestP,
  FaInstagram,
  FaCartPlus,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

const About = () => {
  return (
    <section class="about-section">
      <div class="auto-container">
        <div class="row">
          <div
            class="content-column col-xl-6 col-lg-6 order-2 wow fadeInRight"
            data-wow-delay="600ms"
          >
            <div class="inner-column">
              <div class="sec-title">
                <span class="sub-title">Get to Know Us</span>
                <h2>Personalized Care for Adults with I/DD</h2>
                <div class="text">
                  At Dream Care Homes LLC, we are committed to providing a safe,
                  nurturing, and supportive environment where adults with
                  Intellectual and Developmental Disabilities can thrive, gain
                  independence, and enjoy a fulfilling life.
                </div>
              </div>

              <div class="row">
                <div class="info-box col-sm-6">
                  <div class="inner">
                    <i class="icon flaticon-oldkare-nurse"></i>
                    <h6 class="title">24/7 Care & Support</h6>
                    <div class="text">
                      Our compassionate staff provide round-the-clock assistance
                      with daily living activities, medication management, and
                      transportation.
                    </div>
                  </div>
                </div>
                <div class="info-box col-sm-6">
                  <div class="inner">
                    <i class="icon flaticon-oldkare-retirement-home"></i>
                    <h6 class="title">A Home-Like Setting</h6>
                    <div class="text">
                      Private, well-furnished bedrooms and spacious shared areas
                      create a warm, family-like atmosphere.
                    </div>
                  </div>
                </div>
                <div class="info-box col-sm-6">
                  <div class="inner">
                    <i class="icon flaticon-oldkare-savings"></i>
                    <h6 class="title">Community Engagement</h6>
                    <div class="text">
                      Residents participate in social outings, community
                      activities, and events that promote inclusion and
                      belonging.
                    </div>
                  </div>
                </div>
                <div class="info-box col-sm-6">
                  <div class="inner">
                    <i class="icon flaticon-oldkare-emergency"></i>
                    <h6 class="title">Empowerment & Independence</h6>
                    <div class="text">
                      We encourage self-sufficiency and personal growth,
                      supporting residents in making choices that enhance their
                      quality of life.
                    </div>
                  </div>
                </div>
              </div>

              <div class="btn-box">
                <a href="about" class="theme-btn btn-style-three">
                  <span class="btn-title">
                    Discover More <i class="fa fa-arrow-right"></i>
                  </span>
                </a>

                <a href="tel:+01750050088" class="info-btn">
                  <i class="icon fa fa-phone"></i>
                  <small>Call Anytime</small>
                  <strong>017 5005-0088</strong>
                </a>
              </div>
            </div>
          </div>

          <div class="image-column col-xl-6 col-lg-6">
            <div class="inner-column wow fadeInLeft">
              <figure class="image-1 overlay-anim wow fadeInUp">
                <img src="/images/loved-one3.jpg" alt="" />
              </figure>
              <figure class="image-2 overlay-anim wow fadeInLeft">
                <img src="/images/loved-one4.jpg" alt="" />
              </figure>
              <div class="exp-box">
                <div class="inner">
                  <h6 class="title">Best care for your loved one</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
