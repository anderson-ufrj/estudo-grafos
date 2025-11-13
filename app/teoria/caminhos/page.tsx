'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'
import PageNavigation from '@/app/components/PageNavigation'
import PrintButton from '@/app/components/PrintButton'
import ProgressTracker from '@/app/components/ProgressTracker'
import FocusMode from '@/app/components/FocusMode'
import ShareButtons from '@/app/components/ShareButtons'

export default function CaminhosPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ModernHeader />

        <main className="container-modern px-4 py-8">
          <ProgressTracker pageId="teoria-caminhos" title="Caminhos e Ciclos" />

          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-green-600 hover:underline">
                Início
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700 dark:text-gray-300">Teoria</span>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900 dark:text-gray-100">Caminhos e Ciclos</span>
            </nav>

            <h1 className="text-4xl font-bold mb-8 dark:text-gray-100">Caminhos e Ciclos em Grafos</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">1. Hierarquia: Passeio → Trilha → Caminho</h2>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Passeio (Walk)</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Uma sequência de vértices v₀, v₁, v₂, ..., vₙ onde cada par consecutivo (vᵢ, vᵢ₊₁) forma uma aresta do grafo.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="font-semibold mb-2 dark:text-gray-200">Características:</p>
                    <ul className="space-y-1 text-sm dark:text-gray-300">
                      <li>• Vértices podem se repetir</li>
                      <li>• Arestas podem se repetir</li>
                      <li>• É a forma mais geral de percurso</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <p className="text-sm dark:text-gray-300"><strong>Exemplo:</strong> A → B → C → B → D</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">(vértice B se repete)</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Trilha (Trail)</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Um passeio onde <strong>nenhuma aresta se repete</strong>.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="font-semibold mb-2 dark:text-gray-200">Características:</p>
                    <ul className="space-y-1 text-sm dark:text-gray-300">
                      <li>• Vértices podem se repetir</li>
                      <li>• Arestas NÃO podem se repetir ✓</li>
                      <li>• Mais restritivo que passeio</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <p className="text-sm dark:text-gray-300"><strong>Exemplo:</strong> A → B → C → D → B → E</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">(vértice B se repete, mas cada aresta é única)</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Caminho (Path)</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Uma trilha onde <strong>nenhum vértice se repete</strong> (exceto possivelmente o primeiro e o último).
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="font-semibold mb-2 dark:text-gray-200">Características:</p>
                    <ul className="space-y-1 text-sm dark:text-gray-300">
                      <li>• Vértices NÃO podem se repetir ✓</li>
                      <li>• Arestas NÃO podem se repetir ✓</li>
                      <li>• É a forma mais restritiva</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <p className="text-sm dark:text-gray-300"><strong>Exemplo:</strong> A → B → C → D → E</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">(todos os vértices são únicos)</p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <p className="font-semibold text-lg mb-2 dark:text-gray-200">📌 Resumo da Hierarquia:</p>
                  <p className="font-mono text-sm dark:text-gray-300">
                    Caminho ⊂ Trilha ⊂ Passeio
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    Todo caminho é uma trilha, e toda trilha é um passeio.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">2. Ciclos</h2>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3 dark:text-gray-100">Definição de Ciclo</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Um ciclo é um caminho que começa e termina no mesmo vértice, com comprimento mínimo 3.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="font-mono text-sm mb-2 dark:text-gray-300">v₀ → v₁ → v₂ → ... → vₙ → v₀</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">onde v₀ = vₙ e n ≥ 3</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Ciclo Simples</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Ciclo onde não há repetição de vértices (exceto o início/fim).
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded">
                      <p className="text-xs font-mono dark:text-gray-300">A → B → C → D → A</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Ciclo Hamiltoniano</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Ciclo que visita cada vértice do grafo exatamente uma vez.
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded text-xs dark:text-gray-300">
                      Importante em problemas de otimização
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Ciclo Euleriano</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Ciclo que passa por todas as arestas exatamente uma vez.
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded text-xs dark:text-gray-300">
                      Existe se todos os vértices têm grau par
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Grafo Acíclico</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Grafo que não contém nenhum ciclo.
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded text-xs dark:text-gray-300">
                      Árvores são grafos acíclicos conexos
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">3. Conectividade</h2>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3 dark:text-gray-100">Grafo Conexo</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Um grafo é <strong>conexo</strong> se existe um caminho entre qualquer par de vértices.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2 dark:text-gray-200">✓ Grafo Conexo</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Você consegue ir de qualquer vértice para qualquer outro vértice seguindo as arestas.
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✗ Grafo Desconexo</p>
                      <p className="text-xs text-gray-600">
                        Existem vértices isolados ou grupos isolados que não podem ser alcançados.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 dark:text-gray-100">Componentes Conexos</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Em um grafo desconexo, cada subgrafo maximal conexo é chamado de <strong>componente conexo</strong>.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-sm dark:text-gray-200"><strong>Exemplo:</strong></p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                      Se um grafo tem 3 "ilhas" separadas de vértices conectados, ele possui 3 componentes conexos.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">4. Teorema do Aperto de Mãos</h2>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 dark:text-gray-100">Teorema Fundamental</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Em qualquer grafo, a soma dos graus de todos os vértices é igual ao dobro do número de arestas.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 rounded-r-lg mb-4">
                    <p className="font-mono text-xl text-center dark:text-gray-200">∑ deg(v) = 2|E|</p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                      v ∈ V
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2 dark:text-gray-200">Por quê?</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Cada aresta contribui com 2 para a soma total dos graus (um para cada extremidade).
                    </p>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                    <p className="font-semibold text-sm mb-2 dark:text-gray-200">🔍 Consequência Importante:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Em qualquer grafo, o número de vértices com grau ímpar é sempre <strong>par</strong>.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">5. Distância e Diâmetro</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Distância d(u, v)</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Comprimento do menor caminho entre dois vértices u e v.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded font-mono text-xs dark:text-gray-300">
                      d(u, v) = número mínimo de arestas
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Se não existe caminho: d(u, v) = ∞
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Diâmetro diam(G)</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Maior distância entre qualquer par de vértices no grafo.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded font-mono text-xs dark:text-gray-300">
                      diam(G) = max d(u, v)
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Indica o "tamanho" do grafo
                    </p>
                  </div>
                </div>
              </section>

              <PageNavigation
                prev={{ url: '/teoria/introducao', title: 'Introdução aos Grafos' }}
                next={{ url: '/teoria/matrizes', title: 'Representação Matricial' }}
              />

              <div className="mt-12 flex justify-between">
                <Link href="/teoria/introducao" className="btn-secondary">
                  ← Anterior: Introdução aos Grafos
                </Link>
                <Link href="/teoria/matrizes" className="btn-primary">
                  Próximo: Representação Matricial →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <PrintButton />
      <FocusMode />
      <ShareButtons title="Caminhos e Ciclos" />
    </>
  )
}
