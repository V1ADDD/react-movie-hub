import { MovieCard } from '../components/MovieCard';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { movies, isLoading } = useTrendingMovies();
  const { t } = useLanguage();

  if (isLoading) return <p className="text-center text-xl">{t('LOADING')}</p>;

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">{t('TRENDING_TITLE')}</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
