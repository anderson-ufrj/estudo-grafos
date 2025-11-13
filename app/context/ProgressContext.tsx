'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ProgressContextType {
  completedPages: string[]
  togglePage: (pageId: string) => void
  isCompleted: (pageId: string) => boolean
  progress: number
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

const STORAGE_KEY = 'estudo-grafos-progress'

// Lista de todas as páginas rastreáveis
const ALL_PAGES = [
  'teoria-conjuntos',
  'teoria-introducao',
  'teoria-caminhos',
  'teoria-matrizes',
  'teoria-formulas',
  'exercicios-todos'
]

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedPages, setCompletedPages] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Carregar progresso do localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          setCompletedPages(JSON.parse(saved))
        } catch (e) {
          console.error('Erro ao carregar progresso:', e)
        }
      }
    }
  }, [])

  useEffect(() => {
    // Salvar progresso no localStorage
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedPages))
    }
  }, [completedPages, mounted])

  const togglePage = (pageId: string) => {
    setCompletedPages(prev =>
      prev.includes(pageId)
        ? prev.filter(id => id !== pageId)
        : [...prev, pageId]
    )
  }

  const isCompleted = (pageId: string) => {
    return completedPages.includes(pageId)
  }

  const progress = Math.round((completedPages.length / ALL_PAGES.length) * 100)

  return (
    <ProgressContext.Provider value={{ completedPages, togglePage, isCompleted, progress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
