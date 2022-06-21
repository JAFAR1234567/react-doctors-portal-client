import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import Service from "./Service";
import BookingModal from "./BookingModal";
const AvailableAppoinments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="my-16">
        <h1 className="text-2xl text-center text-primary">
          You Have Selected {format(date, "PP")}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal  treatment={treatment} date={date} setTreatment={setTreatment}/>}
    </div>
  );
};

export default AvailableAppoinments;
