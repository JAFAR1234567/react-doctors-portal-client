import React from "react";
import Appoinment from "../../components/Appoinment";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div>
    <Banner/>
    <Info/>
    <Services/>
    <Banner2/>
    <Appoinment/>
    <Footer/>
    </div>
  );
};

export default Home;
