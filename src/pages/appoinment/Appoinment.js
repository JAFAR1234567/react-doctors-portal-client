import React from "react";

import { useState } from "react";
import Footer from "../../components/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinments from "./AvailableAppoinments";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());

  return <>
  <AppoinmentBanner date={date} setDate={setDate}/>
  <AvailableAppoinments date={date}/>
  <Footer></Footer>
  </>
};
export default Appoinment;
