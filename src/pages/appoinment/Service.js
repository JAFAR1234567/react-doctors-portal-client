import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto mb-16">
      <div class="card-body text-center">
        <h2 class="card-title mx-auto">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div class="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            class="btn btn-secondary text-white mx-auto"
            for="booking-modal"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
