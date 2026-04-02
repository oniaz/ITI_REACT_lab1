# Lab 1 - Product List UI

A small React + Vite project that renders a product gallery of decorative vases. Each product is shown inside a reusable card component and includes a button with a click action.

## ITI ReactJS Course

This project is part of the ITI ReactJS course. It is Lab 1, and the items below are the task requirements for the assignment.

## Project: Product List UI

### Requirements

- Display list of products
- Each product in a Card component
- Pass props (title, price, image)
- Render list using .map()
- Add button click (show alert action)

## Features

- Displays a list of products on the page
- Uses a reusable `Card` component for each product
- Passes `title`, `price`, and `image` as props
- Renders the product list with `.map()`
- Includes a button that shows an alert when clicked

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- ESLint

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Install Dependencies

```bash
npm install
```

### Run the App Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Deployment

This project is configured for GitHub Pages deployment.

```bash
npm run deploy
```

Live demo: https://oniaz.github.io/ITI_REACT_lab1/

## Project Structure

```text
src/
	App.jsx
	main.jsx
	index.css
	components/
		Button.jsx
		Card.jsx
	assets/
		images/
```

## Notes

- The product data is defined in `src/App.jsx`.
- Images are imported locally from `src/assets/images`.
- The button action currently shows an alert for the selected item number.
- Tailwind is loaded through `src/index.css` and used throughout the app.
