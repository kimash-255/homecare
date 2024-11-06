import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="banner-section-one">
      <div
        className="bg"
        style={{
          backgroundImage: "url(/images/banner/bg-1.png)",
        }}
      ></div>
      <div className="auto-container">
        <div className="row align-items-center">
          {/* Content Column */}
          <div className="content-column col-lg-5">
            <div className="content-box">
              <span className="sub-title wow fadeInUp" data-wow-delay="200ms">
                Welcome to Oldcare Center
              </span>
              <h1 className="title wow fadeInUp" data-wow-delay="300ms">
                We Are Committed to Quality Care
              </h1>
              <div className="text wow fadeInUp" data-wow-delay="400ms">
                All-time support from a specialist carer who moves into the home
              </div>
              <div className="btn-box wow fadeInUp" data-wow-delay="500ms">
                {/* Link component without <a> tag */}
                <Link href="/page-about">
                  <button className="theme-btn btn-style-one">
                    <span className="btn-title">Learn More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-7">
            <div className="image-box wow fadeInRight" data-wow-delay="600ms">
              <figure className="image overlay-anim">
                <Image
                  src="/images/banner/1.jpg"
                  alt="Care"
                  layout="responsive"
                  width={600}
                  height={400}
                />
              </figure>
              <figure className="image-2 overlay-anim">
                <Image
                  src="/images/banner/2.jpg"
                  alt="Care"
                  layout="responsive"
                  width={600}
                  height={400}
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
