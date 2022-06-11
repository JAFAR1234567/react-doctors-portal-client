import React from "react";

const InfoCard = ({ img,cardTitle,bgClass }) => {
  return (
    <div class={`card lg:card-side shadow-xl p-4 text-white ${bgClass}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body mx-auto md:mx-0 text-center md:text-left">
        <h2 class="card-title mx-auto md:mx-0 ">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
