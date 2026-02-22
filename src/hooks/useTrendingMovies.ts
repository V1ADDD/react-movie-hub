import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";

export const useTrendingMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY;
        const fetchMovies = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=ru-RU`);
                const data = await res.json();
                setMovies(data.results);
            } catch (error) {
                console.error("Ошибка при загрузке:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return { movies, isLoading };
}