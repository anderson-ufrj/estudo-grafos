'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

export default function MatrizesPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <ModernHeader />

        <main className="container-modern px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-green-600 hover:underline">
                Início
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">Teoria</span>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900">Representação Matricial</span>
            </nav>

            <h1 className="text-4xl font-bold mb-8">Representação Matricial de Grafos</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Matriz de Adjacência</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Definição</h3>
                  <p className="text-gray-700 mb-4">
                    Para um grafo G = (V, E) com n vértices, a <strong>matriz de adjacência</strong> A é uma matriz n × n onde:
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-4">
                    <p className="font-mono text-sm mb-2">A[i][j] = 1, se existe aresta entre vᵢ e vⱼ</p>
                    <p className="font-mono text-sm">A[i][j] = 0, caso contrário</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Exemplo Prático</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold mb-3 text-sm">Grafo G:</p>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-mono text-xs mb-2">V = {'{1, 2, 3, 4}'}</p>
                        <p className="font-mono text-xs mb-2">E = {'{'}</p>
                        <p className="font-mono text-xs ml-4">(1,2), (1,3),</p>
                        <p className="font-mono text-xs ml-4">(2,3), (3,4)</p>
                        <p className="font-mono text-xs">{'}'}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-3 text-sm">Matriz de Adjacência A:</p>
                      <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                        <table className="text-xs font-mono border-collapse">
                          <thead>
                            <tr>
                              <th className="border border-gray-400 px-2 py-1"></th>
                              <th className="border border-gray-400 px-2 py-1 bg-green-100">1</th>
                              <th className="border border-gray-400 px-2 py-1 bg-green-100">2</th>
                              <th className="border border-gray-400 px-2 py-1 bg-green-100">3</th>
                              <th className="border border-gray-400 px-2 py-1 bg-green-100">4</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-400 px-2 py-1 bg-green-100 font-semibold">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-400 px-2 py-1 bg-green-100 font-semibold">2</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-400 px-2 py-1 bg-green-100 font-semibold">3</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-400 px-2 py-1 bg-green-100 font-semibold">4</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Propriedades da Matriz de Adjacência</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✓ Grafos Não-Direcionados</p>
                      <p className="text-sm text-gray-700">A matriz é <strong>simétrica</strong>: A[i][j] = A[j][i]</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✓ Grau dos Vértices</p>
                      <p className="text-sm text-gray-700">deg(vᵢ) = soma da linha i (ou coluna i)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✓ Complexidade de Espaço</p>
                      <p className="text-sm text-gray-700">O(n²) - sempre usa n² espaço, independente do número de arestas</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✓ Verificação de Adjacência</p>
                      <p className="text-sm text-gray-700">O(1) - tempo constante para verificar se existe aresta entre dois vértices</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Matriz de Incidência</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Definição</h3>
                  <p className="text-gray-700 mb-4">
                    Para um grafo G = (V, E) com n vértices e m arestas, a <strong>matriz de incidência</strong> M é uma matriz n × m onde:
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-4">
                    <p className="font-mono text-sm mb-2">M[i][j] = 1, se o vértice vᵢ é incidente à aresta eⱼ</p>
                    <p className="font-mono text-sm">M[i][j] = 0, caso contrário</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Exemplo Prático</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold mb-3 text-sm">Grafo G:</p>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-mono text-xs mb-2">V = {'{1, 2, 3}'}</p>
                        <p className="font-mono text-xs mb-2">E = {'{'}</p>
                        <p className="font-mono text-xs ml-4">e₁ = (1,2)</p>
                        <p className="font-mono text-xs ml-4">e₂ = (2,3)</p>
                        <p className="font-mono text-xs ml-4">e₃ = (1,3)</p>
                        <p className="font-mono text-xs">{'}'}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-3 text-sm">Matriz de Incidência M:</p>
                      <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                        <table className="text-xs font-mono border-collapse">
                          <thead>
                            <tr>
                              <th className="border border-gray-400 px-2 py-1"></th>
                              <th className="border border-gray-400 px-2 py-1 bg-blue-100">e₁</th>
                              <th className="border border-gray-400 px-2 py-1 bg-blue-100">e₂</th>
                              <th className="border border-gray-400 px-2 py-1 bg-blue-100">e₃</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-400 px-2 py-1 bg-green-100 font-semibold">v₁</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-400 px-2 py-1 bg-green-100 font-semibold">v₂</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-400 px-2 py-1 bg-green-100 font-semibold">v₃</td>
                              <td className="border border-gray-400 px-2 py-1 text-center">0</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                              <td className="border border-gray-400 px-2 py-1 text-center bg-yellow-100">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Propriedades da Matriz de Incidência</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✓ Soma por Coluna</p>
                      <p className="text-sm text-gray-700">Cada coluna tem exatamente 2 valores "1" (as duas extremidades da aresta)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✓ Grau dos Vértices</p>
                      <p className="text-sm text-gray-700">deg(vᵢ) = soma da linha i</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✓ Complexidade de Espaço</p>
                      <p className="text-sm text-gray-700">O(n × m) - mais eficiente para grafos esparsos</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Potências da Matriz de Adjacência</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Teorema dos Passeios</h3>
                  <p className="text-gray-700 mb-4">
                    O elemento A<sup>k</sup>[i][j] da k-ésima potência da matriz de adjacência representa o <strong>número de passeios de comprimento k</strong> entre os vértices vᵢ e vⱼ.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-4">
                    <p className="font-mono text-center text-lg">A<sup>k</sup>[i][j] = número de passeios de tamanho k de i para j</p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold mb-3">Exemplos:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>A¹</strong>: número de passeios de comprimento 1 (arestas diretas)</li>
                      <li>• <strong>A²</strong>: número de passeios de comprimento 2</li>
                      <li>• <strong>A³</strong>: número de passeios de comprimento 3</li>
                    </ul>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">💡 Aplicação Prática:</p>
                    <p className="text-sm text-gray-700">
                      Para verificar se existe caminho de comprimento k entre dois vértices, calcule A<sup>k</sup> e verifique se o elemento correspondente é maior que zero.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. Comparação: Adjacência vs Incidência</h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-green-600 text-white">
                        <th className="px-4 py-3 text-left">Aspecto</th>
                        <th className="px-4 py-3 text-left">Matriz de Adjacência</th>
                        <th className="px-4 py-3 text-left">Matriz de Incidência</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-semibold">Dimensão</td>
                        <td className="px-4 py-3 font-mono text-sm">n × n</td>
                        <td className="px-4 py-3 font-mono text-sm">n × m</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Espaço</td>
                        <td className="px-4 py-3 text-sm">O(n²)</td>
                        <td className="px-4 py-3 text-sm">O(n × m)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Verificar adjacência</td>
                        <td className="px-4 py-3 text-sm">O(1) - muito rápido</td>
                        <td className="px-4 py-3 text-sm">O(m) - mais lento</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Listar vizinhos</td>
                        <td className="px-4 py-3 text-sm">O(n)</td>
                        <td className="px-4 py-3 text-sm">O(m)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Melhor para</td>
                        <td className="px-4 py-3 text-sm">Grafos densos</td>
                        <td className="px-4 py-3 text-sm">Grafos esparsos</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Informação sobre arestas</td>
                        <td className="px-4 py-3 text-sm">Implícita</td>
                        <td className="px-4 py-3 text-sm">Explícita (cada coluna = aresta)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">5. Algoritmos com Matrizes</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Busca em Profundidade (DFS)</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Usa matriz de adjacência para explorar recursivamente todos os vértices conectados.
                    </p>
                    <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                      Complexidade: O(n²)
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Busca em Largura (BFS)</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Explora vértices por níveis de distância usando fila e matriz de adjacência.
                    </p>
                    <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                      Complexidade: O(n²)
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Floyd-Warshall</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Encontra menores caminhos entre todos os pares de vértices.
                    </p>
                    <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                      Complexidade: O(n³)
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Warshall</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Calcula o fecho transitivo (alcançabilidade entre vértices).
                    </p>
                    <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                      Complexidade: O(n³)
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-12 flex justify-between">
                <Link href="/teoria/caminhos" className="btn-secondary">
                  ← Anterior: Caminhos e Ciclos
                </Link>
                <Link href="/teoria/formulas" className="btn-primary">
                  Próximo: Fórmulas Essenciais →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}