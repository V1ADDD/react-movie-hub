import type { LoaderFunctionArgs } from 'react-router-dom';

export const movieDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=ru-RU`,
  );

  if (!res.ok) {
    throw new Error('Фильм не найден');
  }

  return res.json();
};
