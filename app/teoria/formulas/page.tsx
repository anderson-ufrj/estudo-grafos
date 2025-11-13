'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'
import PageNavigation from '@/app/components/PageNavigation'
import PrintButton from '@/app/components/PrintButton'
import ProgressTracker from '@/app/components/ProgressTracker'

export default function FormulasPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ModernHeader />

        <main className="container-modern px-4 py-8">
          <div className="max-w-5xl mx-auto">
          <ProgressTracker pageId="teoria-formulas" title="Fórmulas Essenciais" />
            <nav className="mb-8">
              <Link href="/" className="text-green-600 hover:underline">
                Início
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-700 dark:text-gray-300">Teoria</span>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-900 dark:text-gray-100">Fórmulas Essenciais</span>
            </nav>

            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Fórmulas Essenciais</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Todas as fórmulas importantes de Teoria dos Grafos em um só lugar</p>

            <div className="prose prose-lg max-w-none">

              {/* Conjuntos */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-green-700">📚 Conjuntos</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Conjunto Potência</p>
                    <p className="text-lg">|P(A)| = 2<sup>|A|</sup></p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Produto Cartesiano</p>
                    <p className="text-lg">|A × B| = |A| · |B|</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">União</p>
                    <p className="text-lg">A ∪ B = {'{x | x ∈ A ou x ∈ B}'}</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Interseção</p>
                    <p className="text-lg">A ∩ B = {'{x | x ∈ A e x ∈ B}'}</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Diferença</p>
                    <p className="text-lg">A - B = {'{x | x ∈ A e x ∉ B}'}</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Complemento</p>
                    <p className="text-lg">A<sup>c</sup> = U - A</p>
                  </div>
                </div>

                <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Leis de De Morgan</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                      <p className="font-mono text-sm">(A ∪ B)<sup>c</sup> = A<sup>c</sup> ∩ B<sup>c</sup></p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                      <p className="font-mono text-sm">(A ∩ B)<sup>c</sup> = A<sup>c</sup> ∪ B<sup>c</sup></p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Grafos Básicos */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-green-700">🌐 Grafos - Definições Básicas</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Grafo</p>
                    <p className="text-lg">G = (V, E)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">V = vértices, E = arestas</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Grau de um Vértice</p>
                    <p className="text-lg">deg(v) ou d(v)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">número de arestas incidentes</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Arestas em Grafo Completo</p>
                    <p className="text-lg">|E| = n(n-1)/2</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">K<sub>n</sub> tem n vértices</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Arestas em Árvore</p>
                    <p className="text-lg">|E| = |V| - 1</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">grafo acíclico conexo</p>
                  </div>
                </div>

                <div className="mt-6 theorem-box">
                  <h3 className="text-lg font-semibold mb-3">🤝 Teorema do Aperto de Mãos</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-mono text-xl text-center mb-2">∑ deg(v) = 2|E|</p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">v ∈ V</p>
                  </div>
                  <p className="text-sm mt-3 text-gray-700 dark:text-gray-300">
                    A soma dos graus de todos os vértices é igual ao dobro do número de arestas.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded mt-3">
                    <p className="text-sm"><strong>Consequência:</strong> O número de vértices com grau ímpar é sempre par.</p>
                  </div>
                </div>
              </section>

              {/* Caminhos e Distâncias */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-green-700">🛤️ Caminhos e Distâncias</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Comprimento do Caminho</p>
                    <p className="text-lg">ℓ(P) = número de arestas</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Distância</p>
                    <p className="text-lg">d(u,v)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">comprimento do menor caminho</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Diâmetro</p>
                    <p className="text-lg">diam(G) = max d(u,v)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">maior distância no grafo</p>
                  </div>

                  <div className="formula-box">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Raio</p>
                    <p className="text-lg">rad(G) = min<sub>v</sub> max<sub>u</sub> d(u,v)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">excentricidade mínima</p>
                  </div>
                </div>

                <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Hierarquia de Percursos</h3>
                  <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="font-mono text-center text-lg">Caminho ⊂ Trilha ⊂ Passeio</p>
                    <div className="mt-4 space-y-2 text-sm">
                      <p>• <strong>Passeio:</strong> vértices e arestas podem repetir</p>
                      <p>• <strong>Trilha:</strong> arestas não se repetem</p>
                      <p>• <strong>Caminho:</strong> vértices não se repetem</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Matrizes */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-green-700">📊 Representação Matricial</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Matriz de Adjacência</h3>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg mb-3">
                      <p className="font-mono text-sm text-center">A[i][j] = 1 se (i,j) ∈ E</p>
                      <p className="font-mono text-sm text-center">A[i][j] = 0 caso contrário</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>• Dimensão: n × n</p>
                      <p>• Espaço: O(n²)</p>
                      <p>• Simétrica para grafos não-direcionados</p>
                      <p>• deg(v<sub>i</sub>) = soma da linha i</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Matriz de Incidência</h3>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg mb-3">
                      <p className="font-mono text-sm text-center">M[i][j] = 1 se v<sub>i</sub> incidente em e<sub>j</sub></p>
                      <p className="font-mono text-sm text-center">M[i][j] = 0 caso contrário</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>• Dimensão: n × m</p>
                      <p>• Espaço: O(n·m)</p>
                      <p>• Cada coluna tem 2 valores "1"</p>
                      <p>• deg(v<sub>i</sub>) = soma da linha i</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 theorem-box">
                  <h3 className="text-lg font-semibold mb-3">Potências da Matriz de Adjacência</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-mono text-xl text-center mb-2">A<sup>k</sup>[i][j] = nº de passeios de tamanho k de i para j</p>
                  </div>
                  <p className="text-sm mt-3 text-gray-700 dark:text-gray-300">
                    A k-ésima potência da matriz de adjacência conta o número de passeios de comprimento k entre vértices.
                  </p>
                </div>
              </section>

              {/* Grafos Especiais */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-green-700">⭐ Grafos Especiais</h2>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 text-green-600">Grafo Completo K<sub>n</sub></h3>
                    <div className="formula-box">
                      <p className="text-sm">|E| = n(n-1)/2</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Todo par de vértices conectado</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 text-green-600">Ciclo C<sub>n</sub></h3>
                    <div className="formula-box">
                      <p className="text-sm">|V| = |E| = n</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Grafo em forma de círculo</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 text-green-600">Árvore</h3>
                    <div className="formula-box">
                      <p className="text-sm">|E| = |V| - 1</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Grafo acíclico conexo</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 text-green-600">Grafo Bipartido</h3>
                    <div className="formula-box">
                      <p className="text-sm">V = V₁ ∪ V₂</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">V₁ ∩ V₂ = ∅</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 text-green-600">Grafo Regular</h3>
                    <div className="formula-box">
                      <p className="text-sm">∀v: deg(v) = k</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Todos vértices mesmo grau</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 text-green-600">Grafo Planar</h3>
                    <div className="formula-box">
                      <p className="text-sm">|E| ≤ 3|V| - 6</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Pode ser desenhado sem cruzamentos</p>
                  </div>
                </div>
              </section>

              {/* Fórmula de Euler */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-green-700">🎯 Fórmulas de Euler</h2>

                <div className="theorem-box">
                  <h3 className="text-xl font-semibold mb-4">Fórmula de Euler para Grafos Planares</h3>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <p className="font-mono text-3xl text-center mb-3">V - E + F = 2</p>
                    <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                      <p>V = número de vértices</p>
                      <p>E = número de arestas</p>
                      <p>F = número de faces (incluindo face externa)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Caminho e Ciclo Eulerianos</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">Caminho Euleriano existe se:</p>
                      <p className="text-sm">Exatamente 2 vértices com grau ímpar</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">Ciclo Euleriano existe se:</p>
                      <p className="text-sm">Todos os vértices têm grau par</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Complexidades */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-green-700">⚡ Complexidades de Algoritmos</h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-green-600 text-white">
                        <th className="px-4 py-3 text-left">Algoritmo</th>
                        <th className="px-4 py-3 text-left">Lista de Adjacência</th>
                        <th className="px-4 py-3 text-left">Matriz de Adjacência</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm">
                      <tr>
                        <td className="px-4 py-3 font-semibold">BFS (Busca em Largura)</td>
                        <td className="px-4 py-3 font-mono">O(V + E)</td>
                        <td className="px-4 py-3 font-mono">O(V²)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-4 py-3 font-semibold">DFS (Busca em Profundidade)</td>
                        <td className="px-4 py-3 font-mono">O(V + E)</td>
                        <td className="px-4 py-3 font-mono">O(V²)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Dijkstra</td>
                        <td className="px-4 py-3 font-mono">O((V + E) log V)</td>
                        <td className="px-4 py-3 font-mono">O(V²)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-4 py-3 font-semibold">Floyd-Warshall</td>
                        <td className="px-4 py-3 font-mono">O(V³)</td>
                        <td className="px-4 py-3 font-mono">O(V³)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Kruskal</td>
                        <td className="px-4 py-3 font-mono">O(E log E)</td>
                        <td className="px-4 py-3 font-mono">O(V² log V)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-4 py-3 font-semibold">Prim</td>
                        <td className="px-4 py-3 font-mono">O((V + E) log V)</td>
                        <td className="px-4 py-3 font-mono">O(V²)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <PageNavigation prev={{ url: '/teoria/matrizes', title: 'Representação Matricial' }} />

              {/* Botões de Navegação */}
              <div className="mt-12 flex justify-between">
                <Link href="/teoria/matrizes" className="btn-secondary">
                  ← Anterior: Representação Matricial
                </Link>
                <Link href="/exercicios/todos" className="btn-primary">
                  Próximo: Exercícios Resolvidos →
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
