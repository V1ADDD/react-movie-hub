import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LanguageProvider } from './LanguageProvider';
import { useLanguage } from './LanguageContext';

// Helper component to test the hook
const TestComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="trans">{t('APP_TITLE')}</span>
      <button onClick={() => setLanguage('en')} data-testid="btn-en">
        Switch to EN
      </button>
    </div>
  );
};

describe('LanguageProvider', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders children and provides default language (ru)', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('lang')).toHaveTextContent('ru');
    // APP_TITLE for ru is 'Кино-Хаб' (from translations.ts)
    expect(screen.getByTestId('trans')).not.toBeEmptyDOMElement();
  });

  it('changes language and persists to localStorage', async () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    const btn = screen.getByTestId('btn-en');
    await act(async () => {
      btn.click();
    });

    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(window.localStorage.getItem('language')).toBe('en');
  });

  it('loads initial language from localStorage', () => {
    window.localStorage.setItem('language', 'en');
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('lang')).toHaveTextContent('en');
  });

  it('calls onLanguageChange when language changes', async () => {
    const onLanguageChange = vi.fn();
    render(
      <LanguageProvider onLanguageChange={onLanguageChange}>
        <TestComponent />
      </LanguageProvider>,
    );

    // Initial effect call
    expect(onLanguageChange).toHaveBeenCalledTimes(1);

    const btn = screen.getByTestId('btn-en');
    await act(async () => {
      btn.click();
    });

    expect(onLanguageChange).toHaveBeenCalledTimes(2);
  });
});
