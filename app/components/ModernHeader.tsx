'use client'

import Link from 'next/link'
import { useTheme } from '@/app/context/ThemeContext'
import SearchBar from './SearchBar'

export default function ModernHeader() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container-modern px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Título */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Teoria dos Grafos
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Curso de Ciência da Computação</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">IFSULDEMINAS - Campus Muzambinho</p>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Navegação */}
          <nav className="flex items-center gap-6 text-sm flex-shrink-0">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Início
            </Link>
            <Link href="/teoria/conjuntos" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Teoria
            </Link>
            <Link href="/exercicios/todos" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Exercícios
            </Link>
            <Link href="/referencias" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Material PDF
            </Link>

            {/* Toggle Dark Mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle dark mode"
              title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}