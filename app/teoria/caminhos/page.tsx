'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

export default function CaminhosPage() {
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
              <span className="text-gray-900">Caminhos e Ciclos</span>
            </nav>

            <h1 className="text-4xl font-bold mb-8">Caminhos e Ciclos em Grafos</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Hierarquia: Passeio → Trilha → Caminho</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Passeio (Walk)</h3>
                  <p className="text-gray-700 mb-4">
                    Uma sequência de vértices v₀, v₁, v₂, ..., vₙ onde cada par consecutivo (vᵢ, vᵢ₊₁) forma uma aresta do grafo.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Características:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Vértices podem se repetir</li>
                      <li>• Arestas podem se repetir</li>
                      <li>• É a forma mais geral de percurso</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-blue-50 p-3 rounded">
                    <p className="text-sm"><strong>Exemplo:</strong> A → B → C → B → D</p>
                    <p className="text-xs text-gray-600 mt-1">(vértice B se repete)</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Trilha (Trail)</h3>
                  <p className="text-gray-700 mb-4">
                    Um passeio onde <strong>nenhuma aresta se repete</strong>.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Características:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Vértices podem se repetir</li>
                      <li>• Arestas NÃO podem se repetir ✓</li>
                      <li>• Mais restritivo que passeio</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-blue-50 p-3 rounded">
                    <p className="text-sm"><strong>Exemplo:</strong> A → B → C → D → B → E</p>
                    <p className="text-xs text-gray-600 mt-1">(vértice B se repete, mas cada aresta é única)</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Caminho (Path)</h3>
                  <p className="text-gray-700 mb-4">
                    Uma trilha onde <strong>nenhum vértice se repete</strong> (exceto possivelmente o primeiro e o último).
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Características:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Vértices NÃO podem se repetir ✓</li>
                      <li>• Arestas NÃO podem se repetir ✓</li>
                      <li>• É a forma mais restritiva</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-blue-50 p-3 rounded">
                    <p className="text-sm"><strong>Exemplo:</strong> A → B → C → D → E</p>
                    <p className="text-xs text-gray-600 mt-1">(todos os vértices são únicos)</p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <p className="font-semibold text-lg mb-2">📌 Resumo da Hierarquia:</p>
                  <p className="font-mono text-sm">
                    Caminho ⊂ Trilha ⊂ Passeio
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Todo caminho é uma trilha, e toda trilha é um passeio.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Ciclos</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Definição de Ciclo</h3>
                  <p className="text-gray-700 mb-4">
                    Um ciclo é um caminho que começa e termina no mesmo vértice, com comprimento mínimo 3.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-mono text-sm mb-2">v₀ → v₁ → v₂ → ... → vₙ → v₀</p>
                    <p className="text-sm text-gray-600">onde v₀ = vₙ e n ≥ 3</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Ciclo Simples</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Ciclo onde não há repetição de vértices (exceto o início/fim).
                    </p>
                    <div className="bg-gray-100 p-3 rounded">
                      <p className="text-xs font-mono">A → B → C → D → A</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Ciclo Hamiltoniano</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Ciclo que visita cada vértice do grafo exatamente uma vez.
                    </p>
                    <div className="bg-emerald-50 p-2 rounded text-xs">
                      Importante em problemas de otimização
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Ciclo Euleriano</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Ciclo que passa por todas as arestas exatamente uma vez.
                    </p>
                    <div className="bg-emerald-50 p-2 rounded text-xs">
                      Existe se todos os vértices têm grau par
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Grafo Acíclico</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Grafo que não contém nenhum ciclo.
                    </p>
                    <div className="bg-emerald-50 p-2 rounded text-xs">
                      Árvores são grafos acíclicos conexos
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Conectividade</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Grafo Conexo</h3>
                  <p className="text-gray-700 mb-4">
                    Um grafo é <strong>conexo</strong> se existe um caminho entre qualquer par de vértices.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-sm mb-2">✓ Grafo Conexo</p>
                      <p className="text-xs text-gray-600">
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

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Componentes Conexos</h3>
                  <p className="text-gray-700 mb-4">
                    Em um grafo desconexo, cada subgrafo maximal conexo é chamado de <strong>componente conexo</strong>.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm"><strong>Exemplo:</strong></p>
                    <p className="text-sm text-gray-700 mt-2">
                      Se um grafo tem 3 "ilhas" separadas de vértices conectados, ele possui 3 componentes conexos.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. Teorema do Aperto de Mãos</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Teorema Fundamental</h3>
                  <p className="text-gray-700 mb-4">
                    Em qualquer grafo, a soma dos graus de todos os vértices é igual ao dobro do número de arestas.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-4">
                    <p className="font-mono text-xl text-center">∑ deg(v) = 2|E|</p>
                    <p className="text-center text-sm text-gray-600 mt-2">
                      v ∈ V
                    </p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Por quê?</p>
                    <p className="text-sm text-gray-700">
                      Cada aresta contribui com 2 para a soma total dos graus (um para cada extremidade).
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                    <p className="font-semibold text-sm mb-2">🔍 Consequência Importante:</p>
                    <p className="text-sm text-gray-700">
                      Em qualquer grafo, o número de vértices com grau ímpar é sempre <strong>par</strong>.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">5. Distância e Diâmetro</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Distância d(u, v)</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Comprimento do menor caminho entre dois vértices u e v.
                    </p>
                    <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                      d(u, v) = número mínimo de arestas
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Se não existe caminho: d(u, v) = ∞
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Diâmetro diam(G)</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Maior distância entre qualquer par de vértices no grafo.
                    </p>
                    <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                      diam(G) = max d(u, v)
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Indica o "tamanho" do grafo
                    </p>
                  </div>
                </div>
              </section>

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
    </>
  )
}