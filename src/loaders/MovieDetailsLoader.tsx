import type { LoaderFunctionArgs } from 'react-router-dom';

export const movieDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const language = localStorage.getItem('language') || 'ru';
  const langParam = language === 'ru' ? 'ru-RU' : 'en-US';

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=${langParam}`,
  );

  if (!res.ok) {
    throw new Error(language === 'ru' ? 'Фильм не найден' : 'Movie not found');
  }

  return res.json();
};
