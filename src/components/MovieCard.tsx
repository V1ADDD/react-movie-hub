import { memo } from "react";
import type { Movie } from "../types/movie";
import { Link } from "react-router-dom";

export const MovieCard = memo(({ movie }: { movie: Movie }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer hover:scale-105 transition-transform">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-fill h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="font-bold text-lg truncate">{movie.title}</h3>
                <Link to={`/movie/${movie.id}`} className="text-blue-600 mt-2 block">
                    Подробнее &rarr;
                </Link>
            </div>
        </div>
    )
})