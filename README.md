# Budget App

Budget App is a small React budget tracker for recording income and expenses and viewing the running balance in real time.

## Current Functionality

- Add income and expense transactions from a single form.
- Keep separate transaction lists for income and expenses.
- Recalculate total budget, total income, and total expenses immediately after each submission.
- Show a simple, single-page dashboard with a summary header and transaction lists.

## Tech Stack

- React 19
- Vite 7
- Vitest and Testing Library
- ESLint

## Prerequisites

Use Node.js 24 LTS. This repository pins `24.15.0` in `.nvmrc`, and `package.json` requires `>=24 <25`.

## Getting Started

```sh
nvm use
npm ci
```

Start the development server:

```sh
npm run dev
```

The Vite dev server opens automatically at [http://localhost:3000](http://localhost:3000).

## Scripts

`npm run dev`

Starts the Vite development server on port 3000.

`npm test`

Runs the Vitest suite in watch mode.

`npm test -- --run`

Runs the test suite once and exits.

`npm run test:ui`

Starts the Vitest UI.

`npm run test:coverage`

Generates a coverage report.

`npm run lint`

Lints the source files in `src`.

`npm run lint:fix`

Lints the source files in `src` and applies safe automatic fixes.

`npm run build`

Builds the production bundle into `dist`.

`npm run preview`

Serves the production build locally for verification.

## Testing and Validation

The project currently includes a basic render test for the root app component.

Validated commands:

- `npm test -- --run`
- `npm run lint`
- `npm run build`

## Current Limitations

- Transactions are stored only in component state and are lost on refresh.
- The budget heading currently hardcodes the month as `November`.
- The form does not prevent empty or zero-value submissions beyond native input behavior.
- There is only minimal automated test coverage at the moment.

## Project Structure

```text
src/
	App.jsx
	App.css
	index.jsx
	index.css
	Components/
		addTransaction.jsx
		ListTransactions.jsx
		totalBudget.jsx
		Transaction.jsx
```
