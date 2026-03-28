# iMBA Strategic Innovations

A study companion web app for the **Strategic Innovation** course in the iMBA program (University of Illinois). Browse lecture notes, look up key terms, and test your knowledge with quizzes.

## Features

- **Lecture Notes** -- organized by module with collapsible sections, key-point highlights, and interactive visuals (S-Curve explorer, Adoption Bell Curve, etc.)
- **Glossary** -- searchable list of course terms with definitions, grouped by module
- **Quiz** -- multiple-choice questions with difficulty levels (easy / medium / hard), score tracking, and answer explanations
- **Dark / Light Theme** -- toggle between themes; preference is persisted

## Tech Stack

- React 19, Vite 8
- Tailwind CSS 4
- React Router 7
- Recharts (interactive charts)
- Lucide React (icons)
- Firebase Hosting (deployment)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The app is configured for Firebase Hosting. The production build outputs to `dist/`.

```bash
npm run build
firebase deploy
```

## Project Structure

```
src/
  components/     # Layout, InteractiveVisuals
  context/        # ThemeContext (dark/light mode)
  data/           # lectures, glossary, quiz question banks
  pages/          # HomePage, LecturePage, GlossaryPage, QuizPage
  App.jsx         # Router setup
  main.jsx        # Entry point
```
