import DetailsLawyer from '@/components/DetailsLawyer';
import Blogs from '@/pages/Blogs';
import Bookings from '@/pages/Bookings';
import Contact from '@/pages/Contact';
import Error404 from '@/pages/Error404';
import Home from '@/pages/Home';
import Root from '@/root/Root';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/lawyer/:id',
        element: <DetailsLawyer />,
        loader: async ({ params }) => {
          const res = await fetch('/lawyers.json');
          const data = await res.json();
          const lawyer = data.find((item) => item.id === params.id);
          if (!lawyer) {
            throw new Response('Not Found', { status: 404 });
          }
          return lawyer;
        },
      },
      {
        path: '/bookings',
        element: <Bookings />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
