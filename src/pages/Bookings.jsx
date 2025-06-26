/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Button } from '@/components/ui/button';
import { getBookings, saveBookings } from '@/utils/bookingUtils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#FF66B2',
  '#A28CFF',
];

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    document.title = 'My Bookings - Appointly';
    const stored = getBookings();
    setBookings(stored);
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.filter((item) => item.id !== id);
    saveBookings(updated);
    setBookings(updated);
    toast.error('Appointment Cancelled');
  };

  if (bookings.length === 0) {
    return (
      <div className="text-center py-20 space-y-4 my-14">
        <h2 className="text-2xl font-semibold">No Appointments Booked Yet</h2>
        <Link to="/">
          <Button className="bg-[#0EA106] text-white">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {bookings.length > 0 && (
        <div className="mb-10">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={bookings}
              margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="fee"
                shape={<TriangleBar />}
                label={{ position: 'top' }}
              >
                {bookings.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="space-y-6">
        <div className="text-center pb-8">
          <h2 className="text-2xl font-bold mb-2">My Today Appointments</h2>
          <p className="text-[#0F0F0FCC]">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience.
          </p>
        </div>
        {bookings.map((booking) => (
          <div key={booking.id} className="border rounded-lg p-5   ">
            <div className="flex items-center justify-between border-b pb-3 border-dashed ">
              <div className="">
                <h3 className="text-lg font-semibold">{booking.name}</h3>
                <p className="text-[#14141499]">
                  Speciality: {booking.speciality}
                </p>
              </div>
              <p className="text-[#14141499]">Fee: ৳{booking.fee}</p>
            </div>
            <div className="w-full mt-5 flex justify-center">
              <Button
                className="w-full text-[#FF0000] border-[1px] border-[#FF0000] hover:bg-[#FF0000]/10"
                variant="outline"
                onClick={() => handleCancel(booking.id)}
              >
                Cancel Appointment
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
