import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mary",
      designation: "Parent",
      text: "We were amazed by the level of care and compassion shown to our son. The staffs truly understand his needs and have helped him thrive.",
    },
    {
      name: "John",
      designation: "Father",
      text: "The group home has become a second family to our daughter. She's happy, safe, and supported – we couldn't ask for more.",
    },
    {
      name: "Emily",
      designation: "Sister",
      text: "We've seen significant improvements in our brother's behavior and independence since moving into the group home. The staff are knowledgeable and caring.",
    },
    {
      name: "Robert",
      designation: "Resident",
      text: "I love living here! The staff are nice, and we have fun activities. I feel safe and happy.",
    },
    {
      name: "Michael",
      designation: "Resident",
      text: "I've made friends here, and we do cool things together. The staff help me with my goals, and I'm getting more independent.",
    },
    {
      name: "John",
      designation: "Resident",
      text: "I like the food here, and my room is comfy. The staffs are kind and help me when I need it.",
    },
    {
      name: "Rachel",
      designation: "Residential Counselor",
      text: "Working here is rewarding because I see the positive impact we have on our residents' lives. It's a team effort, and I'm proud to be part of it.",
    },
    {
      name: "David",
      designation: "Program Manager",
      text: "I love watching our residents grow and achieve their goals. It's amazing to see the progress they make with our support.",
    },
    {
      name: "Karen",
      designation: "Nurse Manager",
      text: "Our team is like a family, and we all work together to provide the best possible care for our residents. It's a great place to work!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <section className="testimonials-section">
      <div className="bg-map bounce-y"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Client Testimonial</span>
          <h2>
            What people are saying <br />
            about us!
          </h2>
        </div>
        <div className="row">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="info-box">
                    <div className="quote-icon">
                      <span className="icon fa fa-quote-right"></span>
                    </div>
                    <h4 className="name">{testimonial.name}</h4>
                    <span className="designation">
                      {testimonial.designation}
                    </span>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <div className="text">{testimonial.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
