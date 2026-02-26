import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('ru')}
        className={`cursor-pointer rounded px-3 py-1 text-sm font-medium transition-colors ${
          language === 'ru'
            ? 'bg-blue-600 text-white'
            : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`cursor-pointer rounded px-3 py-1 text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
        }`}
      >
        EN
      </button>
    </div>
  );
};
