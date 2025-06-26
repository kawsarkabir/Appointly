import { Button } from '@/components/ui/button';
import { getBookings, saveBookings } from '@/utils/bookingUtils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = getBookings();
    setBookings(stored);
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.filter((item) => item.id !== id);
    saveBookings(updated);
    setBookings(updated);
    alert('Appointment Cancelled');
  };

  if (bookings.length === 0) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-semibold">No Appointments Booked Yet</h2>
        <Link to="/">
          <Button className="bg-[#0EA106] text-white">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Your Appointments</h2>
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border rounded-lg p-5 shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{booking.name}</h3>
              <p>Speciality: {booking.speciality}</p>
              <p>Fee: ৳{booking.fee}</p>
            </div>
            <Button
              variant="destructive"
              onClick={() => handleCancel(booking.id)}
            >
              Cancel Appointment
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
