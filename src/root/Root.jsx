import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';
import Navbar from '@/components/Navbar';
import { Outlet, useNavigation } from 'react-router';

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      {navigation.state === 'loading' && <LoadingSpinner />}
      <Outlet />
      <Footer />
    </>
  );
}
