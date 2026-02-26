# 🎬 Movie Hub | Кино-Хаб

A modern, responsive web application for exploring movies, built with React and TMDB API.
Современное адаптивное веб-приложение для поиска и просмотра информации о фильмах, созданное с использованием React и TMDB API.

---

## 🌍 Languages / Языки
- [English](#-english)
- [Русский](#-русский)

---

## 🇺🇸 English

### 🚀 Overview
**Movie Hub** is a feature-rich movie database explorer. It allows users to browse trending movies, search for specific titles, and view detailed information including ratings, release dates, and descriptions. The app features full bilingual support (English and Russian).

### 🛠 Tech Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7
- **Fuctional**: Zod, React Hook Form
- **API**: TMDB (The Movie Database)
- **Testing**: Vitest, React Testing Library, JSDOM

### ✨ Features
- **Trending Movies**: Discover what's popular right now.
- **Advanced Search**: Fast and reactive search with automatic state reset on language change.
- **Deep Localization**: Full RU/EN support for both UI and API data.
- **Dynamic Details**: Real-time data re-fetching when switching languages on the movie details page.
- **Robust Testing**: Comprehensive unit and integration test suite.
- **Responsive Design**: Premium look and feel on all devices.

### 📦 Getting Started
1. **Clone the repository**:
   ```bash
   git clone https://github.com/V1ADDD/react-movie-hub.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Setup**:
   Create a `.env` file in the root directory and add your TMDB API Key:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```
4. **Run development server**:
   ```bash
   npm run dev
   ```

### 🧪 Testing
Run the test suite with Vitest:
```bash
npm run test        # Run all tests
npm run coverage    # Run tests and generate coverage report
```

---

## 🇷🇺 Русский

### 🚀 Обзор
**Кино-Хаб** — это функциональное приложение для поиска фильмов. Оно позволяет просматривать популярные новинки, искать конкретные фильмы и изучать детальную информацию: рейтинги, даты выхода и описания. Приложение полностью поддерживает два языка (английский и русский).

### 🛠 Технологический стек
- **Фронтенд**: React 19, TypeScript, Vite
- **Стили**: Tailwind CSS
- **Роутинг**: React Router DOM v7
- **Функционал**: Zod, React Hook Form
- **API**: TMDB (The Movie Database)
- **Тестирование**: Vitest, React Testing Library, JSDOM

### ✨ Особенности
- **Популярные фильмы**: Узнайте, что смотрят прямо сейчас.
- **Продвинутый поиск**: Быстрый и реактивный поиск с автоматическим сбросом при смене языка.
- **Глубокая локализация**: Полная поддержка RU/EN для интерфейса и данных из API.
- **Динамические детали**: Мгновенное обновление данных при смене языка на странице фильма.
- **Надежное тестирование**: Набор модульных и интеграционных тестов.
- **Адаптивный дизайн**: Премиальный интерфейс, работающий на всех устройствах.

### 📦 Начало работы
1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/V1ADDD/react-movie-hub.git
   ```
2. **Установите зависимости**:
   ```bash
   npm install
   ```
3. **Настройка окружения**:
   Создайте файл `.env` в корневой директории и добавьте ваш ключ TMDB API:
   ```env
   VITE_TMDB_API_KEY=ваш_ключ_api
   ```
4. **Запуск сервера для разработки**:
   ```bash
   npm run dev
   ```

### 🧪 Тестирование
Запуск тестов с помощью Vitest:
```bash
npm run test        # Запустить все тесты
npm run coverage    # Запустить тесты и вывести отчет о покрытии
```
