import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { LanguageProvider } from './context/LanguageProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider onLanguageChange={() => router.revalidate()}>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
