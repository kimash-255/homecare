import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import React from "react";
import About from "@/components/about";
import Marquee from "@/components/marquee";
import Service from "@/components/service";
import Team from "@/components/about/Team";

const AboutPage = () => {
  return (
    <Layout>
      <section
        className="page-title"
        style={{ backgroundImage: `url(/images/background/page-title.jpg)` }}
      >
        <div className="auto-container " style={{ marginTop: "50px" }}>
          <div className="title-outer text-center">
            <h1 className="title">About Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>
      <About />
      <Marquee />
      <Service />
      {/* <Team /> */}
    </Layout>
  );
};

export default AboutPage;
