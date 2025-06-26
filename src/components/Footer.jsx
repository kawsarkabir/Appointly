import { asset } from '@/assets/assets';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <div className="bg-black text-white p-16  space-y-3">
      <div className="flex items-center justify-center">
        <img src={asset.logo_footer} alt="" className="w-8" />
        <h1 className="font-bold text-xl">Appointly</h1>
      </div>
      <ul className="flex items-center flex-wrap justify-center gap-5">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'bookings'}>My Bookings</Link>
        </li>
        <li>
          <Link to={'/blogs'}>Blogs</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact Us</Link>
        </li>
      </ul>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
