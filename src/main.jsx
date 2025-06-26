import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes';
import LoadingSpinner from './components/LoadingSpinner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
