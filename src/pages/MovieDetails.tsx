import { useLoaderData, useNavigate, type LoaderFunctionArgs } from "react-router-dom";
import type { Movie } from "../types/movie";

export const movieDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=ru-RU`)
    
    if (!res.ok) {
        throw new Error('Фильм не найден');
    }

    return res.json();
}

const MovieDetails = () => {
    const movie = useLoaderData() as Movie;
    const navigate = useNavigate();

    return (
        <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-4'>
            <button
                onClick={() => navigate(-1)}
                className="m-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer transition"
            >← Назад</button>

            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img
                        className="h-96 w-full object-cover md:w-64"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {movie.genres.map((genre) => genre.name).join(', ')} • {movie.runtime} мин.
                    </div>
                    <h1 className="block mt-1 text-3xl leading-tight font-bold text-black">
                        {movie.title}
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Рейтинг: ⭐ {movie.vote_average.toFixed(1)}
                    </p>
                    <p className="mt-4 text-gray-600">
                        {movie.overview}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default MovieDetails;