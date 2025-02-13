import React from "react";
import servicesData from "@/data/servicesData"; // Ensure this path is correct

const OurServices = () => (
  <section className="services-section-one pb-90">
    <div className="auto-container">
      <div className="row">
        {servicesData.map((service) => (
          <div
            key={service.slug}
            className="service-block-one col-lg-4 col-sm-6 wow fadeInUp"
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim">
                  <a href={`/services/${service.slug}`}>
                    <img src={service.imgSrc} alt={service.title} />
                  </a>
                </figure>
              </div>
              <div className="content-box">
                <i className={`icon ${service.iconClass}`}></i>
                <h4 className="title">
                  <a href={`/services/${service.slug}`}>{service.title}</a>
                </h4>
                <div className="text">{service.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurServices;
