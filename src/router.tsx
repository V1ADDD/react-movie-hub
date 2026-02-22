import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";

const Home = () => <h2>Главная страница</h2>;
const Search = () => <h2>Страница поиска</h2>;
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