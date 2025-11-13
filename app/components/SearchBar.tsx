'use client'

import { useState } from 'react'
import Link from 'next/link'

interface SearchResult {
  title: string
  category: string
  url: string
  excerpt: string
}

// Base de dados de conteúdo para busca
const searchDatabase: SearchResult[] = [
  // Teoria
  { title: 'Fundamentos de Conjuntos', category: 'Teoria', url: '/teoria/conjuntos', excerpt: 'Conjunto potência, produto cartesiano, operações, relações' },
  { title: 'Introdução aos Grafos', category: 'Teoria', url: '/teoria/introducao', excerpt: 'Definição de grafos, vértices, arestas, tipos de grafos' },
  { title: 'Caminhos e Ciclos', category: 'Teoria', url: '/teoria/caminhos', excerpt: 'Passeio, trilha, caminho, conectividade, teorema aperto mãos' },
  { title: 'Representação Matricial', category: 'Teoria', url: '/teoria/matrizes', excerpt: 'Matriz adjacência, matriz incidência, potências' },
  { title: 'Fórmulas Essenciais', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Todas fórmulas importantes, teoremas, complexidades' },
  // Exercícios
  { title: 'Exercícios Resolvidos', category: 'Exercícios', url: '/exercicios/todos', excerpt: 'Produto cartesiano, funções, grafos, matrizes, caminhos' },
  // Keywords extras para melhorar busca
  { title: 'Teorema do Aperto de Mãos', category: 'Teoria', url: '/teoria/caminhos', excerpt: 'Soma graus vértices igual dobro número arestas' },
  { title: 'Grafo Completo', category: 'Teoria', url: '/teoria/introducao', excerpt: 'K4 todos vértices conectados' },
  { title: 'Ciclo Euleriano', category: 'Teoria', url: '/teoria/caminhos', excerpt: 'Passa todas arestas exatamente uma vez' },
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)

    if (searchQuery.trim().length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }

    const lowerQuery = searchQuery.toLowerCase()
    const filtered = searchDatabase.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.excerpt.toLowerCase().includes(lowerQuery)
    )

    setResults(filtered)
    setIsOpen(filtered.length > 0)
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar teoria, exercícios..."
          className="w-full px-4 py-2 pl-10 pr-4 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-gray-100 transition-colors"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <Link
              key={index}
              href={result.url}
              onClick={() => {
                setIsOpen(false)
                setQuery('')
              }}
              className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                    {result.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {result.excerpt}
                  </p>
                </div>
                <span className="ml-3 px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded">
                  {result.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && results.length === 0 && query.trim().length >= 2 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Nenhum resultado encontrado para "{query}"
          </p>
        </div>
      )}
    </div>
  )
}