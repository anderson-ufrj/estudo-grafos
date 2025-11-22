import ModernHeader from '@/app/components/ModernHeader'
import ProgressTracker from '@/app/components/ProgressTracker'
import Breadcrumb from '@/app/components/Breadcrumb'
import FloatingActionMenu from '@/app/components/FloatingActionMenu'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exercícios de Grafos',
  description: '5 exercícios avançados resolvidos sobre teoria dos grafos: classificação, graus, matriz de adjacência, caminhos Eulerianos e algoritmo de Kruskal.',
  keywords: ['exercícios de grafos', 'teoria dos grafos', 'matriz de adjacência', 'caminho euleriano', 'kruskal', 'árvore geradora mínima', 'grau de vértices']
}

export default function ExerciciosGrafos() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ModernHeader />

      <main className="container-modern px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Início', href: '/' },
            { label: 'Exercícios', href: '/exercicios/todos' },
            { label: 'Grafos' }
          ]}
        />

        <ProgressTracker pageId="exercicios-grafos" title="Exercícios de Grafos" />

        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Exercícios Resolvidos: Teoria dos Grafos
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Esta seção apresenta exercícios resolvidos sobre teoria dos grafos,
            incluindo classificação, graus, caminhos, representações e aplicações práticas.
          </p>

          {/* Exercício 1 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 1: Classificação de Grafos
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Considere o grafo G com vértices V = {'{'}A, B, C, D{'}'} e arestas
                E = {'{'} (A,B), (B,C), (C,D), (D,A), (A,C) {'}'}.<br/>
                Classifique este grafo quanto a:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>Direção (direcionado ou não-direcionado)</li>
                <li>Ciclicidade (cíclico ou acíclico)</li>
                <li>Conectividade (conexo ou desconexo)</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>1. Direção:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300">
                  As arestas são representadas como pares ordenados (u,v), indicando direção.<br/>
                  <strong>Classificação: Grafo Direcionado (Dígrafo)</strong>
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>2. Ciclicidade:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Ciclos encontrados:
                </p>
                <ul className="list-disc ml-6 text-sm font-mono">
                  <li>A → B → C → A (ciclo de tamanho 3)</li>
                  <li>A → B → C → D → A (ciclo de tamanho 4)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Classificação: Grafo Cíclico</strong>
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>3. Conectividade:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Existe um caminho entre qualquer par de vértices (ignorando direção).<br/>
                  <strong>Classificação: Grafo Fortemente Conexo</strong>
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-3 mt-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Resumo:</strong> Este é um dígrafo cíclico e fortemente conexo.
                </p>
              </div>
            </div>
          </section>

          {/* Exercício 2 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 2: Grau de Vértices
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Para o grafo não-direcionado G com arestas:<br/>
                E = {'{'} {'{'}1,2{'}'}, {'{'}1,3{'}'}, {'{'}2,3{'}'}, {'{'}2,4{'}'}, {'{'}3,4{'}'}, {'{'}4,5{'}'} {'}'}
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>Calcule o grau de cada vértice</li>
                <li>Verifique o Teorema do Aperto de Mão</li>
                <li>Identifique vértices pares e ímpares</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>1. Grau de cada vértice:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4 font-mono text-sm">
                <ul className="space-y-1">
                  <li>grau(1) = 2  (arestas: {'{'}1,2{'}'}, {'{'}1,3{'}'})</li>
                  <li>grau(2) = 3  (arestas: {'{'}1,2{'}'}, {'{'}2,3{'}'}, {'{'}2,4{'}'})</li>
                  <li>grau(3) = 3  (arestas: {'{'}1,3{'}'}, {'{'}2,3{'}'}, {'{'}3,4{'}'})</li>
                  <li>grau(4) = 3  (arestas: {'{'}2,4{'}'}, {'{'}3,4{'}'}, {'{'}4,5{'}'})</li>
                  <li>grau(5) = 1  (arestas: {'{'}4,5{'}'})</li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>2. Teorema do Aperto de Mão:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-mono text-sm">
                  Σ grau(v) = 2 × |E|
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-mono text-sm">
                  2 + 3 + 3 + 3 + 1 = 12
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  2 × 6 = 12 ✓
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  O teorema é verificado!
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>3. Classificação por paridade:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded font-mono text-sm">
                <p>Vértices de grau PAR: {'{'}1{'}'} (grau 2)</p>
                <p>Vértices de grau ÍMPAR: {'{'}2, 3, 4, 5{'}'} (graus 3, 3, 3, 1)</p>
              </div>
            </div>
          </section>

          {/* Exercício 3 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 3: Matriz de Adjacência
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Construa a matriz de adjacência para o grafo não-direcionado com
                vértices V = {'{'}A, B, C, D{'}'} e arestas
                E = {'{'} {'{'}A,B{'}'}, {'{'}A,C{'}'}, {'{'}B,D{'}'}, {'{'}C,D{'}'} {'}'}.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A matriz de adjacência M é uma matriz n×n onde M[i][j] = 1 se existe
                aresta entre i e j, caso contrário M[i][j] = 0.
              </p>

              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4 overflow-x-auto">
                <table className="border-collapse font-mono text-sm mx-auto">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-2"></th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-2">A</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-2">B</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-2">C</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-2">D</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 font-bold">A</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center">0</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center bg-green-100 dark:bg-green-900/30">1</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center bg-green-100 dark:bg-green-900/30">1</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 font-bold">B</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center bg-green-100 dark:bg-green-900/30">1</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center">0</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center">0</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center bg-green-100 dark:bg-green-900/30">1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 font-bold">C</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center bg-green-100 dark:bg-green-900/30">1</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center">0</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center">0</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center bg-green-100 dark:bg-green-900/30">1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 font-bold">D</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center">0</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center bg-green-100 dark:bg-green-900/30">1</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center bg-green-100 dark:bg-green-900/30">1</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-2 text-center">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-3 mt-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Propriedades:</strong>
                </p>
                <ul className="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300 mt-2">
                  <li>Matriz simétrica (grafo não-direcionado)</li>
                  <li>Diagonal principal com zeros (sem loops)</li>
                  <li>Soma da linha i = grau do vértice i</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Exercício 4 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 4: Caminhos e Ciclos
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                No grafo G com arestas E = {'{'} {'{'}1,2{'}'}, {'{'}2,3{'}'}, {'{'}3,4{'}'}, {'{'}4,5{'}'}, {'{'}5,1{'}'}, {'{'}2,5{'}'} {'}'}:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>Encontre um caminho simples de comprimento 3 de vértice 1 ao 4</li>
                <li>Identifique um ciclo de comprimento 3</li>
                <li>Determine se existe um caminho Euleriano</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>1. Caminho simples de 1 a 4 com comprimento 3:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="font-mono text-sm mb-2">
                  Caminho: 1 → 2 → 3 → 4
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Arestas utilizadas: {'{'}1,2{'}'}, {'{'}2,3{'}'}, {'{'}3,4{'}'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Comprimento: 3 arestas ✓
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>2. Ciclo de comprimento 3:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="font-mono text-sm mb-2">
                  Ciclo: 1 → 2 → 5 → 1
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Arestas utilizadas: {'{'}1,2{'}'}, {'{'}2,5{'}'}, {'{'}5,1{'}'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Comprimento: 3 arestas ✓
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>3. Caminho Euleriano:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Primeiro, calculamos o grau de cada vértice:
                </p>
                <ul className="font-mono text-sm space-y-1 mb-3">
                  <li>grau(1) = 2</li>
                  <li>grau(2) = 3</li>
                  <li>grau(3) = 2</li>
                  <li>grau(4) = 2</li>
                  <li>grau(5) = 3</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  Para existir caminho Euleriano, o grafo deve ter exatamente
                  0 ou 2 vértices de grau ímpar.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Vértices de grau ímpar: 2 e 5 (total: 2 vértices)
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mt-2">
                  ✓ Existe caminho Euleriano de 2 a 5 (ou vice-versa)
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Teorema de Euler:</strong> Um grafo conexo tem caminho
                  Euleriano se e somente se possui exatamente 0 ou 2 vértices de grau ímpar.
                </p>
              </div>
            </div>
          </section>

          {/* Exercício 5 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 5: Árvore Geradora Mínima
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Dado o grafo ponderado G com 4 vértices e arestas com pesos:
              </p>
              <ul className="list-disc ml-6 mt-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                <li>{'{'}A,B{'}'}: peso 4</li>
                <li>{'{'}A,C{'}'}: peso 2</li>
                <li>{'{'}B,C{'}'}: peso 1</li>
                <li>{'{'}B,D{'}'}: peso 5</li>
                <li>{'{'}C,D{'}'}: peso 3</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Use o algoritmo de Kruskal para encontrar a árvore geradora mínima.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Algoritmo de Kruskal:</strong>
              </p>

              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Passo 1:</strong> Ordenar arestas por peso crescente
                </p>
                <ol className="list-decimal ml-6 font-mono text-sm space-y-1">
                  <li>{'{'}B,C{'}'}: 1</li>
                  <li>{'{'}A,C{'}'}: 2</li>
                  <li>{'{'}C,D{'}'}: 3</li>
                  <li>{'{'}A,B{'}'}: 4</li>
                  <li>{'{'}B,D{'}'}: 5</li>
                </ol>
              </div>

              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Passo 2:</strong> Adicionar arestas sem formar ciclos
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span className="font-mono">Aresta {'{'}B,C{'}'} (peso 1) - Adicionada</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span className="font-mono">Aresta {'{'}A,C{'}'} (peso 2) - Adicionada</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span className="font-mono">Aresta {'{'}C,D{'}'} (peso 3) - Adicionada</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span className="font-mono">Aresta {'{'}A,B{'}'} (peso 4) - Rejeitada (forma ciclo)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span className="font-mono">Aresta {'{'}B,D{'}'} (peso 5) - Rejeitada (forma ciclo)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Resultado:</strong> Árvore Geradora Mínima (AGM)
                </p>
                <p className="font-mono text-sm mb-2">
                  Arestas: {'{'}B,C{'}'}, {'{'}A,C{'}'}, {'{'}C,D{'}'}
                </p>
                <p className="font-mono text-sm">
                  Peso total: 1 + 2 + 3 = 6
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Observação:</strong> Uma árvore geradora de um grafo com
                  n vértices sempre terá exatamente n-1 arestas. Neste caso: 4 vértices,
                  3 arestas.
                </p>
              </div>
            </div>
          </section>

          {/* Links de navegação */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            <a
              href="/teoria/introducao"
              className="btn-primary text-center"
            >
              ← Voltar para Teoria dos Grafos
            </a>
            <a
              href="/exercicios/todos"
              className="btn-primary text-center"
            >
              Ver Todos os Exercícios →
            </a>
          </div>
        </div>
      </main>

      <FloatingActionMenu pageTitle="Exercícios de Grafos - Teoria dos Grafos" />
    </div>
  )
}
