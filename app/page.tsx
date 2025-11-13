'use client'

import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from './components/ModernHeader'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ModernHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              {/* Grafo decorativo - Canto superior esquerdo */}
              <circle cx="100" cy="100" r="4" fill="white"/>
              <circle cx="200" cy="80" r="4" fill="white"/>
              <circle cx="150" cy="200" r="4" fill="white"/>
              <circle cx="300" cy="150" r="4" fill="white"/>
              <circle cx="250" cy="250" r="4" fill="white"/>
              <line x1="100" y1="100" x2="200" y2="80" stroke="white" strokeWidth="1"/>
              <line x1="100" y1="100" x2="150" y2="200" stroke="white" strokeWidth="1"/>
              <line x1="200" y1="80" x2="300" y2="150" stroke="white" strokeWidth="1"/>
              <line x1="150" y1="200" x2="250" y2="250" stroke="white" strokeWidth="1"/>
              <line x1="300" y1="150" x2="250" y2="250" stroke="white" strokeWidth="1"/>
              
              {/* Grafo decorativo - Canto inferior direito */}
              <circle cx="600" cy="300" r="4" fill="white"/>
              <circle cx="700" cy="280" r="4" fill="white"/>
              <circle cx="650" cy="200" r="4" fill="white"/>
              <circle cx="550" cy="250" r="4" fill="white"/>
              <line x1="600" y1="300" x2="700" y2="280" stroke="white" strokeWidth="1"/>
              <line x1="600" y1="300" x2="650" y2="200" stroke="white" strokeWidth="1"/>
              <line x1="700" y1="280" x2="650" y2="200" stroke="white" strokeWidth="1"/>
              <line x1="600" y1="300" x2="550" y2="250" stroke="white" strokeWidth="1"/>
              <line x1="550" y1="250" x2="650" y2="200" stroke="white" strokeWidth="1"/>
              
              {/* Grafo decorativo - Centro superior */}
              <circle cx="400" cy="50" r="4" fill="white"/>
              <circle cx="450" cy="100" r="4" fill="white"/>
              <circle cx="500" cy="60" r="4" fill="white"/>
              <circle cx="420" cy="120" r="4" fill="white"/>
              <line x1="400" y1="50" x2="450" y2="100" stroke="white" strokeWidth="1"/>
              <line x1="400" y1="50" x2="500" y2="60" stroke="white" strokeWidth="1"/>
              <line x1="450" y1="100" x2="420" y2="120" stroke="white" strokeWidth="1"/>
              <line x1="500" y1="60" x2="450" y2="100" stroke="white" strokeWidth="1"/>
              
              {/* Grafo decorativo - Lateral esquerda */}
              <circle cx="50" cy="250" r="4" fill="white"/>
              <circle cx="80" cy="300" r="4" fill="white"/>
              <circle cx="120" cy="280" r="4" fill="white"/>
              <line x1="50" y1="250" x2="80" y2="300" stroke="white" strokeWidth="1"/>
              <line x1="80" y1="300" x2="120" y2="280" stroke="white" strokeWidth="1"/>
              <line x1="50" y1="250" x2="120" y2="280" stroke="white" strokeWidth="1"/>
              
              {/* Grafo decorativo - Lateral direita */}
              <circle cx="750" cy="150" r="4" fill="white"/>
              <circle cx="720" cy="100" r="4" fill="white"/>
              <circle cx="780" cy="80" r="4" fill="white"/>
              <line x1="750" y1="150" x2="720" y2="100" stroke="white" strokeWidth="1"/>
              <line x1="720" y1="100" x2="780" y2="80" stroke="white" strokeWidth="1"/>
              <line x1="750" y1="150" x2="780" y2="80" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
          
          
          <div className="container-modern px-4 relative z-10">
            <h1 className="text-5xl font-bold mb-4">
              Material de Estudo
            </h1>
            <p className="text-xl mb-2 opacity-90">
              Teoria dos Grafos - Professor Ricardo Martins
            </p>
            <p className="text-lg mb-8 opacity-80">
              Curso de Ciência da Computação
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/teoria/conjuntos" className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Começar a Estudar
              </Link>
              <Link href="/roteiro" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-all">
                Ver Roteiro de Estudo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container-modern px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Conteúdo Disponível</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-bold text-lg mb-2">Fundamentos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Conceitos básicos de conjuntos, relações e funções
                </p>
                <Link href="/teoria/conjuntos" className="text-green-600 font-medium hover:underline">
                  Acessar →
                </Link>
              </div>
              
              <div className="card">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="font-bold text-lg mb-2">Introdução aos Grafos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Definições, tipos e aplicações práticas
                </p>
                <Link href="/teoria/introducao" className="text-green-600 font-medium hover:underline">
                  Acessar →
                </Link>
              </div>
              
              <div className="card">
                <div className="text-4xl mb-4">🛤️</div>
                <h3 className="font-bold text-lg mb-2">Caminhos e Ciclos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Passeios, trilhas, conectividade
                </p>
                <Link href="/teoria/caminhos" className="text-green-600 font-medium hover:underline">
                  Acessar →
                </Link>
              </div>
              
              <div className="card">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-lg mb-2">Representação Matricial</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Matrizes de adjacência e incidência
                </p>
                <Link href="/teoria/matrizes" className="text-green-600 font-medium hover:underline">
                  Acessar →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Study Resources */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container-modern px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Recursos de Estudo</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <span className="text-2xl">📖</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Material Teórico Completo</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Resumos detalhados de todos os tópicos com exemplos práticos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <span className="text-2xl">✏️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Exercícios Resolvidos</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Soluções passo a passo para melhor compreensão
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Fórmulas Essenciais</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Todas as fórmulas importantes organizadas por tópico
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-8">
                <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-gray-100">📋 Informações da Disciplina</h3>
                <dl className="space-y-3 text-gray-900 dark:text-gray-100">
                  <div>
                    <dt className="font-semibold text-gray-700 dark:text-gray-300">Professor:</dt>
                    <dd>Prof. Ricardo Martins</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700 dark:text-gray-300">Instituição:</dt>
                    <dd>IFSULDEMINAS - Campus Muzambinho</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700 dark:text-gray-300">Curso:</dt>
                    <dd>Ciência da Computação</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700 dark:text-gray-300">Disciplina:</dt>
                    <dd>Teoria dos Grafos - Matemática Discreta</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700 dark:text-gray-300">Material elaborado por:</dt>
                    <dd>Anderson Henrique</dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <Link href="/referencias" className="btn-primary w-full text-center">
                    Acessar Material PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="container-modern px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Acesso Rápido</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/teoria/formulas" className="card text-center hover:border-green-600 transition-colors group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">🔢</span>
                <h3 className="font-semibold">Fórmulas Essenciais</h3>
              </Link>
              
              <Link href="/exercicios/todos" className="card text-center hover:border-green-600 transition-colors group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">📝</span>
                <h3 className="font-semibold">Todos os Exercícios</h3>
              </Link>
              
              <Link href="/roteiro" className="card text-center hover:border-green-600 transition-colors group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">🗺️</span>
                <h3 className="font-semibold">Roteiro de Estudo</h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container-modern px-4 text-center">
          <p className="mb-2">Material de Estudo - Teoria dos Grafos</p>
          <p className="text-sm text-gray-400 mb-4">
            Prof. Ricardo Martins - IFSULDEMINAS Campus Muzambinho
          </p>
          <p className="text-sm text-gray-400">
            Desenvolvido por Anderson Henrique • {' '}
            <a href="https://github.com/anderson-ufrj" className="hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {' • '}
            <a href="mailto:andersonhs27@gmail.com" className="hover:text-green-400 transition-colors">
              andersonhs27@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}