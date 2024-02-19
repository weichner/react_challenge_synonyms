# Synonym Finder

This is a simple React application that uses the Datamuse API to find synonyms for a given word.

## Features

- Fetch synonyms for a given word
- Click on a synonym to fetch synonyms for that word
- Display a loading spinner while fetching data
- Display a message when no synonyms are found

## How to Run

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser

## Project Structure

- `App.tsx`: This is the main component of the application. It handles the form submission, fetches the synonyms, and manages the state.
- `fetchSynonyms.ts`: This module exports the `fetchSynonyms` function, which is used to fetch synonyms from the Datamuse API.

## Future Improvements

- Add error handling for the fetch operation
- Improve the UI/UX
- Add more features, like antonyms, rhymes, etc.