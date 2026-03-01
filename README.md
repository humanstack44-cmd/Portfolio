# AI Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and powered by the Gemini API.

## Features

- **AI Assistant**: A built-in chatbot powered by Google's Gemini API to answer questions about your experience.
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop.
- **Modern Tech Stack**: Built with React 19, Vite, and Tailwind CSS v4.
- **Animations**: Smooth transitions and interactions using Motion.

## Deployment

### Netlify

This project is configured for easy deployment on Netlify.

1.  **Push to GitHub**: Push this repository to your GitHub account.
2.  **New Site from Git**: Log in to Netlify and select "New site from Git".
3.  **Select Repository**: Choose your repository.
4.  **Build Settings**: Netlify should automatically detect the settings from `netlify.toml`:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
5.  **Environment Variables**:
    -   Go to **Site settings > Build & deploy > Environment**.
    -   Add `GEMINI_API_KEY` with your API key.

### GitHub Pages

To deploy to GitHub Pages, you may need to adjust the `base` path in `vite.config.ts` if not using a custom domain.

## Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Build for production:
    ```bash
    npm run build
    ```
