import React from "react";
import img from "../assets/images/chair.png";
import bgImg from "../assets/images/bg.png";
import Button from "./Button";
const Banner = () => {
  return (
    <div
      class="hero h-screen bg-base-100"
      style={{
        backgroundImage: `url(${bgImg}) `,
        position: "center",
        width: "100%",
        height: "50%",
      }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div className="w-100">
          <img src={img} alt="hero-img" />
        </div>
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Banner;
