import React from "react";
import Nav from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const page = ({ children }) => {
  return (
    <div className="app">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default page;
