'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface SearchResult {
  title: string
  category: string
  url: string
  excerpt: string
}

// Base de dados de conteúdo para busca
const searchDatabase: SearchResult[] = [
  // Teoria - Páginas principais
  { title: 'Fundamentos de Conjuntos', category: 'Teoria', url: '/teoria/conjuntos', excerpt: 'Conjunto potência, produto cartesiano, operações, relações, De Morgan' },
  { title: 'Introdução aos Grafos', category: 'Teoria', url: '/teoria/introducao', excerpt: 'Definição de grafos, vértices, arestas, tipos de grafos, grafo completo, bipartido' },
  { title: 'Caminhos e Ciclos', category: 'Teoria', url: '/teoria/caminhos', excerpt: 'Passeio, trilha, caminho, conectividade, teorema aperto mãos, Euler' },
  { title: 'Representação Matricial', category: 'Teoria', url: '/teoria/matrizes', excerpt: 'Matriz adjacência, matriz incidência, potências, Floyd-Warshall, DFS, BFS' },
  { title: 'Fórmulas Essenciais', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Todas fórmulas importantes, teoremas, complexidades, algoritmos' },

  // Exercícios
  { title: 'Exercícios Resolvidos - Todos', category: 'Exercícios', url: '/exercicios/todos', excerpt: 'Produto cartesiano, funções, grafos, matrizes, caminhos resolvidos' },
  { title: 'Exercícios de Conjuntos', category: 'Exercícios', url: '/exercicios/conjuntos', excerpt: 'União, interseção, diferença, produto cartesiano, conjunto potência, aplicações' },
  { title: 'Exercícios de Grafos', category: 'Exercícios', url: '/exercicios/grafos', excerpt: 'Classificação, graus, matriz adjacência, caminhos Eulerianos, Kruskal, árvore geradora' },

  // Algoritmos - busca por nome
  { title: 'Algoritmo de Prim', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Árvore geradora mínima, complexidade O(V+E log V)' },
  { title: 'Algoritmo de Kruskal', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Árvore geradora mínima, complexidade O(E log E)' },
  { title: 'Algoritmo de Dijkstra', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Menor caminho, complexidade O(V+E log V)' },
  { title: 'Floyd-Warshall', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Todos pares menores caminhos, complexidade O(V³)' },
  { title: 'BFS - Busca em Largura', category: 'Teoria', url: '/teoria/matrizes', excerpt: 'Busca por níveis, fila, complexidade O(V+E)' },
  { title: 'DFS - Busca em Profundidade', category: 'Teoria', url: '/teoria/matrizes', excerpt: 'Busca recursiva, pilha, complexidade O(V+E)' },

  // Conceitos importantes
  { title: 'Teorema do Aperto de Mãos', category: 'Teoria', url: '/teoria/caminhos', excerpt: 'Soma dos graus é o dobro das arestas' },
  { title: 'Grafo Completo', category: 'Teoria', url: '/teoria/introducao', excerpt: 'Todos vértices conectados, K4, K5, Kn' },
  { title: 'Grafo Bipartido', category: 'Teoria', url: '/teoria/introducao', excerpt: 'Dois conjuntos de vértices, arestas só entre conjuntos' },
  { title: 'Árvore', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Grafo acíclico conexo, |E| = |V| - 1' },
  { title: 'Ciclo Euleriano', category: 'Teoria', url: '/teoria/caminhos', excerpt: 'Passa por todas arestas uma vez, todos vértices grau par' },
  { title: 'Caminho Euleriano', category: 'Teoria', url: '/teoria/caminhos', excerpt: 'Exatamente 2 vértices com grau ímpar' },
  { title: 'Fórmula de Euler', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Grafos planares, V - E + F = 2' },
  { title: 'Grau de Vértice', category: 'Teoria', url: '/teoria/introducao', excerpt: 'Número de arestas incidentes, deg(v)' },
  { title: 'Grafo Planar', category: 'Teoria', url: '/teoria/formulas', excerpt: 'Pode ser desenhado sem cruzamentos, |E| ≤ 3|V| - 6' },

  // Recursos
  { title: 'Quiz Interativo', category: 'Recursos', url: '/quiz', excerpt: '20 questões sobre grafos, conjuntos, algoritmos - com 3 níveis de dificuldade' },
  { title: 'Roteiro de Estudo', category: 'Recursos', url: '/roteiro', excerpt: 'Plano de estudos semanal completo para aprender teoria dos grafos' },
  { title: 'Material de Referência', category: 'Recursos', url: '/referencias', excerpt: 'PDFs, livros e materiais complementares' },
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Atalho de teclado Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K (Mac) ou Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        document.getElementById('search-input')?.focus()
      }
      // ESC para fechar
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
        setResults([])
        ;(document.activeElement as HTMLElement)?.blur()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar teoria, exercícios... (⌘K)"
          className="w-full px-4 py-2 pl-10 pr-20 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-gray-100 transition-colors"
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