import { render, screen, act, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Search } from './Search';
import { LanguageProvider } from '../context/LanguageProvider';
import { useLanguage } from '../context/LanguageContext';

// Mock fetch
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

// Helper component to trigger language change in tests
const LanguageConsumerHelper = () => {
  const { setLanguage } = useLanguage();
  return (
    <button onClick={() => setLanguage('en')} data-testid="set-en">
      SET EN
    </button>
  );
};

describe('Search Page Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.clear();
  });

  it('resets state when language is changed via context', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        results: [{ id: 1, title: 'Matrix', poster_path: '/path.jpg' }],
      }),
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <LanguageConsumerHelper />
          <Search />
        </LanguageProvider>
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Matrix' } });

    // Find the search button (it's a submit button)
    // We use queryAllByRole and filter by type because there are other buttons (like the switcher)
    const buttons = screen.getAllByRole('button');
    const submitButton = buttons.find((btn) => btn.getAttribute('type') === 'submit');

    if (!submitButton) throw new Error('Search button not found');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Results should appear
    expect(await screen.findByText('Matrix')).toBeInTheDocument();
    expect(input).toHaveValue('Matrix');

    // Trigger language change
    await act(async () => {
      fireEvent.click(screen.getByTestId('set-en'));
    });

    // Results and input should be cleared
    expect(screen.queryByText('Matrix')).not.toBeInTheDocument();
    expect(input).toHaveValue('');
  });
});
