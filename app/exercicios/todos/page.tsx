'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'
import ProgressTracker from '@/app/components/ProgressTracker'

export default function ExerciciosTodosPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-700/50">
        <ModernHeader />

        <main className="container-modern px-4 py-8">
          <ProgressTracker pageId="exercicios-todos" title="Exercícios Resolvidos" />
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-green-600 hover:underline">
                Início
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-700 dark:text-gray-300">Exercícios</span>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-900 dark:text-gray-100">Todos os Exercícios Resolvidos</span>
            </nav>

            <h1 className="text-4xl font-bold mb-4">Exercícios Resolvidos</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Questões selecionadas com resolução completa passo a passo</p>

            <div className="prose prose-lg max-w-none">

              {/* Exercício 1: Conjuntos */}
              <section className="mb-12 print-break">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Exercício 1</span>
                    <span className="bg-gray-200 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Conjuntos</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Produto Cartesiano e Relações</h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-5 mb-6">
                    <p className="font-semibold mb-2">📝 Enunciado:</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      Dados os conjuntos A = {'{1, 2, 3}'} e B = {'{a, b}'}, determine:
                    </p>
                    <ol className="list-alpha ml-6 mt-3 space-y-1">
                      <li>O produto cartesiano A × B</li>
                      <li>O produto cartesiano B × A</li>
                      <li>A cardinalidade de cada produto</li>
                      <li>A × B é igual a B × A?</li>
                    </ol>
                  </div>

                  <div className="answer-box">
                    <p className="font-bold text-lg mb-4">✅ Resolução:</p>

                    <div className="space-y-6">
                      <div>
                        <p className="font-semibold mb-2">a) A × B:</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                          O produto cartesiano A × B é o conjunto de todos os pares ordenados (a, b) onde a ∈ A e b ∈ B.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-mono text-sm">
                            A × B = {'{'}
                            <br />
                            <span className="ml-4">(1, a), (1, b),</span>
                            <br />
                            <span className="ml-4">(2, a), (2, b),</span>
                            <br />
                            <span className="ml-4">(3, a), (3, b)</span>
                            <br />
                            {'}'}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">b) B × A:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-mono text-sm">
                            B × A = {'{'}
                            <br />
                            <span className="ml-4">(a, 1), (a, 2), (a, 3),</span>
                            <br />
                            <span className="ml-4">(b, 1), (b, 2), (b, 3)</span>
                            <br />
                            {'}'}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">c) Cardinalidade:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-mono text-sm mb-2">|A × B| = |A| · |B| = 3 · 2 = 6</p>
                          <p className="font-mono text-sm">|B × A| = |B| · |A| = 2 · 3 = 6</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">d) A × B = B × A?</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-800 dark:text-gray-200">
                            <strong>Não!</strong> O produto cartesiano <strong>não é comutativo</strong>.
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Exemplo: (1, a) ∈ A × B, mas (1, a) ∉ B × A
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Exercício 2: Funções */}
              <section className="mb-12 print-break">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Exercício 2</span>
                    <span className="bg-gray-200 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Funções</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Função Injetora</h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-5 mb-6">
                    <p className="font-semibold mb-2">📝 Enunciado:</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      Verifique se a função f: ℕ → ℕ definida por f(x) = 2x + 1 é injetora.
                    </p>
                  </div>

                  <div className="answer-box">
                    <p className="font-bold text-lg mb-4">✅ Resolução:</p>

                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Definição de Função Injetora:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-sm">
                            Uma função é injetora se elementos distintos do domínio têm imagens distintas.
                          </p>
                          <p className="font-mono text-sm mt-2">∀x₁, x₂ ∈ ℕ: x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂)</p>
                          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">ou equivalentemente:</p>
                          <p className="font-mono text-sm">∀x₁, x₂ ∈ ℕ: f(x₁) = f(x₂) ⇒ x₁ = x₂</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Demonstração:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg space-y-3">
                          <p className="text-sm">Suponha que f(x₁) = f(x₂). Então:</p>

                          <div className="ml-4 space-y-2 text-sm font-mono">
                            <p>2x₁ + 1 = 2x₂ + 1</p>
                            <p>2x₁ = 2x₂</p>
                            <p>x₁ = x₂</p>
                          </div>

                          <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded">
                            <p className="text-sm font-semibold">
                              ✓ Conclusão: Como f(x₁) = f(x₂) implica x₁ = x₂, a função <strong>é injetora</strong>.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Verificação com exemplos:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <ul className="space-y-1 text-sm font-mono">
                            <li>f(0) = 1</li>
                            <li>f(1) = 3</li>
                            <li>f(2) = 5</li>
                            <li>f(3) = 7</li>
                            <li>f(4) = 9</li>
                          </ul>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Todas as imagens são distintas ✓</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Exercício 3: Grafos Básicos */}
              <section className="mb-12 print-break">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Exercício 3</span>
                    <span className="bg-gray-200 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Grafos</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Teorema do Aperto de Mãos</h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-5 mb-6">
                    <p className="font-semibold mb-2">📝 Enunciado:</p>
                    <p className="text-gray-800 dark:text-gray-200 mb-3">
                      Um grafo possui 5 vértices com os seguintes graus:
                    </p>
                    <p className="font-mono text-sm ml-4">
                      deg(v₁) = 3, deg(v₂) = 2, deg(v₃) = 4, deg(v₄) = 1, deg(v₅) = ?
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 mt-3">
                      Se o grafo possui 6 arestas, qual é o grau do vértice v₅?
                    </p>
                  </div>

                  <div className="answer-box">
                    <p className="font-bold text-lg mb-4">✅ Resolução:</p>

                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Teorema do Aperto de Mãos:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-mono text-center text-lg">∑ deg(v) = 2|E|</p>
                          <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                            A soma dos graus é igual ao dobro do número de arestas
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Aplicando o teorema:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg space-y-2">
                          <p className="font-mono text-sm">∑ deg(v) = 2 · 6 = 12</p>
                          <p className="font-mono text-sm">deg(v₁) + deg(v₂) + deg(v₃) + deg(v₄) + deg(v₅) = 12</p>
                          <p className="font-mono text-sm">3 + 2 + 4 + 1 + deg(v₅) = 12</p>
                          <p className="font-mono text-sm">10 + deg(v₅) = 12</p>
                          <p className="font-mono text-sm text-green-700 font-bold">deg(v₅) = 2</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Verificação:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-mono text-sm">Soma total: 3 + 2 + 4 + 1 + 2 = 12 ✓</p>
                          <p className="font-mono text-sm">2|E| = 2 · 6 = 12 ✓</p>
                          <div className="mt-3 bg-yellow-50 p-3 rounded">
                            <p className="text-sm">
                              <strong>Obs:</strong> Note que temos 2 vértices com grau ímpar (v₁ e v₄),
                              o que confirma a consequência do teorema: o número de vértices com grau ímpar é sempre par.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Exercício 4: Matriz de Adjacência */}
              <section className="mb-12 print-break">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Exercício 4</span>
                    <span className="bg-gray-200 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Matrizes</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Construindo Matriz de Adjacência</h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-5 mb-6">
                    <p className="font-semibold mb-2">📝 Enunciado:</p>
                    <p className="text-gray-800 dark:text-gray-200 mb-3">
                      Dado o grafo G = (V, E) onde:
                    </p>
                    <div className="font-mono text-sm ml-4 space-y-1">
                      <p>V = {'{1, 2, 3, 4}'}</p>
                      <p>E = {'{'} (1,2), (1,3), (2,4), (3,4) {'}'}</p>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 mt-3">
                      Construa a matriz de adjacência e determine o grau de cada vértice.
                    </p>
                  </div>

                  <div className="answer-box">
                    <p className="font-bold text-lg mb-4">✅ Resolução:</p>

                    <div className="space-y-6">
                      <div>
                        <p className="font-semibold mb-3">Matriz de Adjacência A:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                          <table className="mx-auto text-sm font-mono border-collapse">
                            <thead>
                              <tr>
                                <th className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-700/50"></th>
                                <th className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-green-100 dark:bg-green-900/30">1</th>
                                <th className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-green-100 dark:bg-green-900/30">2</th>
                                <th className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-green-100 dark:bg-green-900/30">3</th>
                                <th className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-green-100 dark:bg-green-900/30">4</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-green-100 dark:bg-green-900/30 font-bold">1</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center">0</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30">1</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30">1</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center">0</td>
                              </tr>
                              <tr>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-green-100 dark:bg-green-900/30 font-bold">2</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30">1</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center">0</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center">0</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30">1</td>
                              </tr>
                              <tr>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-green-100 dark:bg-green-900/30 font-bold">3</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30">1</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center">0</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center">0</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30">1</td>
                              </tr>
                              <tr>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 bg-green-100 dark:bg-green-900/30 font-bold">4</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center">0</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30">1</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30">1</td>
                                <td className="border-2 border-gray-400 dark:border-gray-600 px-4 py-2 text-center">0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-3">Construção passo a passo:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg space-y-2 text-sm">
                          <p>1. Aresta (1,2): A[1][2] = 1 e A[2][1] = 1 (grafo não-direcionado)</p>
                          <p>2. Aresta (1,3): A[1][3] = 1 e A[3][1] = 1</p>
                          <p>3. Aresta (2,4): A[2][4] = 1 e A[4][2] = 1</p>
                          <p>4. Aresta (3,4): A[3][4] = 1 e A[4][3] = 1</p>
                          <p className="mt-3 text-gray-600 dark:text-gray-400">Todos os outros elementos = 0</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-3">Grau dos vértices:</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-sm mb-2">
                            O grau de cada vértice = soma da linha (ou coluna) correspondente:
                          </p>
                          <div className="font-mono text-sm space-y-1 mt-3">
                            <p>deg(v₁) = 0 + 1 + 1 + 0 = <span className="font-bold text-green-600">2</span></p>
                            <p>deg(v₂) = 1 + 0 + 0 + 1 = <span className="font-bold text-green-600">2</span></p>
                            <p>deg(v₃) = 1 + 0 + 0 + 1 = <span className="font-bold text-green-600">2</span></p>
                            <p>deg(v₄) = 0 + 1 + 1 + 0 = <span className="font-bold text-green-600">2</span></p>
                          </div>
                          <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded">
                            <p className="text-sm">
                              <strong>Verificação:</strong> ∑ deg(v) = 2 + 2 + 2 + 2 = 8 = 2 · 4 = 2|E| ✓
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Exercício 5: Caminhos */}
              <section className="mb-12 print-break">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Exercício 5</span>
                    <span className="bg-gray-200 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Caminhos</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Identificando Passeios, Trilhas e Caminhos</h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-5 mb-6">
                    <p className="font-semibold mb-2">📝 Enunciado:</p>
                    <p className="text-gray-800 dark:text-gray-200 mb-3">
                      Classifique cada sequência abaixo como passeio, trilha ou caminho:
                    </p>
                    <ol className="ml-6 space-y-2 text-sm">
                      <li>a) A → B → C → D → E</li>
                      <li>b) A → B → C → B → D</li>
                      <li>c) A → B → C → D → C → E</li>
                      <li>d) A → B → A → C</li>
                    </ol>
                  </div>

                  <div className="answer-box">
                    <p className="font-bold text-lg mb-4">✅ Resolução:</p>

                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="font-semibold mb-3">Definições:</p>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Passeio:</strong> vértices e arestas podem repetir</li>
                          <li>• <strong>Trilha:</strong> arestas não se repetem (vértices podem)</li>
                          <li>• <strong>Caminho:</strong> vértices não se repetem (mais restritivo)</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-semibold mb-2">a) A → B → C → D → E</p>
                          <div className="ml-4 text-sm space-y-1">
                            <p>✓ Vértices distintos: A, B, C, D, E</p>
                            <p>✓ Arestas distintas: AB, BC, CD, DE</p>
                            <p className="font-bold text-green-600 mt-2">→ É um CAMINHO (e também trilha e passeio)</p>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-semibold mb-2">b) A → B → C → B → D</p>
                          <div className="ml-4 text-sm space-y-1">
                            <p>✗ Vértice B se repete</p>
                            <p>✓ Arestas distintas: AB, BC, CB, BD</p>
                            <p className="font-bold text-blue-600 mt-2">→ É uma TRILHA (mas não é caminho)</p>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-semibold mb-2">c) A → B → C → D → C → E</p>
                          <div className="ml-4 text-sm space-y-1">
                            <p>✗ Vértice C se repete</p>
                            <p>✓ Arestas distintas: AB, BC, CD, DC, CE</p>
                            <p className="font-bold text-blue-600 mt-2">→ É uma TRILHA (mas não é caminho)</p>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="font-semibold mb-2">d) A → B → A → C</p>
                          <div className="ml-4 text-sm space-y-1">
                            <p>✗ Vértice A se repete</p>
                            <p>✗ Aresta AB se repete (ida e volta)</p>
                            <p className="font-bold text-orange-600 mt-2">→ É um PASSEIO (mas não é trilha nem caminho)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navegação */}
              <div className="mt-12 flex justify-between items-center">
                <Link href="/" className="btn-secondary">
                  ← Voltar ao Início
                </Link>
                <Link href="/teoria/formulas" className="btn-primary">
                  Ver Fórmulas Essenciais →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
