# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive educational web application for studying Graph Theory (Teoria dos Grafos), developed for students at IFSULDEMINAS - Campus Muzambinho. The application is built with Next.js 14 using the App Router architecture and provides theory content, solved exercises, and study resources.

**Important**: This project uses **Portuguese commit messages** following Brazilian conventions, as specified in CONTRIBUTING.md. All commit messages must be written in Portuguese (e.g., "feat: adiciona nova página", not "feat: add new page").

## Development Commands

### Essential Commands
```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Build and export static files (for GitHub Pages)
npm run export
```

### Testing Individual Changes
- Next.js has fast refresh enabled - save files and changes appear immediately in browser
- For production testing: `npm run build && npm run start`

## Architecture Overview

### Next.js 14 App Router Structure
The project uses the modern App Router (not Pages Router):
- `app/` - Contains all routes and pages using file-system routing
- `app/layout.tsx` - Root layout with metadata and global structure
- `app/page.tsx` - Home page (client component with 'use client')
- `app/globals.css` - Global styles including Tailwind utilities

### Route Organization
Routes are organized by content type within `app/`:
- `app/teoria/` - Theory pages (conjuntos, introducao, caminhos, matrizes, formulas)
- `app/exercicios/` - Exercise pages (all exercises and categories)
- `app/referencias/` - Reference materials (PDFs)
- `app/components/` - Shared components (Header, ModernHeader, Navigation)

### Styling Architecture
- **Tailwind CSS** as primary styling system
- Custom configuration in `tailwind.config.ts`:
  - Extended fonts: Inter (sans) and JetBrains Mono (mono)
  - Typography plugin configured for content styling
  - Custom container class: `container-modern`
  - Custom card styles: `card` and `btn-primary` classes
- Print-optimized styles in `globals.css` using `@media print`
- Color scheme: Green/Emerald theme (`from-green-600 to-emerald-700`)

### Component Patterns
- **ModernHeader**: Main site header used on pages (not old Header component)
- **Navigation**: Quick navigation component with theory/exercise links
- Most pages are React Server Components (default in App Router)
- Client components explicitly marked with `'use client'` directive (e.g., `page.tsx`)

## Content Structure

### Theory Pages (`app/teoria/`)
Each theory page follows this pattern:
- Page file: `page.tsx` inside topic directory (e.g., `app/teoria/conjuntos/page.tsx`)
- Structured sections with headings, definitions, formulas, and examples
- Consistent formatting with Tailwind typography classes

### Exercise Pages (`app/exercicios/`)
- Organized by topic or combined in `todos/`
- Include step-by-step solutions
- Use consistent problem-solution formatting

### Adding New Content
1. Create directory under `app/teoria/` or `app/exercicios/`
2. Add `page.tsx` file with Next.js page component
3. Update Navigation component (`app/components/Navigation.tsx`) to include link
4. Update home page (`app/page.tsx`) if it's a major section

## Deployment

### GitHub Pages (Configured)
- Automatic deployment via GitHub Actions (`.github/workflows/deploy.yml`)
- Triggers on push to `main` branch
- Uses `npm run build` to generate static export in `out/` directory
- **Important**: `next.config.js` has `images.unoptimized: true` for static export compatibility

### Vercel (Alternative)
- Connect GitHub repository to Vercel
- Automatic deployments on push
- No special configuration needed (Next.js auto-detected)

## TypeScript Configuration

Path aliases configured in `tsconfig.json`:
- `@/*` maps to project root
- Example: `import Component from '@/app/components/Component'`

Compiler settings:
- Target: ES2017
- Strict mode enabled
- Next.js plugin integrated for type checking

## Commit Conventions (CRITICAL)

**This project uses Portuguese commit messages** - do NOT use English commits:

### Correct Format
```
<tipo>: <descrição>
```

### Commit Types (Portuguese)
- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: alterações na documentação
- `style`: formatação (não afeta lógica)
- `refactor`: refatoração de código
- `test`: adição ou correção de testes
- `chore`: tarefas de build, configuração

### Examples
✅ Correct:
- `feat: adiciona página de matrizes de adjacência`
- `fix: corrige erro de sintaxe nos componentes`
- `docs: atualiza README com instruções de deploy`

❌ Wrong:
- `feat: add new page` (English - never use)
- `Added new page` (No type prefix)
- `feat: Adiciona página` (Capitalized - should be lowercase)

### Additional Commit Rules
- Use imperative mood: "adiciona" not "adicionado" or "adicionando"
- Lowercase first letter
- No period at end
- Maximum 50 characters for summary
- Refer to `.gitmessage` template for format reminder

## Design System

### Colors
- Primary: Green/Emerald (`bg-green-600`, `text-emerald-700`)
- Background: Gray shades (`bg-gray-50`, `bg-gray-100`)
- Text: Default black, gray variations for secondary

### Typography
- Headings: Bold, varying sizes (`text-xl`, `text-2xl`, `text-3xl`)
- Body: Default sans-serif (Inter)
- Code/Formulas: Mono font (JetBrains Mono)

### Responsive Breakpoints
- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Grid layouts: `grid md:grid-cols-2 lg:grid-cols-4`

## Print Optimization

The application includes print-optimized styles in `globals.css`:
- Black and white color scheme for printing
- Removes interactive elements (buttons, links appear as text)
- Optimized spacing and margins
- Page break controls for better pagination

## Navigation Structure

The main navigation links (in Navigation.tsx and home page):
- **Teoria**: Fundamentos de Conjuntos, Introdução aos Grafos, Caminhos e Ciclos, Representação Matricial, Fórmulas Essenciais
- **Exercícios**: Exercícios de Conjuntos, Exercícios de Grafos, Todos os Exercícios
- **Recursos**: Roteiro Completo de Estudo, Material de Referência (PDFs)

When adding new pages, update these navigation points for discoverability.

## Known Patterns

### Page Component Structure
Most theory/exercise pages follow:
```tsx
export default function PageName() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ModernHeader />
      <main className="container-modern px-4 py-8">
        {/* Content sections */}
      </main>
    </div>
  )
}
```

### Section Formatting
```tsx
<section className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Section Title</h2>
  <p className="mb-4">Content...</p>
</section>
```

### Formula Boxes
Use highlighted boxes for important formulas:
```tsx
<div className="bg-green-50 border-l-4 border-green-600 p-4 my-4">
  <strong>Formula:</strong> ...
</div>
```