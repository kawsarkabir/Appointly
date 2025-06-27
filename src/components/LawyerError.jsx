import {
  useRouteError,
  isRouteErrorResponse,
  Link,
  useParams,
} from 'react-router';
import { Button } from './ui/button';

export default function LawyerError() {
  const error = useRouteError();
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-2">
        ⚠️ Lawyer Not Found
      </h1>

      {isRouteErrorResponse(error) && (
        <p className="text-gray-600 mb-6">
          No lawyer found with ID: <span className="font-semibold">{id}</span>
        </p>
      )}

      <Link to="/">
        <Button className="bg-[#0EA106] text-white px-4 py-2 rounded-full">
          View All Lawyer
        </Button>
      </Link>
    </div>
  );
}
