import React from "react";
import Header from "../../components/HomePage/Header";
import Discount from "../../components/HomePage/Discount";
import OurMenu from "../../components/HomePage/OurMenu";
import About from "../../components/HomePage/About";
import BookTable from "../../components/HomePage/BookTable";
import Testimonals from "../../components/HomePage/Testimonals";

export default () => {
  return (
    <div>
      <Header />
      <Discount />
      <OurMenu />
      <About />
      <BookTable />
      <Testimonals />
    </div>
  );
};
