import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";

const Hero = () => {
  const sliderImages = [
    "/images/banner/FRONT YARD.jpg",
    "/images/banner/FRONT YARD.jpg",
    "/images/banner/FRONT YARD.jpg",
  ];

  const textArray = [
    "A community of trained caregivers dedicated to providing a supportive, inclusive, and empowering environment that fosters growth and independence.",
    "We offer a nurturing environment to help individuals thrive in every aspect of life.",
    "Our mission is to ensure quality care tailored to the unique needs of each member of our community.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically shift the content after 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 4000);

    return () => clearInterval(interval); // Clean up interval on component unmount
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
    <section className=" relative w-full h-screen">
      <div className="">
        {/* Image Slider */}
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

        {/* Overlay using page-title class */}
        <div className="absolute inset-0 page-title"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="auto-container flex flex-col items-center justify-center text-center text-white h-full px-8 lg:px-16"
            style={{ marginTop: "150px" }}
          >
            <span className="sub-title text-xl font-bold mb-4">
              Welcome to Dream Care Homes LLC.
            </span>
            <h1 className="text-5xl font-bold">
              We Are Committed to Quality Care
            </h1>
            <ul className="text-l mt-6">
              <li>{textArray[currentIndex]}</li>
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
