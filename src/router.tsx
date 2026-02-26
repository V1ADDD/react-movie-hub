import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

const MovieDetails = () => <h2>Детали фильма</h2>;

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'search', element: <Search /> },
            { path: 'movie/:id', element: <MovieDetails /> }
        ]
    }
])