import React from "react";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import Info from "../../components/Info";
import Services from "../../components/Services";
import Appoinment from "../appoinment/Appoinment";
const Home = () => {
  return (
    <div>
    <Banner/>
    <Info/>
    <Services/>
    <Banner2/>
    <Appoinment/>
    </div>
  );
};

export default Home;
