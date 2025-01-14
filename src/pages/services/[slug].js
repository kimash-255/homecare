import React from "react";
import { useRouter } from "next/router";
import servicesData from "@/data/servicesData"; // Adjust the path as necessary
import Layout from "@/components/layout";
import Link from "next/link";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the service with the matching slug from `servicesData`
  const service = servicesData.find((service) => service.slug === slug);

  // If service is not found (invalid slug), return a message
  if (!service) return <p>Service not found</p>;

  return (
    <Layout>
      {/* Page Title Section */}
      <section
        className="page-title"
        style={{ backgroundImage: `url('/images/background/page-title.jpg')` }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">{service.title}</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Service Details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                {/* Service List */}
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      {servicesData.map((s) => (
                        <li
                          key={s.slug}
                          className={s.slug === slug ? "current" : ""}
                        >
                          <Link href={`/services/${s.slug}`}>
                            <i className="fas fa-angle-right"></i>
                            <span>{s.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Widget */}
                  <div className="service-details-help">
                    <h2 className="help-title">
                      Contact with us for any advice
                    </h2>
                    <div className="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <span className="phone-number">
                        +892 ( 123 ) 112 - 9999
                      </span>
                    </div>
                  </div>

                  {/* Download PDF Button */}
                  <div className="service-sidebar-single-btn mt-4">
                    <div className="theme-btn btn-style-one d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span> Download PDF
                        file
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Details Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <img src={service.imgSrc} alt={service.title} />
                <h3 className="mt-4">Service Overview</h3>
                <p>{service.details.overview}</p>

                <div className="content mt-4">
                  <h3>Service Center</h3>
                  <p>{service.details.serviceCenter}</p>
                </div>

                {/* Features List */}
                <div className="feature-list mt-4">
                  <div className="row clearfix">
                    {service.details.features.map((feature, index) => (
                      <div
                        key={index}
                        className="col-lg-6 col-md-6 col-sm-12 column"
                      >
                        <img
                          className="mb-3"
                          src={feature.imgSrc}
                          alt="feature"
                        />
                        <p>{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="innerpage mt-4">
                  <h3>Frequently Asked Questions</h3>
                  <ul className="accordion-box">
                    {service.details.faqs.map((faq, index) => (
                      <li key={index} className="accordion block">
                        <div className="acc-btn">
                          {faq.question}
                          <div className="icon fa fa-plus"></div>
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">{faq.answer}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetailsPage;
