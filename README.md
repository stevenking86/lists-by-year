# My Lists

A React app for browsing archived yearly "top lists" (TV, movies, music, books, podcasts, and more) from multiple authors.

The UI reads list data from `src/data.json` and lets you filter by:

- year
- author
- category

Matching list entries are rendered as cards with ranked items.

## Current Features

- Single-page archive view
- Dropdown filters for year, author, and category
- Data-driven rendering from local JSON
- Responsive card layout and custom styling

## Project Structure

- `src/lists.jsx`: main list/filter UI
- `src/data.json`: normalized list data used by the app
- `src/raw/` and `src/raw_lists.txt`: raw source text used to build/maintain `data.json`

## Requirements

- Node.js 18+ (recommended)
- npm

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000).

## Other Scripts

### Run tests

```bash
npm test
```

Note: the default starter test in `src/App.test.js` currently checks for "learn react" text and fails against the current UI until updated.

### Build for production

```bash
npm run build
```

Build output is written to `build/`.
