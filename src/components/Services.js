import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";
import Banner2 from "./Banner2";
const Services = () => {
  const services = [
    { _id: 1, title: "Fluoride Treatment", des: "", img: fluoride },
    { _id: 2, title: "Cavityt Filling", des: "", img: cavity },
    { _id: 3, title: "Treeth whitening", des: "", img: whitening },
  ];
  return (
    <div className="py-4">
      <div className="text-center">
        <h1 className="text-primary text-3xl font-bold">Our Service</h1>
        <h3 className=" text-2xl font-bold">Services We Provide</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-5 py-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    
    </div>
  );
};

export default Services;
