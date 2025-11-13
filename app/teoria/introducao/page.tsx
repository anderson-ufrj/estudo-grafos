'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'
import GraphSVG from '@/app/components/GraphSVG'
import PageNavigation from '@/app/components/PageNavigation'
import PrintButton from '@/app/components/PrintButton'
import ProgressTracker from '@/app/components/ProgressTracker'

export default function IntroducaoPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-700/50">
        <ModernHeader />

        <main className="container-modern px-4 py-8">
          <ProgressTracker pageId="teoria-introducao" title="Introdução aos Grafos" />

          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-green-600 hover:underline">
                Início
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-700 dark:text-gray-300">Teoria</span>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-900 dark:text-gray-100">Introdução aos Grafos</span>
            </nav>

            <h1 className="text-4xl font-bold mb-8">Introdução aos Grafos</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. O que são Grafos?</h2>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Definição</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Um grafo G é uma estrutura matemática definida por um par ordenado G = (V, E), onde:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>V:</strong> Conjunto não-vazio de vértices (ou nós)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>E:</strong> Conjunto de arestas (conexões entre vértices)
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Aplicações Práticas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">Redes Sociais</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Pessoas são vértices, amizades são arestas</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">Mapas e GPS</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Locais são vértices, estradas são arestas</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">Circuitos Elétricos</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Componentes são vértices, conexões são arestas</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">Internet</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Servidores são vértices, conexões de rede são arestas</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Tipos de Grafos</h2>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Grafo Não-Direcionado</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      As arestas não possuem direção. Se existe uma aresta entre A e B, podemos ir de A para B ou de B para A.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded">
                      <p className="font-mono text-sm">Notação: {'{u, v}'} ou uv</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Grafo Direcionado (Digrafo)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      As arestas possuem direção. Uma aresta de A para B não implica em uma aresta de B para A.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded">
                      <p className="font-mono text-sm">Notação: (u, v) ou u → v</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Grafo Ponderado</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Cada aresta possui um peso (valor) associado. Útil para representar distâncias, custos, capacidades.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded">
                      <p className="font-mono text-sm">w(u,v) = peso da aresta entre u e v</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Terminologia Básica</h2>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Conceitos Fundamentais</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-semibold text-green-600">Adjacência</dt>
                      <dd className="text-gray-700 dark:text-gray-300">Dois vértices são adjacentes se existe uma aresta entre eles</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-green-600">Incidência</dt>
                      <dd className="text-gray-700 dark:text-gray-300">Uma aresta é incidente a um vértice se o conecta a outro vértice</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-green-600">Grau de um vértice</dt>
                      <dd className="text-gray-700 dark:text-gray-300">
                        Número de arestas incidentes ao vértice
                        <div className="mt-2 bg-gray-100 dark:bg-gray-700/50 p-2 rounded">
                          <p className="font-mono text-sm">Notação: d(v) ou deg(v)</p>
                        </div>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-green-600">Laço (Loop)</dt>
                      <dd className="text-gray-700 dark:text-gray-300">Aresta que conecta um vértice a ele mesmo</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-green-600">Arestas Paralelas</dt>
                      <dd className="text-gray-700 dark:text-gray-300">Duas ou mais arestas que conectam o mesmo par de vértices</dd>
                    </div>
                  </dl>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. Propriedades Importantes</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">Teorema do Aperto de Mãos</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      A soma dos graus de todos os vértices é igual ao dobro do número de arestas.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                      <p className="font-mono text-sm">Σ d(v) = 2|E|</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">Consequência</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Em qualquer grafo, o número de vértices com grau ímpar é sempre par.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">5. Grafos Especiais</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-green-600 mb-3">Grafo Completo (K₄)</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      Todo par de vértices está conectado
                    </p>
                    <GraphSVG
                      width={250}
                      height={250}
                      nodes={[
                        { id: '1', x: 125, y: 40 },
                        { id: '2', x: 50, y: 150 },
                        { id: '3', x: 200, y: 150 },
                        { id: '4', x: 125, y: 210 }
                      ]}
                      edges={[
                        { from: '1', to: '2' },
                        { from: '1', to: '3' },
                        { from: '1', to: '4' },
                        { from: '2', to: '3' },
                        { from: '2', to: '4' },
                        { from: '3', to: '4' }
                      ]}
                    />
                    <p className="font-mono text-xs mt-3 text-center">|E| = 4(3)/2 = 6 arestas</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-green-600 mb-3">Ciclo (C₅)</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      Grafo em forma de círculo com n vértices
                    </p>
                    <GraphSVG
                      width={250}
                      height={250}
                      nodes={[
                        { id: '1', x: 125, y: 40 },
                        { id: '2', x: 220, y: 100 },
                        { id: '3', x: 180, y: 200 },
                        { id: '4', x: 70, y: 200 },
                        { id: '5', x: 30, y: 100 }
                      ]}
                      edges={[
                        { from: '1', to: '2' },
                        { from: '2', to: '3' },
                        { from: '3', to: '4' },
                        { from: '4', to: '5' },
                        { from: '5', to: '1' }
                      ]}
                    />
                    <p className="font-mono text-xs mt-3 text-center">|V| = |E| = 5</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-green-600 mb-3">Árvore</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      Grafo conexo sem ciclos
                    </p>
                    <GraphSVG
                      width={250}
                      height={250}
                      nodes={[
                        { id: '1', x: 125, y: 40 },
                        { id: '2', x: 60, y: 120 },
                        { id: '3', x: 190, y: 120 },
                        { id: '4', x: 30, y: 200 },
                        { id: '5', x: 90, y: 200 },
                        { id: '6', x: 220, y: 200 }
                      ]}
                      edges={[
                        { from: '1', to: '2' },
                        { from: '1', to: '3' },
                        { from: '2', to: '4' },
                        { from: '2', to: '5' },
                        { from: '3', to: '6' }
                      ]}
                    />
                    <p className="font-mono text-xs mt-3 text-center">|E| = |V| - 1 = 5</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-green-600 mb-3">Grafo Bipartido</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      Vértices divididos em dois conjuntos disjuntos
                    </p>
                    <GraphSVG
                      width={250}
                      height={250}
                      nodes={[
                        { id: '1', x: 60, y: 70, label: 'A' },
                        { id: '2', x: 60, y: 150, label: 'B' },
                        { id: '3', x: 190, y: 70, label: '1' },
                        { id: '4', x: 190, y: 150, label: '2' },
                        { id: '5', x: 190, y: 230, label: '3' }
                      ]}
                      edges={[
                        { from: '1', to: '3' },
                        { from: '1', to: '4' },
                        { from: '2', to: '3' },
                        { from: '2', to: '5' }
                      ]}
                    />
                    <p className="font-mono text-xs mt-3 text-center">V = V₁ ∪ V₂, V₁ ∩ V₂ = ∅</p>
                  </div>
                </div>
              </section>

              <PageNavigation
                prev={{ url: '/teoria/conjuntos', title: 'Fundamentos de Conjuntos' }}
                next={{ url: '/teoria/caminhos', title: 'Caminhos e Ciclos' }}
              />

              <div className="mt-12 flex justify-between">
                <Link href="/teoria/conjuntos" className="btn-secondary">
                  ← Anterior: Conjuntos
                </Link>
                <Link href="/teoria/caminhos" className="btn-primary">
                  Próximo: Caminhos e Ciclos →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <PrintButton />
    </>
  )
}
