import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleBooking =(e)=>{
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center">
            Booking For: {name}
          </h3>
          <form onSubmit={handleBooking} className="py-4 grid grid-cols-1 gap-3 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered input-md w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option key={slot.key} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              class="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              class="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
