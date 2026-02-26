import { describe, it, expect } from 'vitest';
import { translations } from './translations';

describe('translations', () => {
  it('should have both ru and en for all keys', () => {
    Object.entries(translations).forEach(([, value]) => {
      expect(value).toHaveProperty('ru');
      expect(value).toHaveProperty('en');
      expect(typeof value.ru).toBe('string');
      expect(typeof value.en).toBe('string');
      expect(value.ru.length).toBeGreaterThan(0);
      expect(value.en.length).toBeGreaterThan(0);
    });
  });

  it('should contain essential keys', () => {
    const essentialKeys = ['APP_TITLE', 'SEARCH_NAV', 'TRENDING_TITLE', 'SEARCH_TITLE'];
    essentialKeys.forEach((key) => {
      expect(translations).toHaveProperty(key);
    });
  });
});
