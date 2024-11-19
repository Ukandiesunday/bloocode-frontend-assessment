## Movie Library Application - README

# Project Overview

This is a responsive and dynamic Movie Library assessment Application built using Next.js, TypeScript, and Tailwind CSS. The application fetches popular movie data from The Movie Database (TMDb) API and provides features such as viewing popular movies, searching for movies, detailed movie pages, and managing a list of favorite movies.

# How to Set Up and Run the Application

### Clone the Repository

Clone the project from the repository to your local machine

git clone <https://github.com/Ukandiesunday/bloocode-frontend-assessment.git>
cd bloocode-assessment

### Install Dependencies

Install all the required packages:
npm install

### Set Up Environment Variables

Create a .env.local file in the root directory.
Add the TMDb API key and BASE_URL to the file:
.env

NEXT_PUBLIC_TMDB_KEY=248cf12f3ae959fc22c1703ea53caa66
NEXT_PUBLIC_BASEURL=https://api.themoviedb.org/3/movie

Run the Application
Start the development server:npm run dev

The app will run on http://localhost:3000.

# Design Choices

Framework: Next.js

Reason: Next.js offers server-side rendering (SSR) and static site generation (SSG), which improve the application's performance and SEO. The built-in routing system simplifies the management of pages like the homepage, movie details page, and favorites page.

## Styling: Tailwind CSS

Reason: Tailwind CSS enables rapid development of responsive and consistent designs. It helps me easily customize breakpoints and styling rules without writing custom CSS.

## TypeScript

Reason: TypeScript ensures type safety and improves the developer experience by preventing runtime type errors. Custom types used like MovieType and FavoritesContextType ensure robust data handling throughout the app.

## State Management: React Context API

Reason: The Context API provides a simple and effective way to manage global state (e.g., favorites list) without too much prob drilling, preventing rerendering.

## LocalStorage

Reason: Used for persisting user favorites to ensure the state remains intact across page reloads.

## API: The Movie Database (TMDb)

Reason: TMDb for the API

## Key Features

Homepage: Displays popular movies with search functionality.
Movie Details Page: Shows detailed information for each movie.
Favorites: Allows users to add and manage their favorite movies, with data persistence using LocalStorage.
Responsive Design: Optimized for mobile, tablet, and desktop.
