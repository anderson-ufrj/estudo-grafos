import ModernHeader from '@/app/components/ModernHeader'
import ProgressTracker from '@/app/components/ProgressTracker'
import Breadcrumb from '@/app/components/Breadcrumb'
import FloatingActionMenu from '@/app/components/FloatingActionMenu'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exercícios de Conjuntos',
  description: '5 exercícios resolvidos sobre teoria de conjuntos: operações básicas, produto cartesiano, conjunto potência, propriedades e aplicações em grafos.',
  keywords: ['exercícios de conjuntos', 'teoria de conjuntos', 'produto cartesiano', 'conjunto potência', 'operações de conjuntos']
}

export default function ExerciciosConjuntos() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ModernHeader />

      <main className="container-modern px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Início', href: '/' },
            { label: 'Exercícios', href: '/exercicios/todos' },
            { label: 'Conjuntos' }
          ]}
        />

        <ProgressTracker pageId="exercicios-conjuntos" title="Exercícios de Conjuntos" />

        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Exercícios Resolvidos: Fundamentos de Conjuntos
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Esta seção apresenta exercícios resolvidos sobre teoria de conjuntos,
            abordando operações básicas, propriedades e aplicações em teoria dos grafos.
          </p>

          {/* Exercício 1 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 1: Operações Básicas com Conjuntos
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Dados os conjuntos A = {'{'}1, 2, 3, 4, 5{'}'} e B = {'{'}4, 5, 6, 7, 8{'}'},
                determine:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>A ∪ B (união)</li>
                <li>A ∩ B (interseção)</li>
                <li>A - B (diferença)</li>
                <li>B - A (diferença)</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>a) A ∪ B (união):</strong> Todos os elementos que pertencem a A ou B
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4 font-mono text-sm">
                A ∪ B = {'{'}1, 2, 3, 4, 5, 6, 7, 8{'}'}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>b) A ∩ B (interseção):</strong> Elementos que pertencem a A e B simultaneamente
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4 font-mono text-sm">
                A ∩ B = {'{'}4, 5{'}'}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>c) A - B (diferença):</strong> Elementos que pertencem a A mas não a B
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4 font-mono text-sm">
                A - B = {'{'}1, 2, 3{'}'}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>d) B - A (diferença):</strong> Elementos que pertencem a B mas não a A
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded font-mono text-sm">
                B - A = {'{'}6, 7, 8{'}'}
              </div>
            </div>
          </section>

          {/* Exercício 2 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 2: Produto Cartesiano
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Dados os conjuntos A = {'{'}1, 2{'}'} e B = {'{'}x, y, z{'}'},
                determine o produto cartesiano A × B e calcule sua cardinalidade.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                O produto cartesiano A × B é o conjunto de todos os pares ordenados (a, b)
                onde a ∈ A e b ∈ B.
              </p>

              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4 font-mono text-sm">
                A × B = {'{'}(1,x), (1,y), (1,z), (2,x), (2,y), (2,z){'}'}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Cardinalidade:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded font-mono text-sm">
                |A × B| = |A| × |B| = 2 × 3 = 6
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Observe que o produto cartesiano não é comutativo: A × B ≠ B × A
              </p>
            </div>
          </section>

          {/* Exercício 3 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 3: Conjunto das Partes
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Dado o conjunto A = {'{'}a, b, c{'}'}, determine o conjunto das partes P(A)
                e calcule sua cardinalidade.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                O conjunto das partes P(A) contém todos os subconjuntos possíveis de A,
                incluindo o conjunto vazio ∅ e o próprio conjunto A.
              </p>

              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4 font-mono text-sm">
                <p>P(A) = {'{'}</p>
                <p className="ml-4">∅,</p>
                <p className="ml-4">{'{'}a{'}'}, {'{'}b{'}'}, {'{'}c{'}'},</p>
                <p className="ml-4">{'{'}a,b{'}'}, {'{'}a,c{'}'}, {'{'}b,c{'}'},</p>
                <p className="ml-4">{'{'}a,b,c{'}'}</p>
                <p>{'}'}</p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Cardinalidade:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4 font-mono text-sm">
                |P(A)| = 2^|A| = 2³ = 8 subconjuntos
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-3 mt-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Importante:</strong> Para um conjunto com n elementos,
                  o conjunto das partes sempre terá 2^n elementos.
                </p>
              </div>
            </div>
          </section>

          {/* Exercício 4 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 4: Propriedades de Conjuntos
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Dados os conjuntos A = {'{'}1, 2, 3, 4{'}'}, B = {'{'}3, 4, 5, 6{'}'} e
                C = {'{'}1, 2, 5, 6{'}'},<br/>
                verifique se vale a propriedade distributiva: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Lado esquerdo: A ∩ (B ∪ C)</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="font-mono text-sm mb-2">
                  B ∪ C = {'{'}3, 4, 5, 6{'}'} ∪ {'{'}1, 2, 5, 6{'}'} = {'{'}1, 2, 3, 4, 5, 6{'}'}
                </p>
                <p className="font-mono text-sm">
                  A ∩ (B ∪ C) = {'{'}1, 2, 3, 4{'}'} ∩ {'{'}1, 2, 3, 4, 5, 6{'}'} = {'{'}1, 2, 3, 4{'}'}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Lado direito: (A ∩ B) ∪ (A ∩ C)</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="font-mono text-sm mb-2">
                  A ∩ B = {'{'}1, 2, 3, 4{'}'} ∩ {'{'}3, 4, 5, 6{'}'} = {'{'}3, 4{'}'}
                </p>
                <p className="font-mono text-sm mb-2">
                  A ∩ C = {'{'}1, 2, 3, 4{'}'} ∩ {'{'}1, 2, 5, 6{'}'} = {'{'}1, 2{'}'}
                </p>
                <p className="font-mono text-sm">
                  (A ∩ B) ∪ (A ∩ C) = {'{'}3, 4{'}'} ∪ {'{'}1, 2{'}'} = {'{'}1, 2, 3, 4{'}'}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Conclusão:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded font-mono text-sm">
                A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) = {'{'}1, 2, 3, 4{'}'}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                ✓ A propriedade distributiva é verificada!
              </p>
            </div>
          </section>

          {/* Exercício 5 */}
          <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Exercício 5: Aplicação em Grafos
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-900 dark:text-white">Enunciado:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Em um grafo G, seja V = {'{'}v₁, v₂, v₃, v₄{'}'} o conjunto de vértices e
                E = {'{'} {'{'}v₁,v₂{'}'}, {'{'}v₂,v₃{'}'}, {'{'}v₃,v₄{'}'}, {'{'}v₄,v₁{'}'} {'}'}
                o conjunto de arestas.<br/>
                Determine o conjunto de vértices adjacentes a v₁.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Resolução:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Um vértice v é adjacente a v₁ se existe uma aresta conectando-os.
                Precisamos buscar em E todas as arestas que contêm v₁.
              </p>

              <div className="bg-white dark:bg-gray-700 p-3 rounded mb-4">
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm mb-2">
                  Arestas que contêm v₁:
                </p>
                <ul className="list-disc ml-6 font-mono text-sm text-gray-700 dark:text-gray-300">
                  <li>{'{'}v₁, v₂{'}'} → v₂ é adjacente a v₁</li>
                  <li>{'{'}v₄, v₁{'}'} → v₄ é adjacente a v₁</li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Resposta:</strong>
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded font-mono text-sm mb-4">
                Adj(v₁) = {'{'}v₂, v₄{'}'}
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Conceito:</strong> O grau de um vértice é igual à cardinalidade
                  do conjunto de seus vértices adjacentes. Neste caso, grau(v₁) = |Adj(v₁)| = 2.
                </p>
              </div>
            </div>
          </section>

          {/* Links de navegação */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            <a
              href="/teoria/conjuntos"
              className="btn-primary text-center"
            >
              ← Voltar para Teoria de Conjuntos
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

      <FloatingActionMenu pageTitle="Exercícios de Conjuntos - Teoria dos Grafos" />
    </div>
  )
}
