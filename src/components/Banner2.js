import React from 'react'
import treatement from '../assets/images/treatment.png'
const Banner2 = () => {
  return (
    <div class="hero min-h-[500px] ">
  <div class="hero-content flex-col lg:flex-row">
    <div className="md:h-[400px] md:w-[400px] h-full w-full">
    <img src={treatement} className="w-full h-full object-cover rounded-md" alt=''/>
    </div>
    <div className='md:text-left text-center'>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner2