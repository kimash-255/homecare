import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";

const Hero = () => {
  const sliderImages = [
    "/images/resource1/homecare-home-4.jpg",
    "/images/resource1/homecare-home-5.jpg",
  ];

  const textArray = [
    "Providing 24-hour residential care for individuals with intellectual and developmental disabilities in a safe, nurturing environment.",
    "Our dedicated team ensures personalized support, fostering independence and a fulfilling lifestyle.",
    "We are committed to enhancing the quality of life with compassionate care, structured programs, and a community-focused approach.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [textArray.length]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="relative w-full h-screen">
      <div>
        <Slider {...sliderSettings} className="h-screen">
          {sliderImages.map((src, index) => (
            <div key={index} className="relative w-full h-screen">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>

        <div className="absolute inset-0 page-title"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="auto-container flex flex-col items-center justify-center text-center text-white h-full px-8 lg:px-16"
            style={{ marginTop: "150px" }}
          >
            <span className="sub-title text-xl font-bold mb-4">
              Welcome to Dream Care Homes LLC.
            </span>
            <h1 className="text-5xl font-bold !text-white">
              24/7 hr residential Group Home for intellectual disabilities
            </h1>
            <ul className="text-l mt-6 ">
              <li>
                <h2 className="!text-white">
                  Providing round-the-clock care and a supportive environment
                  for individuals with intellectual and developmental
                  disabilities.
                </h2>
              </li>
            </ul>
            <div className="btn-box mt-8">
              <Link href="/about">
                <div className="theme-btn btn-style-one">
                  <span className="btn-title">Learn More</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
