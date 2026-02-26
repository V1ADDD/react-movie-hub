import { useRouteError } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const ErrorPage = () => {
  const error = useRouteError();
  const { t } = useLanguage();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-red-50">
      <h1 className="text-4xl font-bold text-red-600">{t('ERROR_OOPS')}</h1>
      <p className="mt-4 text-xl">{t('ERROR_SOMETHING_WRONG')}</p>
      <p className="mt-2 text-gray-500">
        {(error as { statusText?: string })?.statusText || (error as Error)?.message}
      </p>
    </div>
  );
};
