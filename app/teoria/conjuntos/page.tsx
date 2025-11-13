'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'
import Breadcrumb from '@/app/components/Breadcrumb'
import PageNavigation from '@/app/components/PageNavigation'
import PrintButton from '@/app/components/PrintButton'

export default function ConjuntosPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <ModernHeader />

        <main className="container-modern px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { label: 'Início', href: '/' },
                { label: 'Teoria', href: '/teoria/conjuntos' },
                { label: 'Fundamentos de Conjuntos' }
              ]}
              currentStep={1}
              totalSteps={5}
            />

            <h1 className="text-4xl font-bold mb-8 dark:text-gray-100">Fundamentos de Conjuntos</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Teoria dos Conjuntos</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Definição de Conjunto</h3>
                  <p className="text-gray-700 mb-4">
                    Um conjunto é uma coleção bem definida de objetos distintos, chamados elementos ou membros do conjunto.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-mono text-sm">
                      Notação: A = {'{1, 2, 3, 4}'}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Lê-se: A é o conjunto formado pelos elementos 1, 2, 3 e 4.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Formas de Representação</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>Por extensão:</strong> Listar todos os elementos
                        <p className="text-gray-600 text-sm mt-1">A = {'{a, e, i, o, u}'}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>Por compreensão:</strong> Descrever uma propriedade
                        <p className="text-gray-600 text-sm mt-1">B = {'{x | x é vogal do alfabeto}'}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>Diagrama de Venn:</strong> Representação visual
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-3">Relação de Pertinência</h3>
                  <div className="space-y-2">
                    <p className="font-mono">x ∈ A → x pertence a A</p>
                    <p className="font-mono">x ∉ A → x não pertence a A</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Conjuntos Especiais</h3>
                  <ul className="space-y-2">
                    <li><strong>Conjunto vazio:</strong> ∅ ou {'{}'}</li>
                    <li><strong>Conjunto universo:</strong> U (contém todos os elementos do contexto)</li>
                    <li><strong>Conjunto unitário:</strong> possui apenas um elemento</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Operações com Conjuntos</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">União (A ∪ B)</h3>
                    <p className="text-gray-700 mb-2">
                      Elementos que pertencem a A ou B (ou ambos)
                    </p>
                    <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                      A ∪ B = {'{x | x ∈ A ou x ∈ B}'}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">Interseção (A ∩ B)</h3>
                    <p className="text-gray-700 mb-2">
                      Elementos que pertencem a A e B simultaneamente
                    </p>
                    <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                      A ∩ B = {'{x | x ∈ A e x ∈ B}'}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">Diferença (A - B)</h3>
                    <p className="text-gray-700 mb-2">
                      Elementos que pertencem a A mas não a B
                    </p>
                    <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                      A - B = {'{x | x ∈ A e x ∉ B}'}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">Complemento (Aᶜ)</h3>
                    <p className="text-gray-700 mb-2">
                      Elementos do universo que não estão em A
                    </p>
                    <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                      Aᶜ = U - A = {'{x | x ∈ U e x ∉ A}'}
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Propriedades das Operações</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Propriedades Fundamentais</h3>
                  <div className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-600">Comutativa</h4>
                        <p className="font-mono text-sm">A ∪ B = B ∪ A</p>
                        <p className="font-mono text-sm">A ∩ B = B ∩ A</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600">Associativa</h4>
                        <p className="font-mono text-sm">(A ∪ B) ∪ C = A ∪ (B ∪ C)</p>
                        <p className="font-mono text-sm">(A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600">Distributiva</h4>
                        <p className="font-mono text-sm">A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</p>
                        <p className="font-mono text-sm">A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600">Leis de De Morgan</h4>
                        <p className="font-mono text-sm">(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ</p>
                        <p className="font-mono text-sm">(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. Produto Cartesiano</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Definição</h3>
                  <p className="text-gray-700 mb-4">
                    O produto cartesiano de dois conjuntos A e B é o conjunto de todos os pares ordenados (a,b) onde a ∈ A e b ∈ B.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-mono text-sm">A × B = {'{(a,b) | a ∈ A e b ∈ B}'}</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold">Exemplo:</p>
                    <p className="font-mono text-sm">A = {'{1, 2}'}, B = {'{a, b}'}</p>
                    <p className="font-mono text-sm">A × B = {'{(1,a), (1,b), (2,a), (2,b)}'}</p>
                  </div>
                </div>
              </section>

              <PageNavigation next={{ url: '/teoria/introducao', title: 'Introdução aos Grafos' }} />

              <div className="mt-12 flex justify-between">
                <Link href="/" className="btn-secondary">
                  ← Voltar ao Início
                </Link>
                <Link href="/teoria/introducao" className="btn-primary">
                  Próximo: Introdução aos Grafos →
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
