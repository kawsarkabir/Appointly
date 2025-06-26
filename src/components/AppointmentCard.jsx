/* eslint-disable react/prop-types */
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { Button } from './ui/button';

export default function AppointmentCard({ handleBooking, isAvailableToday }) {
  return (
    <div className="mt-10 border rounded-xl p-6 shadow-sm">
      <h4 className="text-lg font-semibold mb-3 text-center  border-b border-dashed pb-3">
        Make an Appointment
      </h4>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Availability</span>{' '}
        <span
          className={`text-sm px-3 py-0.5 rounded-full ${
            isAvailableToday
              ? 'bg-[#09982F33] text-[#09982F]'
              : 'bg-red-100 text-red-500'
          }`}
        >
          {isAvailableToday ? 'Lawyer Available Today' : 'Not Available Today'}
        </span>
      </div>
      <div className="text-[#FFA000] text-sm inline-flex items-center rounded-2xl py-0.5 px-2 my-3 bg-[#FFA0001A] gap-1 w-auto">
        <IoIosInformationCircleOutline />
        <span>
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </span>
      </div>
      <div>
        <Button
          onClick={handleBooking}
          className="bg-[#0EA106] text-white w-full mt-4"
        >
          Book Appointment Now
        </Button>
      </div>
    </div>
  );
}
