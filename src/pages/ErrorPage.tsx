import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <h1 className="text-4xl font-bold text-red-600">Упс!</h1>
      <p className="text-xl mt-4">Что-то пошло не так.</p>
      <p className="text-gray-500 mt-2">
        { (error as { statusText?: string })?.statusText || (error as Error)?.message }
      </p>
    </div>
  );
};