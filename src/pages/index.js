import Layout from "@/components/layout";
import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Marquee from "@/components/marquee";
import Service from "@/components/service";
import FunFact from "@/components/about/FunFact";
import Testimonials from "@/components/about/Testimonials";
import CallToAction from "@/components/about/CallToAction";
import BlogNews from "@/components/blog";
import Clients from "@/components/about/Clients";
import Contact from "@/components/contactus";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Marquee />
      <Service />
      <FunFact />
      <Testimonials />
      <CallToAction />
      {/* <BlogNews /> */}
      {/* <Clients /> */}
      {/* <Contact/> */}
      {/* Other homepage content */}
    </Layout>
  );
};
export default Home;
