'use client'

import Link from 'next/link'

export default function ModernHeader() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-modern px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Título */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Teoria dos Grafos
            </h1>
            <p className="text-sm text-gray-600">Curso de Ciência da Computação</p>
            <p className="text-xs text-gray-500">IFSULDEMINAS - Campus Muzambinho</p>
          </div>
          
          {/* Navegação */}
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Início
            </Link>
            <Link href="/teoria/conjuntos" className="hover:text-green-600 transition-colors">
              Teoria
            </Link>
            <Link href="/exercicios/todos" className="hover:text-green-600 transition-colors">
              Exercícios
            </Link>
            <Link href="/referencias" className="hover:text-green-600 transition-colors">
              Material PDF
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}