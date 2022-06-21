import React from "react";
import doctor from "../assets/images/doctor.png";

const Appoinment = () => {
  return (
    <section className="bg-accent text-white grid grid-cols-1 md:grid-cols-2 items-center px-8 mb-1 mt-24 py-8">
      <div className="w-full mt-[-150px]">
        <img src={doctor} alt="" className="w-full" />
      </div>
      <div>
        <h3 className="text-primary capitalize text-3xl font-bold mt-6">
          Appoinment
        </h3>
        <h1 className=" capitalize text-4xl font-bold py-4">
          Make an Appoinment Today
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste
          vel provident odio maiores corporis officia fuga quod ipsum libero
          tenetur eum praesentium obcaecati vero exercitationem natus officiis
          facere, maxime nulla nostrum fugiat quam laudantium hic? Excepturi,
          accusamus obcaecati?
        </p>
      </div>
    </section>
  );
};

export default Appoinment;
