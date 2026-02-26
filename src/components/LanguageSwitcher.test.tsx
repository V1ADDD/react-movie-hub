import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LanguageContext } from '../context/LanguageContext';
import type { Language } from '../types/language';

describe('LanguageSwitcher', () => {
  const mockSetLanguage = vi.fn();
  const mockT = vi.fn((key) => key);

  const renderSwitcher = (language: Language = 'ru') => {
    return render(
      <LanguageContext.Provider value={{ language, setLanguage: mockSetLanguage, t: mockT }}>
        <LanguageSwitcher />
      </LanguageContext.Provider>,
    );
  };

  it('renders both language buttons', () => {
    renderSwitcher();
    expect(screen.getByText('RU')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('shows active state for current language', () => {
    const { rerender } = renderSwitcher('ru');
    expect(screen.getByText('RU')).toHaveClass('bg-blue-600');
    expect(screen.getByText('EN')).toHaveClass('bg-blue-100');

    rerender(
      <LanguageContext.Provider value={{ language: 'en', setLanguage: mockSetLanguage, t: mockT }}>
        <LanguageSwitcher />
      </LanguageContext.Provider>,
    );
    expect(screen.getByText('EN')).toHaveClass('bg-blue-600');
    expect(screen.getByText('RU')).toHaveClass('bg-blue-100');
  });

  it('calls setLanguage when a button is clicked', () => {
    renderSwitcher('ru');
    fireEvent.click(screen.getByText('EN'));
    expect(mockSetLanguage).toHaveBeenCalledWith('en');

    fireEvent.click(screen.getByText('RU'));
    expect(mockSetLanguage).toHaveBeenCalledWith('ru');
  });
});
