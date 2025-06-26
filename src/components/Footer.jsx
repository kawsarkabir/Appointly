import { asset } from '@/assets/assets';
import { Link, NavLink } from 'react-router';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';
import navLinks from '@/utils/navLinks';

export default function Footer() {
  return (
    <div className="bg-black text-white p-16  space-y-3">
      <div className="flex items-center justify-center">
        <img src={asset.logo_footer} alt="" className="w-8" />
        <h1 className="font-bold text-xl">Appointly</h1>
      </div>
      <ul className="flex items-center flex-wrap justify-center gap-5">
        {navLinks.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-[#0ea106] ${
                  isActive ? 'text-[#0ea106] underline' : 'text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 justify-center mt-4">
        <Link
          to="https://facebook.com/devkawsarkabir"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#1877F2] hover:text-white transition"
        >
          <FaFacebookF />
        </Link>
        <Link
          to="https://x.com/devkawsarkabir"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white transition"
        >
          <FaXTwitter />
        </Link>
        <Link
          to="https://linkedin.com/kawsarkabir"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#0077B5] hover:text-white transition"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to="https://youtube.com/@kawsarkabir"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#FF0000] hover:text-white transition"
        >
          <FaYoutube />
        </Link>
      </div>
    </div>
  );
}
