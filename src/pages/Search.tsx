import { useState } from 'react';
import * as z from 'zod';
import type { Movie } from '../types/movie';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MovieCard } from '../components/MovieCard';

const searchSchema = z.object({
    query: z.string().min(2, 'Введите минимум 2 символа'),
})
type SearchForm = z.infer<typeof searchSchema>;

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const Search = () => {
    const [results, setResults] = useState<Movie[]>([]);

    const { register, handleSubmit, formState: {errors} } = useForm<SearchForm>({
        resolver: zodResolver(searchSchema),
    });

    const onSubmit = async (data: SearchForm) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${data.query}&language=ru-RU`);
        const json = await res.json();
        setResults(json.results);
    };

    return (
        <div>
            <h2 className='text-3xl font-bold mb-6'>Поиск фильмов</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='mb-8 flex gap-4 items-start'>
                <div className='flex-1'>
                    <input
                        {...register('query')}
                        type='text'
                        placeholder='Например: Матрица'
                        className='w-full p-3 border rounded shadow-sm focus:outline-blue-500'
                    />
                    {errors.query && <p className='text-red-500 mt-1'>{errors.query.message}</p>}
                </div>
                <button type='submit' className='bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700'>
                    Найти
                </button>
            </form>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6'>
                {results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}