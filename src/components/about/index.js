import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaHeadset, FaTwitter, FaFacebookSquare, FaPinterestP, FaInstagram, FaCartPlus, FaSearch, FaTimes } from "react-icons/fa";

const About = () => {
  return (
    <section class="about-section">
    <div class="auto-container">
        <div class="row">
            <div class="content-column col-xl-6 col-lg-6 order-2 wow fadeInRight" data-wow-delay="600ms">
                <div class="inner-column">
                    <div class="sec-title">
                        <span class="sub-title">Get to Know Us</span>
                        <h2>Living life in the fullest begins right now with you</h2>
                        <div class="text">Lorem Ipsum is simply dummy text of the printing and estting industry. Lorem Ipsum has been the industry's standard dummy</div>
                    </div>

                    <div class="row">
                        <div class="info-box col-sm-6">
                            <div class="inner">
                                <i class="icon flaticon-oldkare-nurse"></i>
                                <h6 class="title">Expert Nursing</h6>
                                <div class="text">There are many Ipism passages tortor</div>
                            </div>
                        </div>
                        <div class="info-box col-sm-6">
                            <div class="inner">
                                <i class="icon flaticon-oldkare-retirement-home"></i>
                                <h6 class="title">Provide Home</h6>
                                <div class="text">There are many Ipism passages tortor</div>
                            </div>
                        </div>
                        <div class="info-box col-sm-6">
                            <div class="inner">
                                <i class="icon flaticon-oldkare-savings"></i>
                                <h6 class="title">Quality Food</h6>
                                <div class="text">There are many Ipism passages tortor</div>
                            </div>
                        </div>
                        <div class="info-box col-sm-6">
                            <div class="inner">
                                <i class="icon flaticon-oldkare-emergency"></i>
                                <h6 class="title">Best Services</h6>
                                <div class="text">There are many Ipism passages tortor</div>
                            </div>
                        </div>
                    </div>

                    <div class="btn-box">
                        <a href="page-about.html" class="theme-btn btn-style-three"><span class="btn-title">Discover More <i class="fa fa-arrow-right"></i></span></a>
                     
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
                    <figure class="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about1-1.jpg" alt=""/></figure>
                    <figure class="image-2 overlay-anim wow fadeInLeft"><img src="images/resource/about1-2.jpg" alt=""/></figure>
                    <div class="exp-box">
                        <div class="inner">
                            <h6 class="title">Best elderly care for your family</h6>
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
