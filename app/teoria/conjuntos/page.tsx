import Link from 'next/link'
import Header from '@/app/components/Header'

export default function ConjuntosPage() {
  return (
    <div className="container-paper min-h-screen">
      <Header />
      
      <main className="p-8">
        <Link href="/" className="text-sm hover:underline mb-4 inline-block">
          ← Voltar ao início
        </Link>
        
        <h1 className="section-title">II. Fundamentos de Conjuntos</h1>
        
        <section className="print-break mb-8">
          <h2 className="subsection-title">Conjunto Potência</h2>
          
          <div className="definition-box">
            <p className="font-bold uppercase mb-2">Definição:</p>
            <p>O conjunto potência 2<sup>A</sup> é a família de todos os subconjuntos de um conjunto A.</p>
          </div>
          
          <div className="formula-box">
            |2<sup>A</sup>| = 2<sup>|A|</sup>
          </div>
          
          <div className="bg-gray-50 p-4 border-l-4 border-black my-4">
            <p className="font-semibold">Exemplo:</p>
            <p>Se A = {1, 2}, então:</p>
            <p className="font-mono">2<sup>A</sup> = {∅, {1}, {2}, {1,2}}</p>
            <p>|2<sup>A</sup>| = 2<sup>2</sup> = 4 elementos</p>
          </div>
        </section>

        <section className="print-break mb-8">
          <h2 className="subsection-title">Produto Cartesiano</h2>
          
          <div className="definition-box">
            <p className="font-bold uppercase mb-2">Definição:</p>
            <p>A × B = {(a,b) | a ∈ A e b ∈ B}</p>
          </div>
          
          <div className="formula-box">
            |A × B| = |A| × |B|
          </div>
          
          <div className="bg-gray-50 p-4 border-l-4 border-black my-4">
            <p className="font-semibold">Propriedade importante:</p>
            <p>A × B ≠ B × A (quando A ≠ B e ambos não vazios)</p>
          </div>
        </section>

        <section className="print-break mb-8">
          <h2 className="subsection-title">Tipos de Funções</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-black">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-3 text-left">Tipo</th>
                  <th className="p-3 text-left">Definição</th>
                  <th className="p-3 text-left">Propriedade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-black">
                  <td className="p-3 font-semibold">Total</td>
                  <td className="p-3">f: A → B</td>
                  <td className="p-3">Domínio = A completo</td>
                </tr>
                <tr className="border-t border-black bg-gray-50">
                  <td className="p-3 font-semibold">Injetora</td>
                  <td className="p-3">f(x) = f(y) ⇒ x = y</td>
                  <td className="p-3">Um para um</td>
                </tr>
                <tr className="border-t border-black">
                  <td className="p-3 font-semibold">Sobrejetora</td>
                  <td className="p-3">∀b ∈ B, ∃a ∈ A: f(a) = b</td>
                  <td className="p-3">Cobre todo B</td>
                </tr>
                <tr className="border-t border-black bg-gray-50">
                  <td className="p-3 font-semibold">Bijetora</td>
                  <td className="p-3">Injetora + Sobrejetora</td>
                  <td className="p-3">Correspondência 1-1</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="formula-box mt-4">
            Número de funções totais de A em B = |B|<sup>|A|</sup>
          </div>
        </section>

        <section className="print-break mb-8">
          <h2 className="subsection-title">Relações Binárias</h2>
          
          <h3 className="font-semibold text-lg mt-4 mb-2">Propriedades de Relações</h3>
          
          <div className="space-y-3">
            <div className="p-3 border-l-4 border-black bg-gray-50">
              <p><strong>Reflexiva (R):</strong> ∀a ∈ A, (a,a) ∈ R</p>
            </div>
            <div className="p-3 border-l-4 border-black bg-gray-50">
              <p><strong>Simétrica (S):</strong> (a,b) ∈ R → (b,a) ∈ R</p>
            </div>
            <div className="p-3 border-l-4 border-black bg-gray-50">
              <p><strong>Anti-simétrica (AS):</strong> (a,b) ∈ R ∧ (b,a) ∈ R → a = b</p>
            </div>
            <div className="p-3 border-l-4 border-black bg-gray-50">
              <p><strong>Transitiva (T):</strong> (a,b) ∈ R ∧ (b,c) ∈ R → (a,c) ∈ R</p>
            </div>
          </div>
          
          <div className="theorem-box mt-6">
            <p className="font-bold uppercase mb-2">Relação de Equivalência = R + S + T</p>
            <p>Induz uma partição do conjunto em classes de equivalência</p>
          </div>
          
          <div className="theorem-box">
            <p className="font-bold uppercase mb-2">Relação de Ordem Parcial = R + AS + T</p>
            <p>Define uma estrutura de ordenação no conjunto</p>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t-2 border-black flex justify-between">
          <Link href="/" className="hover:underline">
            ← Voltar ao início
          </Link>
          <Link href="/teoria/introducao" className="hover:underline">
            Introdução aos Grafos →
          </Link>
        </div>
      </main>
    </div>
  )
}