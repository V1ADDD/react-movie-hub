import { MovieCard } from "../components/MovieCard";
import { useTrendingMovies } from "../hooks/useTrendingMovies"

export const Home = () => {
    const { movies, isLoading } = useTrendingMovies();

    if (isLoading) return <p className="text-center text-xl">Загрузка...</p>;

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">В тренде сегодня</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}