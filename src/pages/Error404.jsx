import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa';

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <h1 className="text-[8rem] font-extrabold text-[#FF5A5F] leading-none">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you&apos;re looking for might have been removed or does not
        exist anymore.
      </p>
      <Link to="/">
        <Button className="bg-[#0EA106] hover:bg-[#0c8f05] text-white gap-2">
          <FaArrowLeft /> Back to Homepage
        </Button>
      </Link>
    </div>
  );
}
