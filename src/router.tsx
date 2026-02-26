import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

import { movieDetailsLoader } from "./pages/MovieDetails";
import { lazy, Suspense } from "react";
import { ErrorPage } from "./pages/ErrorPage";

const MovieDetails = lazy(() => import('./pages/MovieDetails'));
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'search', element: <Search /> },
            { 
                path: 'movie/:id', 
                element: (
                    <Suspense fallback={<div className="text-center p-10">Загрузка...</div>}>
                        <MovieDetails />
                    </Suspense>
                ),
                loader: movieDetailsLoader 
            }
        ]
    }
])