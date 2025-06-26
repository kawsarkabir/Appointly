import Banner from '@/components/Banner';
import LawyerCard from '@/components/LawyerCard';
import SuccessCard from '@/components/SuccessCard';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home - Appointly';
  }, []);
  return (
    <div className="container mx-auto p-4">
      <Banner />
      <LawyerCard />
      <SuccessCard />
    </div>
  );
}
