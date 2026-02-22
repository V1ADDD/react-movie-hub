import { Link, Outlet } from "react-router-dom"

export const RootLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-blue-900 text-white p-4 shadow-md">
                <div className="container mx-auto flex gap-4 items-center">
                    <Link to="/" className="text-2xl font-bold hover:text-blue-300">🎬 Кино-Хаб</Link>
                    <Link to="/search" className="hover:text-blue-300">Поиск</Link>
                </div>
            </header>

            <main className="container mx-auto p-4 mt-4">
                <Outlet />
            </main>
        </div>
    );
};