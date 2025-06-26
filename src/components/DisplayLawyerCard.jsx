/* eslint-disable react/prop-types */
import { TbLicense } from 'react-icons/tb';
import { Button } from './ui/button';
import { Link } from 'react-router';

export default function DisplayLawyerCard({ lawyer }) {
  const { id, name, image, speciality, experience, licenseNumber } = lawyer;
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const isAvailableToday = lawyer.availability.includes(today);

  return (
    <div className="flex items-center flex-wrap p-4 gap-10 border border-[rgba(15, 15, 15, 0.15);] rounded-xl">
      <div>
        <div>
          <img src={image} alt="" className="w-40 h-40 rounded-4xl" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span
            className={`text-sm font-medium ${isAvailableToday ? 'text-[#0EA106] bg-[#09982F1A] rounded-full py-1 px-3 text-xs ' : 'text-red-500 bg-[#ffe6e6] rounded-full py-1 px-3 text-xs'}`}
          >
            {isAvailableToday ? 'Available' : 'Unavailable'}
          </span>

          <span className="text-[#176AE5] bg-[#176AE51A] py-1 rounded-full px-3 text-xs ">
            {experience}+ Years Experience
          </span>
        </div>
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="text-[#0F0F0F99] font-semibold">{speciality}</p>
        <div className="flex items-center gap-x-0.5 text-[#0F0F0FB3]">
          <span>
            <TbLicense />
          </span>
          <span>{licenseNumber}</span>
        </div>
        <Link to={`/lawyer/${id}`}>
          <Button
            variant={'outline'}
            className={'rounded-full w-full text-[#176AE5]'}
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
