import React from "react";

const ServiceCard = ({service}) => {
    const {_id,img,title} = service;
    console.log(img);
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
      />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default ServiceCard;
