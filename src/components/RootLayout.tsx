import { Link, Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-900 p-4 text-white shadow-md">
        <div className="container mx-auto flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold hover:text-blue-300">
            🎬 Кино-Хаб
          </Link>
          <Link to="/search" className="hover:text-blue-300">
            Поиск
          </Link>
        </div>
      </header>

      <main className="container mx-auto mt-4 p-4">
        <Outlet />
      </main>
    </div>
  );
};
