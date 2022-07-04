import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user] = useAuthState(auth);
const formatedDate = format(date,'PP');
  const { _id, name, slots } = treatment;
  const handleBooking =(e)=>{
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking ={
      treatmentID : _id,
      treatmentName : name,
      date: formatedDate,
      slot,
      patient:user.displayName,
      patientEmail:user.email,
      phone:e.target.phone.value
    }
    //to close the modal
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
              disabled
             value={user?.displayName}
              class="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              class="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
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
