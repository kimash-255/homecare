import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import servicesData from "@/data/servicesData"; // Adjust the path as necessary
import Layout from "@/components/layout";
import Link from "next/link";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundService = servicesData.find(
        (service) => service.slug === slug
      );
      setService(foundService); // Set the service to state
    }
  }, [slug]); // Run effect when slug changes

  // If service is not found or slug is not available
  if (!slug) return <p>Loading...</p>;
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

      {/* Services Details Section */}
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
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
                {/* Additional Widgets */}
              </div>
            </div>

            {/* Main Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <img src={service.imgSrc} alt={service.title} />
                <h3>Service Overview</h3>
                <p>{service.details.overview}</p>
                {/* Additional Sections */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetailsPage;
