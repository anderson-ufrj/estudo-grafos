import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

export default function CaminhosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ModernHeader />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-modern px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-600 hover:text-green-600">
              Início
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/teoria/caminhos" className="text-gray-600 hover:text-green-600">
              Teoria
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Caminhos e Ciclos</span>
          </nav>
        </div>
      </div>
      
      <main className="py-8">
        <div className="container-modern px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title">Caminhos e Ciclos</h1>
            
            {/* Introdução */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                O estudo de caminhos e ciclos é fundamental na teoria dos grafos, pois permite 
                analisar como os vértices estão conectados e identificar padrões estruturais importantes.
              </p>
            </div>
            
            {/* Hierarquia Fundamental */}
            <section className="mb-12">
              <div className="answer-box">
                <h2 className="text-2xl font-bold mb-4 text-center">HIERARQUIA FUNDAMENTAL</h2>
                <div className="text-center text-3xl font-mono">
                  CAMINHO ⊆ TRILHA ⊆ PASSEIO
                </div>
              </div>
            </section>

            {/* Definições */}
            <section className="mb-12">
              <h2 className="subsection-title">Definições Fundamentais</h2>
              
              {/* Passeio */}
              <div className="definition-box mb-6">
                <p className="font-bold uppercase mb-2 text-emerald-900">Passeio (Walk)</p>
                <p className="mb-3">
                  Uma sequência alternada de vértices e arestas, começando e terminando em vértices.
                </p>
                <div className="bg-white p-4 rounded border border-emerald-300">
                  <p className="font-semibold mb-2">Características:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Pode repetir vértices ✓</li>
                    <li>Pode repetir arestas ✓</li>
                    <li>Comprimento = número de arestas</li>
                  </ul>
                  <p className="mt-3 font-semibold">Passeio fechado: inicia e termina no mesmo vértice</p>
                </div>
              </div>
              
              {/* Trilha */}
              <div className="definition-box mb-6">
                <p className="font-bold uppercase mb-2 text-emerald-900">Trilha (Trail)</p>
                <p className="mb-3">
                  Um passeio que não repete arestas.
                </p>
                <div className="bg-white p-4 rounded border border-emerald-300">
                  <p className="font-semibold mb-2">Características:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Pode repetir vértices ✓</li>
                    <li>NÃO pode repetir arestas ✗</li>
                  </ul>
                  <p className="mt-3 font-semibold">Trilha fechada = Circuito</p>
                </div>
              </div>
              
              {/* Caminho */}
              <div className="definition-box mb-6">
                <p className="font-bold uppercase mb-2 text-emerald-900">Caminho (Path)</p>
                <p className="mb-3">
                  Um passeio que não repete vértices (exceto possivelmente o primeiro e o último).
                </p>
                <div className="bg-white p-4 rounded border border-emerald-300">
                  <p className="font-semibold mb-2">Características:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>NÃO pode repetir vértices ✗</li>
                    <li>NÃO pode repetir arestas ✗</li>
                  </ul>
                  <p className="mt-3 font-semibold">Caminho fechado = Ciclo</p>
                </div>
              </div>
            </section>

            {/* Tabela Comparativa */}
            <section className="mb-12">
              <h2 className="subsection-title">Comparação Visual</h2>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="px-6 py-3 text-left">Conceito</th>
                      <th className="px-6 py-3 text-center">Repete Vértices?</th>
                      <th className="px-6 py-3 text-center">Repete Arestas?</th>
                      <th className="px-6 py-3 text-left">Versão Fechada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-semibold">Passeio</td>
                      <td className="px-6 py-4 text-center text-green-600">✓ Sim</td>
                      <td className="px-6 py-4 text-center text-green-600">✓ Sim</td>
                      <td className="px-6 py-4">Passeio fechado</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Trilha</td>
                      <td className="px-6 py-4 text-center text-green-600">✓ Sim</td>
                      <td className="px-6 py-4 text-center text-red-600">✗ Não</td>
                      <td className="px-6 py-4">Circuito</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Caminho</td>
                      <td className="px-6 py-4 text-center text-red-600">✗ Não</td>
                      <td className="px-6 py-4 text-center text-red-600">✗ Não</td>
                      <td className="px-6 py-4">Ciclo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Conectividade */}
            <section className="mb-12">
              <h2 className="subsection-title">Conectividade</h2>
              
              <div className="theorem-box">
                <p className="font-bold uppercase mb-2 text-green-900">Vértices Conectados</p>
                <p>Dois vértices u e v são conectados se existe um caminho de u para v.</p>
              </div>
              
              <div className="theorem-box mt-4">
                <p className="font-bold uppercase mb-2 text-green-900">Grafo Conexo</p>
                <p>Um grafo é conexo se existe um caminho entre quaisquer dois vértices.</p>
                <div className="formula-box mt-4">
                  Para todo u, v ∈ V, existe um caminho conectando u a v
                </div>
              </div>
              
              <div className="theorem-box mt-4">
                <p className="font-bold uppercase mb-2 text-green-900">Componente Conexo</p>
                <p>Subgrafo maximal conexo de G. Todo grafo pode ser particionado em componentes conexos.</p>
                <p className="mt-2 font-mono">ω(G) = número de componentes conexos</p>
              </div>
            </section>

            {/* Teoremas Importantes */}
            <section className="mb-12">
              <h2 className="subsection-title">Teoremas Fundamentais</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600">
                  <h3 className="font-bold mb-2">Teorema 1</h3>
                  <p>Todo passeio u-v contém um caminho u-v.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600">
                  <h3 className="font-bold mb-2">Teorema 2: Caracterização de Grafos Bipartidos</h3>
                  <p className="mb-2">G é bipartido ⟺ todos os ciclos têm comprimento par</p>
                  <p className="text-sm text-gray-600">
                    Este teorema fornece uma maneira eficiente de verificar se um grafo é bipartido.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600">
                  <h3 className="font-bold mb-2">Teorema 3</h3>
                  <p>Grafo conexo com n vértices tem m ≥ n-1 arestas.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600">
                  <h3 className="font-bold mb-2">Teorema 4</h3>
                  <p>Grafo simples com m > (n-1)(n-2)/2 arestas é conexo.</p>
                </div>
              </div>
            </section>

            {/* Fórmulas de Conectividade */}
            <section className="mb-12">
              <h2 className="subsection-title">Fórmulas de Conectividade</h2>
              
              <div className="formula-box">
                <p className="text-lg mb-4">Para grafo com n vértices e k componentes:</p>
                <p className="text-2xl font-bold">n - k ≤ m ≤ (n-k)(n-k+1)/2</p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
                <p className="font-semibold text-amber-900 mb-2">💡 Dica de Estudo:</p>
                <p>Memorize estas relações! Elas aparecem frequentemente em exercícios sobre conectividade.</p>
              </div>
            </section>

            {/* Algoritmos */}
            <section className="mb-12">
              <h2 className="subsection-title">Algoritmos Relacionados</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="font-bold mb-2">Busca em Largura (BFS)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Explora todos os vértices por níveis de distância.
                  </p>
                  <p className="text-sm font-semibold">Aplicações:</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5">
                    <li>Menor caminho (grafos não ponderados)</li>
                    <li>Testar conectividade</li>
                    <li>Encontrar componentes</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h3 className="font-bold mb-2">Busca em Profundidade (DFS)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Explora o mais profundo possível antes de retroceder.
                  </p>
                  <p className="text-sm font-semibold">Aplicações:</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5">
                    <li>Detectar ciclos</li>
                    <li>Ordenação topológica</li>
                    <li>Encontrar componentes fortemente conexos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Material de Referência */}
            <section className="mb-12">
              <h2 className="subsection-title">Material de Estudo</h2>
              
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-bold mb-4">📚 Material do Professor</h3>
                <div className="space-y-3">
                  <a 
                    href="/ref/04. Caminhos e Ciclos.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-4 rounded border hover:border-green-600 transition-colors"
                  >
                    <p className="font-semibold text-green-600">04. Caminhos e Ciclos.pdf</p>
                    <p className="text-sm text-gray-600">Material completo sobre caminhos, ciclos e conectividade</p>
                  </a>
                </div>
              </div>
            </section>
            
            {/* Navegação */}
            <div className="flex justify-between items-center pt-8 border-t">
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
  )
}