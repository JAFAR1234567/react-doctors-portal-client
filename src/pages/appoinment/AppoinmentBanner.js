import React from 'react'
import img from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppoinmentBanner = ({date,setDate}) => {
  return (
  
        <div class="hero-content flex-col lg:flex-row-reverse gap-10">
      <div className="w-3/6">
        <img src={img} alt="hero-img" />
      </div>
      <div>
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={new Date()}
          fromYear={2022}
          toYear={2022}
        />
      </div>
    </div>
 
  )
}

export default AppoinmentBanner