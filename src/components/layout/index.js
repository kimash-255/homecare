import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header Component */}
      <Header></Header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Optional: You can add a footer here later */}
      <Footer />
    </div>
  );
};

export default Layout;
