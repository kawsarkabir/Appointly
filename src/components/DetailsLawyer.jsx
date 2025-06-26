import { useLoaderData, useNavigate } from 'react-router';
import { TbLicense } from 'react-icons/tb';
import { getBookings, saveBookings } from '@/utils/bookingUtils';
import AppointmentCard from './AppointmentCard';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function DetailsLawyer() {
  const lawyer = useLoaderData();
  const navigate = useNavigate();
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const isAvailableToday = lawyer.availability.includes(today);

  const handleBooking = () => {
    if (!isAvailableToday) {
      toast.error('Lawyer is unavailable today.');
      return;
    }
    const existing = getBookings();
    const alreadyBooked = existing.find((item) => item.id === lawyer.id);

    if (alreadyBooked) {
      toast.warning(`You've already booked ${lawyer.name}`);
      return;
    }

    const newBooking = {
      id: lawyer.id,
      name: lawyer.name,
      fee: lawyer.fee,
      speciality: lawyer.speciality,
    };

    const updatedBookings = [...existing, newBooking];
    saveBookings(updatedBookings);

    toast.success(`Successfully booked ${lawyer.name}`);
    navigate('/bookings');
  };
  useEffect(() => {
    document.title = `${lawyer.name} - Appointly`;
  }, [lawyer.name]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 bg-[#0F0F0F0D] p-10 text-center rounded-xl">
        <h2 className="text-2xl font-bold">Lawyer’s Profile Details</h2>
        <p className="text-gray-600 max-w-5xl mx-auto my-4">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Lawyer Image */}
        <div className="   ">
          <img
            src={lawyer?.image}
            alt={lawyer.name}
            className="rounded-xl w-70 h-52 "
          />
        </div>

        {/* Lawyer Info */}
        <div className="space-y-2">
          <span className="text-[#176AE5] bg-[#176AE51A] py-1 px-3 rounded-full text-xs ">
            Experience: {lawyer.experience}+ years
          </span>
          <h3 className="text-xl font-semibold mt-2">{lawyer.name}</h3>
          <div className="flex items-center gap-x-4">
            <span className="text-md text-[#141414B3]">
              {lawyer.speciality}
            </span>
            <div className="flex text-md items-center gap-x-0.5 text-[#0F0F0FB3]">
              <span>
                <TbLicense />
              </span>
              <span>{lawyer.licenseNumber}</span>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <h3 className="text-[#141414B3]">Availability</h3>
            <div className=" flex items-center gap-4 px-2">
              {lawyer.availability.map((day) => (
                <span
                  className="bg-[#FFA0001A] text-[#FFA000] rounded-full px-3 py-0.5 text-sm"
                  key={day}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <p className="gap-2">
            Consultation Fee: Taka:{' '}
            <span className="text-[#0EA106]">{lawyer.fee}</span>
          </p>
        </div>
      </div>
      <AppointmentCard
        isAvailableToday={isAvailableToday}
        handleBooking={handleBooking}
      />
    </div>
  );
}
