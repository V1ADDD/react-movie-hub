import { Link, Outlet } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const RootLayout = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-900 p-4 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold hover:text-blue-300">
              {t('APP_TITLE')}
            </Link>
            <Link to="/search" className="hover:text-blue-300">
              {t('SEARCH_NAV')}
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="container mx-auto mt-4 p-4">
        <Outlet />
      </main>
    </div>
  );
};
