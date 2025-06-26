import Banner from '@/components/Banner';
import LawyerCard from '@/components/LawyerCard';
import SuccessCard from '@/components/SuccessCard';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Banner />
      <LawyerCard />
      <SuccessCard />
    </div>
  );
}
