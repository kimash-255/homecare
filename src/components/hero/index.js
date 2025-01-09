import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="banner-section-one">
      <div
        className="bg"
        style={{ backgroundImage: "url(./images/banner/bg-1.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="content-columnn col-lg-5">
            <div className="content-box">
              <span className="sub-title wow fadeInUp" data-wow-delay="200ms">
                 Welcome to Dream Care Homes LLC.
              </span>
              <h1>We Are Committed to Quality Care</h1>
              <div className="text wow fadeInUp" data-wow-delay="400ms">
                A community of trained caregivers dedicated to provide a
                supportive, inclusive, and empowering community that fosters
                growth and independence.
              </div>
              <div className="btn-box wow fadeInUp" data-wow-delay="500ms">
                <Link href="/about">
                  <div className="theme-btn btn-style-one">
                    <span className="btn-title">Learn More</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="image-column col-lg-7">
            <div className="image-box wow fadeInRight" data-wow-delay="600ms">
              <figure className="image overlay-anim">
                <Image
                  src="/images/banner/1.jpg"
                  alt="Banner Image 1"
                  width={600} // Specify the width of the image
                  height={400} // Specify the height of the image
                />
              </figure>
              <figure className="image-2 overlay-anim">
                <Image
                  src="/images/banner/2.jpg"
                  alt="Banner Image 2"
                  width={600} // Specify the width of the image
                  height={400} // Specify the height of the image
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
