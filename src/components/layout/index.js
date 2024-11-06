import React from "react";
import Header from "@/components/header";


const Layout = ({ children }) => {
  return (
    <div>
      {/* Header Component */}
      <Header></Header>

      {/* Main Content */}
      <main>{children}</main>
     
      {/* Optional: You can add a footer here later */}
    </div>
  );
};

export default Layout;
