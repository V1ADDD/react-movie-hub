import { useState } from 'react';
import * as z from 'zod';
import type { Movie } from '../types/movie';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MovieCard } from '../components/MovieCard';

const searchSchema = z.object({
  query: z.string().min(2, 'Введите минимум 2 символа'),
});
type SearchForm = z.infer<typeof searchSchema>;

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const Search = () => {
  const [results, setResults] = useState<Movie[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = async (data: SearchForm) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${data.query}&language=ru-RU`,
    );
    const json = await res.json();
    setResults(json.results);
  };

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">Поиск фильмов</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8 flex items-start gap-4">
        <div className="flex-1">
          <input
            {...register('query')}
            type="text"
            placeholder="Например: Матрица"
            className="w-full rounded border p-3 shadow-sm focus:outline-blue-500"
          />
          {errors.query && <p className="mt-1 text-red-500">{errors.query.message}</p>}
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700"
        >
          Найти
        </button>
      </form>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
