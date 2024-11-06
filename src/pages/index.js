import Layout from "@/components/layout";
import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Marquee from "@/components/marquee";

const Home = () => {
  return (
    <Layout>
      
      <Hero/>
      <About/>
      <Marquee/>
        {/* Other homepage content */}
    
    </Layout>
  );
};
export default Home;