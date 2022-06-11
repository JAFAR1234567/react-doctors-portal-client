import React from "react";
import img from "../../assets/images/chair.png";
const Home = () => {
  return (
    <div class="hero min-h-screen bg-base-100 " >
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
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
