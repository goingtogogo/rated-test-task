# Rated Test Task

This Next.js application fetches and displays cryptocurrency exchange data from the CoinGecko API in a paginated table format. The data is server-side rendered (SSR)

## Live Demo

Check out the [live demo](https://rated-test-task.vercel.app/) deployed on Vercel🤖

## How to Run

To run the app locally:

```sh
git clone https://github.com/goingtogogo/rated-test-task.git
cd rated
npm i
npm run dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Server-side rendering (SSR) with Next.js 
- Data fetching and caching using [swr](https://swr.vercel.app/) library, which also includes automatic request retries on errors
- Table rendering with React-table, a powerful headless UI library that provides rapid scalability
- Styled using Styled Components inspired by Rated's color palette and styling🍬
- Server-side pagination controls for the table, displaying 15 exchanges per page
- Proper routing using Next.js for paginated data
- Error handling for API fetch failures, including handling of API rate limiting (429 errors)
- Ensured mobile-friendly design, with basic styles added to enhance mobile device viewing
- Basic Jest tests included

## Technologies Used

- Next.js
- swr 
- React-table
- Styled Components
- Jest and React-Testing-Library

## Screenshots

todo