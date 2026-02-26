import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-red-50">
      <h1 className="text-4xl font-bold text-red-600">Упс!</h1>
      <p className="mt-4 text-xl">Что-то пошло не так.</p>
      <p className="mt-2 text-gray-500">
        {(error as { statusText?: string })?.statusText || (error as Error)?.message}
      </p>
    </div>
  );
};
