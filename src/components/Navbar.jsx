import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { asset } from '@/assets/assets';
import navLinks from '@/utils/navLinks';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="container mx-auto px-4">
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-transform duration-300 ${
          openMenu ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
        onClick={toggleMenu}
      >
        <div
          className="w-[60vw] h-full bg-[#224706] p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/" className="flex items-center gap-3 mb-8">
            <img src={asset.Logo} alt="logo" className="w-10" />
            <h1 className="text-white text-xl font-bold">Appointly</h1>
          </Link>

          <ul className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
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
            <li>
              <Link to="/login">
                <button className="mt-6 w-full bg-[#0ea106] text-white font-semibold px-4 py-2 rounded-full shadow hover:shadow-none">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className=" sticky top-0 z-50">
        <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={asset.Logo} alt="logo" className="w-8" />
            <h1 className="text-black text-xl font-bold">Appointly</h1>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-lg font-semibold hover:text-[#0ea106] ${
                      isActive ? 'text-[#0ea106] underline' : 'text-black'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link to="/login">
              <button className="bg-[#0ea106] text-[#f1f1f1] font-medium px-6 py-2 rounded-full border border-black shadow-[0_4px_0_0_#3f700f] hover:shadow-none transition cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-white bg-gradient-to-r from-[#0ea106] to-[#3f700f] p-2 rounded"
            onClick={toggleMenu}
          >
            {openMenu ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>
    </div>
  );
}
