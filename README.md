# Traffic Light App (TypeScript)

An interactive traffic light simulator built with TypeScript, Next.js, React, Gulp, and Sass.

## Tech Stack

- **TypeScript** - Type-safe development
- **Next.js 14** - React framework
- **React 18** - UI library
- **Gulp** - Task automation for Sass compilation
- **Sass/SCSS** - CSS preprocessing (modern, warning-free)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Build styles with Gulp
```bash
npm run gulp
```

### 3. Start development server
```bash
npm run dev
```

### 4. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types
- `npm run gulp` - Compile Sass once
- `npm run watch` - Watch Sass files for changes

## Features

- ✅ Full TypeScript support with type safety
- ✅ Modern Sass without deprecation warnings
- ✅ Automatic light transitions (20-second cycle)
- ✅ Smooth animations and transitions
- ✅ Real-time countdown timer
- ✅ Visual progress bar
- ✅ Responsive design
- ✅ Clean component architecture

## Light Cycle

- **Red Light**: 8.5 seconds
- **Yellow Light**: 3 seconds
- **Green Light**: 8.5 seconds
- **Total Cycle**: 20 seconds

## Project Structure

```
traffic-light-app/
├── src/
│   ├── components/      # React components
│   ├── styles/          # SCSS source files
│   └── types/           # TypeScript type definitions
├── pages/               # Next.js pages
├── public/
│   └── css/            # Compiled CSS (generated)
├── tsconfig.json        # TypeScript configuration
└── gulpfile.js         # Gulp task configuration
```

## Sass Updates

This project uses modern Sass without deprecated features:
- CSS custom properties instead of Sass variables in output
- Modern `color-mix()` function instead of deprecated `rgba()`
- Clean component imports
- No deprecation warnings!

## Type Safety

The project uses TypeScript for full type safety:
- Custom types for light colors and durations
- Typed React components and hooks
- Type checking with `npm run type-check`

## Development Workflow

1. Edit TypeScript files in `src/components/`
2. Modify SCSS in `src/styles/` → Gulp compiles to `public/css/`
3. Add type definitions in `src/types/`
4. Next.js hot-reloads your changes automatically

## Learn More

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Sass Documentation](https://sass-lang.com/documentation/)
