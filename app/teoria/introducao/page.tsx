import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

export default function IntroducaoPage() {
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
            <Link href="/teoria/introducao" className="text-gray-600 hover:text-green-600">
              Teoria
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Introdução aos Grafos</span>
          </nav>
        </div>
      </div>
      
      <main className="py-8">
        <div className="container-modern px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title">Introdução aos Grafos</h1>
            
            {/* Introdução */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A Teoria dos Grafos é um ramo da matemática que estuda as relações entre objetos de um determinado conjunto. 
                Os grafos são estruturas matemáticas usadas para modelar relações entre pares de objetos.
              </p>
              <p className="text-gray-700">
                Nesta seção, exploraremos os conceitos fundamentais, tipos de grafos e suas aplicações práticas.
              </p>
            </div>
            
            {/* Definição de Grafo */}
            <section className="mb-12">
              <h2 className="subsection-title">Definição Fundamental</h2>
              
              <div className="definition-box">
                <p className="font-bold uppercase mb-2 text-emerald-900">Definição de Grafo:</p>
                <p>Um grafo G é definido como um par ordenado G = (V, E), onde:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>V</strong> é um conjunto finito não vazio de vértices (ou nós)</li>
                  <li><strong>E</strong> é um conjunto de arestas que conectam pares de vértices</li>
                </ul>
              </div>
            </section>

            {/* Elementos Básicos */}
            <section className="mb-12">
              <h2 className="subsection-title">Elementos Básicos</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-lg mb-3">Vértices</h3>
                  <p className="text-gray-700 mb-2">
                    São os pontos ou nós do grafo. Representam os objetos ou entidades do problema.
                  </p>
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                    V = {v₁, v₂, v₃, ..., vₙ}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-lg mb-3">Arestas</h3>
                  <p className="text-gray-700 mb-2">
                    São as conexões entre vértices. Representam as relações entre os objetos.
                  </p>
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                    E = {e₁, e₂, e₃, ..., eₘ}
                  </div>
                </div>
              </div>
            </section>

            {/* Elementos Especiais */}
            <section className="mb-12">
              <h2 className="subsection-title">Elementos Especiais</h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
                  <h3 className="font-semibold mb-2">Loops</h3>
                  <p>Arestas que conectam um vértice a si mesmo. Representadas como e = (v,v).</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-emerald-500">
                  <h3 className="font-semibold mb-2">Arestas Paralelas (ou Múltiplas)</h3>
                  <p>Duas ou mais arestas que conectam o mesmo par de vértices.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-yellow-500">
                  <h3 className="font-semibold mb-2">Vértices Isolados</h3>
                  <p>Vértices que não possuem arestas incidentes (grau zero).</p>
                </div>
              </div>
            </section>

            {/* Tipos de Grafos */}
            <section className="mb-12">
              <h2 className="subsection-title">Tipos de Grafos</h2>
              
              <div className="theorem-box">
                <p className="font-bold uppercase mb-2 text-green-900">Grafo Simples</p>
                <p>Um grafo que não possui loops nem arestas paralelas.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="card">
                  <h3 className="font-bold mb-2">Grafos Direcionados (Dígrafos)</h3>
                  <p className="text-gray-700 text-sm">
                    As arestas têm direção, representadas por pares ordenados de vértices.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="font-bold mb-2">Grafos Não-direcionados</h3>
                  <p className="text-gray-700 text-sm">
                    As arestas não têm direção, a relação é simétrica.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="font-bold mb-2">Grafos Ponderados</h3>
                  <p className="text-gray-700 text-sm">
                    As arestas possuem pesos ou custos associados.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="font-bold mb-2">Grafos Bipartidos</h3>
                  <p className="text-gray-700 text-sm">
                    Vértices divididos em dois conjuntos disjuntos, com arestas apenas entre os conjuntos.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações */}
            <section className="mb-12">
              <h2 className="subsection-title">Aplicações Práticas</h2>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
                <p className="font-bold mb-3">Grafos estão em toda parte!</p>
                <p className="text-gray-700">
                  A teoria dos grafos tem aplicações em diversas áreas do conhecimento e problemas do mundo real.
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-green-600 mb-2">🗺️ Mapas e Rotas</h3>
                  <p className="text-gray-700">
                    <strong>Vértices:</strong> Cidades, cruzamentos<br/>
                    <strong>Arestas:</strong> Estradas, caminhos<br/>
                    <strong>Aplicação:</strong> GPS, sistemas de navegação
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-green-600 mb-2">💻 Redes de Computadores</h3>
                  <p className="text-gray-700">
                    <strong>Vértices:</strong> Computadores, servidores, roteadores<br/>
                    <strong>Arestas:</strong> Conexões de rede<br/>
                    <strong>Aplicação:</strong> Internet, redes locais
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-green-600 mb-2">👥 Redes Sociais</h3>
                  <p className="text-gray-700">
                    <strong>Vértices:</strong> Pessoas, páginas<br/>
                    <strong>Arestas:</strong> Amizades, seguidos<br/>
                    <strong>Aplicação:</strong> Facebook, Instagram, LinkedIn
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-green-600 mb-2">🧪 Estruturas Químicas</h3>
                  <p className="text-gray-700">
                    <strong>Vértices:</strong> Átomos<br/>
                    <strong>Arestas:</strong> Ligações químicas<br/>
                    <strong>Aplicação:</strong> Modelagem molecular
                  </p>
                </div>
              </div>
            </section>

            {/* Problemas Clássicos */}
            <section className="mb-12">
              <h2 className="subsection-title">Problemas Clássicos</h2>
              
              <div className="space-y-6">
                <div className="definition-box">
                  <p className="font-bold uppercase mb-2 text-emerald-900">Problema do Caixeiro Viajante</p>
                  <p>Encontrar o menor caminho que visita todas as cidades exatamente uma vez e retorna à origem.</p>
                </div>
                
                <div className="definition-box">
                  <p className="font-bold uppercase mb-2 text-emerald-900">Problema das Pontes de Königsberg</p>
                  <p>Histórico problema que deu origem à teoria dos grafos. É possível atravessar todas as pontes uma única vez?</p>
                </div>
                
                <div className="definition-box">
                  <p className="font-bold uppercase mb-2 text-emerald-900">Coloração de Grafos</p>
                  <p>Atribuir cores aos vértices de modo que vértices adjacentes tenham cores diferentes.</p>
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
                    href="/ref/02. Considerações Iniciais Sobre Grafos.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-4 rounded border hover:border-green-600 transition-colors"
                  >
                    <p className="font-semibold text-green-600">02. Considerações Iniciais Sobre Grafos.pdf</p>
                    <p className="text-sm text-gray-600">Material completo sobre introdução aos grafos</p>
                  </a>
                </div>
              </div>
            </section>
            
            {/* Navegação */}
            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/teoria/conjuntos" className="btn-secondary">
                ← Anterior: Fundamentos de Conjuntos
              </Link>
              <Link href="/teoria/caminhos" className="btn-primary">
                Próximo: Caminhos e Ciclos →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}