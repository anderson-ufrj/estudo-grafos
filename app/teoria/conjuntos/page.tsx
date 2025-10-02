'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

export default function ConjuntosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ModernHeader />
      
      <div className="bg-white border-b">
        <div className="container-modern px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-600 hover:text-green-600">
              Início
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/teoria/conjuntos" className="text-gray-600 hover:text-green-600">
              Teoria
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Fundamentos de Conjuntos</span>
          </nav>
        </div>
      </div>
      
      <main className="py-8">
        <div className="container-modern px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title">Fundamentos de Conjuntos</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Os fundamentos de conjuntos formam a base matemática essencial para o estudo 
                de Teoria dos Grafos. Nesta seção, exploraremos os conceitos fundamentais que 
                serão utilizados ao longo de todo o curso.
              </p>
            </div>
            
            <section className="mb-12">
              <h2 className="subsection-title">Conjunto Potência</h2>
              
              <div className="definition-box">
                <p className="font-bold uppercase mb-2 text-emerald-900">Definição:</p>
                <p>O conjunto potência 2^A é a família de todos os subconjuntos de um conjunto A.</p>
              </div>
              
              <div className="formula-box">
                <p className="text-2xl">|2^A| = 2^|A|</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 my-6">
                <p className="font-semibold mb-3">Exemplo Prático:</p>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                  <p>Se A = {1, 2}, então:</p>
                  <p>2^A = {∅, {1}, {2}, {1,2}}</p>
                  <p>|2^A| = 2^2 = 4 elementos</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="subsection-title">Produto Cartesiano</h2>
              
              <div className="definition-box">
                <p className="font-bold uppercase mb-2 text-emerald-900">Definição:</p>
                <p>A × B = {(a,b) | a ∈ A e b ∈ B}</p>
              </div>
              
              <div className="formula-box">
                <p className="text-2xl">|A × B| = |A| × |B|</p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <p className="font-semibold text-amber-900 mb-2">Propriedade importante:</p>
                <p>A × B ≠ B × A (quando A ≠ B e ambos não vazios)</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="subsection-title">Tipos de Funções</h2>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="px-6 py-3 text-left">Tipo</th>
                      <th className="px-6 py-3 text-left">Definição</th>
                      <th className="px-6 py-3 text-left">Propriedade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-semibold">Total</td>
                      <td className="px-6 py-4">f: A → B</td>
                      <td className="px-6 py-4">Domínio = A completo</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Injetora</td>
                      <td className="px-6 py-4">f(x) = f(y) ⇒ x = y</td>
                      <td className="px-6 py-4">Um para um</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-semibold">Sobrejetora</td>
                      <td className="px-6 py-4">∀b ∈ B, ∃a ∈ A: f(a) = b</td>
                      <td className="px-6 py-4">Cobre todo B</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Bijetora</td>
                      <td className="px-6 py-4">Injetora + Sobrejetora</td>
                      <td className="px-6 py-4">Correspondência 1-1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="formula-box mt-6">
                <p className="text-xl">Número de funções totais de A em B = |B|^|A|</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="subsection-title">Relações Binárias</h2>
              
              <h3 className="font-bold text-lg mt-6 mb-4">Propriedades de Relações</h3>
              
              <div className="grid gap-4">
                <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
                  <p><strong>Reflexiva (R):</strong> ∀a ∈ A, (a,a) ∈ R</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
                  <p><strong>Simétrica (S):</strong> (a,b) ∈ R → (b,a) ∈ R</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-yellow-500">
                  <p><strong>Anti-simétrica (AS):</strong> (a,b) ∈ R ∧ (b,a) ∈ R → a = b</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-red-500">
                  <p><strong>Transitiva (T):</strong> (a,b) ∈ R ∧ (b,c) ∈ R → (a,c) ∈ R</p>
                </div>
              </div>
              
              <div className="theorem-box mt-8">
                <p className="font-bold uppercase mb-2 text-green-900">Relação de Equivalência = R + S + T</p>
                <p>Induz uma partição do conjunto em classes de equivalência</p>
              </div>
              
              <div className="theorem-box">
                <p className="font-bold uppercase mb-2 text-green-900">Relação de Ordem Parcial = R + AS + T</p>
                <p>Define uma estrutura de ordenação no conjunto</p>
              </div>
            </section>
            
            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/" className="btn-secondary">
                ← Voltar ao início
              </Link>
              <Link href="/teoria/introducao" className="btn-primary">
                Próximo: Introdução aos Grafos →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}