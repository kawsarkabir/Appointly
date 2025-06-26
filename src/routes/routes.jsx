import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const Root = lazy(() => import('@/root/Root'));
const Error404 = lazy(() => import('@/pages/Error404'));
const Home = lazy(() => import('@/pages/Home'));
const Blogs = lazy(() => import('@/pages/Blogs'));
const Bookings = lazy(() => import('@/pages/Bookings'));
const Contact = lazy(() => import('@/pages/Contact'));
const DetailsLawyer = lazy(() => import('@/components/DetailsLawyer'));
const Login = lazy(() => import('@/pages/Login'));

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
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
