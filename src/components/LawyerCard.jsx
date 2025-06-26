import { dataPromise } from '@/utils/dataPromise';
import { use, useState } from 'react';
import DisplayLawyerCard from './DisplayLawyerCard';
import { Button } from './ui/button';

export default function LawyerCard() {
  const data = use(dataPromise);

  // Add state to track showAll
  const [showAll, setShowAll] = useState(false);

  // Show 6 lawyers initially, all if showAll = true
  const lawyersToShow = showAll ? data : data.slice(0, 6);

  return (
    <div className="py-14">
      <div className="text-center w-3/4 mx-auto space-y-1.5">
        <h1 className="text-3xl font-bold">Our Best Lawyers</h1>
        <p className="text-[#0F0F0FCC]">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it&apos;s a
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5 px-4 my-10">
        {lawyersToShow.map((lawyer) => (
          <DisplayLawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center">
          <Button
            className="rounded-full bg-[#0EA106] text-white"
            onClick={() => setShowAll(true)}
          >
            View All Lawyers
          </Button>
        </div>
      )}
    </div>
  );
}
