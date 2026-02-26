import { useEffect, useState } from 'react';
import type { Movie } from '../types/movie';
import { useLanguage } from '../context/LanguageContext';

export const useTrendingMovies = () => {
  const { language } = useLanguage();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY;
    const fetchMovies = async () => {
      try {
        const langParam = language === 'ru' ? 'ru-RU' : 'en-US';
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=${langParam}`,
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Ошибка при загрузке:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [language]);

  return { movies, isLoading };
};
