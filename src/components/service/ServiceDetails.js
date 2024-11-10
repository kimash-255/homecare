
import React from "react";
import { Link } from "react-router-dom";
import servicesData from "@/data/servicesData"; // Adjust the path as necessary

const ServiceDetails = ({ service }) => {
    if (!service) return <div>Service not found</div>;

    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-xl-4 col-lg-4">
                        <div className="service-sidebar">
                            <div className="sidebar-widget service-sidebar-single">
                                <div className="sidebar-service-list">
                                    <ul>
                                        {servicesData.map(svc => (
                                            <li key={svc.id} className={svc.id === service.id ? "current" : ""}>
                                                <Link to={`/services/${svc.id}`}>
                                                    <i className="fas fa-angle-right"></i>
                                                    <span>{svc.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="service-details-help">
                                <h2 className="help-title">Contact with us for any advice</h2>
                                <div className="help-contact">
                                    <p>Need help? Talk to an expert</p>
                                    <a href="tel:+8921231129999">+892 ( 123 ) 112 - 9999</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-xl-8 col-lg-8">
                        <div className="services-details__content">
                            <img 
                                src={service.imgSrc} 
                                alt={service.title} 
                                className="main-service-img"
                            />
                            <h3 className="mt-4">Service Overview</h3>
                            <p>{service.details.overview}</p>

                            <h3 className="mt-4">Service Center</h3>
                            <p>{service.details.serviceCenter}</p>

                            <div className="feature-list mt-4">
                                <div className="row clearfix">
                                    {service.details.features.map((feature, idx) => (
                                        <div key={idx} className="col-lg-6 col-md-6 col-sm-12 column">
                                            <img className="mb-3" src={feature.imgSrc} alt={`Feature ${idx + 1}`} />
                                            <p>{feature.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h3 className="mt-4">Frequently Asked Questions</h3>
                            <ul className="accordion-box">
                                {service.details.faqs.map((faq, idx) => (
                                    <li key={idx} className="accordion block">
                                        <div className="acc-btn">
                                            {faq.question}
                                            <div className="icon fa fa-plus"></div>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">{faq.answer}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
