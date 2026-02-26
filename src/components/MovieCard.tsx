import { memo } from 'react';
import type { Movie } from '../types/movie';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const MovieCard = memo(({ movie }: { movie: Movie }) => {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105 hover:cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-fill h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="truncate text-lg font-bold">{movie.title}</h3>
        <Link to={`/movie/${movie.id}`} className="mt-2 block text-blue-600">
          {t('MORE_DETAILS')} &rarr;
        </Link>
      </div>
    </div>
  );
});
