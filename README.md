# EchoMind - Ambient Sound App

A minimalist ambient sound app designed to enhance focus and relaxation. Mix soundscapes, customize sound layers, and use focus timers for productivity.

## Features

- **Custom Sound Mixing**: Combine multiple ambient sounds (rain, forest, ocean, white noise, wind)
- **Pomodoro Timer**: Built-in focus timer with sound ambiance changes
- **System Tray Integration**: Minimize to tray and control playback from taskbar
- **Sound Presets**: Save and load custom sound combinations
- **Sleep Mode**: Gradual fade-out for relaxation
- **Lightweight**: Optimized for minimal resource usage

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Scripts

- `npm run dev` - Start Vite development server
- `npm run electron-dev` - Start app in Electron development mode
- `npm run build` - Build for production
- `npm run dist` - Build and package for distribution

### Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Desktop**: Electron
- **Audio**: Web Audio API
- **Styling**: Styled Components
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── services/      # Audio and timer services
├── types/         # TypeScript type definitions
└── utils/         # Utility functions

public/
├── electron.js    # Electron main process
├── preload.js     # Electron preload script
└── icon.png       # App icon
```

## Roadmap

- [x] Project setup and Electron configuration
- [ ] UI/UX design implementation
- [ ] Web Audio API sound engine
- [ ] System tray and background functionality
- [ ] Pomodoro timer integration
- [ ] Sound presets and customization
- [ ] Packaging and distribution
- [ ] Testing and optimization

## Development Notes

### ESLint Configuration

If you need to update the ESLint configuration for stricter type checking:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
