import Link from "next/link";
import Layout from "@/components/layout";
import OurServices from "@/components/service/OurServices";

const ServicesPage = () => {
  return (
    <Layout>
      <section
        className="page-title"
        style={{ backgroundImage: `url(/images/background/page-title.jpg)` }}
      >
        <div className="auto-container" style={{ marginTop: "50px" }}>
          <div className="title-outer text-center">
            <h1 className="title">Our Services</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Our Services</li>
            </ul>
          </div>
        </div>
      </section>
      <OurServices />
    </Layout>
  );
};

export default ServicesPage;
