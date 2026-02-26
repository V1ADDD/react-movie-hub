import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Movie } from '../types/movie';
import { useLanguage } from '../context/LanguageContext';

const MovieDetails = () => {
  const movie = useLoaderData() as Movie;
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
      <button
        onClick={() => navigate(-1)}
        className="m-4 cursor-pointer rounded bg-gray-200 px-4 py-2 transition hover:bg-gray-300"
      >
        ← {t('GO_BACK')}
      </button>

      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-96 w-full object-cover md:w-64"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {movie.genres.map((genre) => genre.name).join(', ')} • {movie.runtime} {t('MINUTES')}
          </div>
          <h1 className="mt-1 block text-3xl leading-tight font-bold text-black">{movie.title}</h1>
          <p className="mt-2 text-gray-500">
            {t('RATING')}: ⭐ {movie.vote_average.toFixed(1)}
          </p>
          <p className="mt-4 text-gray-600">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
