import { useState, type ReactNode, useEffect } from 'react';
import { translations } from '../i18n/translations';
import type { Language } from '../types/language';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({
  children,
  onLanguageChange,
}: {
  children: ReactNode;
  onLanguageChange?: () => void;
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ru';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    onLanguageChange?.();
  }, [language, onLanguageChange]);

  const t = (key: string) => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) return key;
    return translation[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
