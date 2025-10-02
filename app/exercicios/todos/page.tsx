import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

export default function ExerciciosTodosPage() {
  const listas = [
    {
      titulo: "Lista 1 - Fundamentos de Conjuntos",
      arquivo: "Lista_1.pdf",
      descricao: "Exercícios sobre relações binárias, funções, propriedades e relações de ordem",
      topicos: [
        "Relações binárias e suas propriedades",
        "Funções injetoras, sobrejetoras e bijetoras", 
        "Relações de equivalência e ordem parcial",
        "Supremo, ínfimo e elementos extremos"
      ]
    },
    {
      titulo: "Lista 2 - Teoria dos Grafos",
      arquivo: "Lista_2.pdf",
      descricao: "Exercícios sobre conceitos básicos de grafos, subgrafos e isomorfismo",
      topicos: [
        "Identificação de elementos (vértices, arestas, loops)",
        "Grafos bipartidos e suas propriedades",
        "Subgrafos e operações com grafos",
        "Isomorfismo entre grafos",
        "Sequências de graus"
      ]
    },
    {
      titulo: "Lista de Exercícios - 30/09/2025",
      arquivo: "Lista_Exercícios_30Setembro2025.pdf",
      descricao: "Lista adicional com exercícios variados",
      topicos: []
    },
    {
      titulo: "Lista Limitada - 30/09/2025",
      arquivo: "ListaLim_Exercícios_30Setembro2025.pdf",
      descricao: "Lista com escopo específico de exercícios",
      topicos: []
    }
  ]

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
            <Link href="/exercicios/todos" className="text-gray-600 hover:text-green-600">
              Exercícios
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Todas as Listas</span>
          </nav>
        </div>
      </div>
      
      <main className="py-8">
        <div className="container-modern px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title">Listas de Exercícios</h1>
            
            {/* Introdução */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Aqui você encontra todas as listas de exercícios disponibilizadas pelo Prof. Ricardo Martins
                para a disciplina de Teoria dos Grafos.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <p className="font-semibold text-green-900 mb-2">💡 Dica de Estudo:</p>
                <p className="text-gray-700">
                  Tente resolver os exercícios antes de consultar as soluções. 
                  A prática é fundamental para o aprendizado!
                </p>
              </div>
            </div>
            
            {/* Listas de Exercícios */}
            <section className="mb-12">
              <h2 className="subsection-title">📝 Listas Disponíveis</h2>
              
              <div className="space-y-6">
                {listas.map((lista, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border hover:border-green-600 transition-all">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-xl text-gray-900">{lista.titulo}</h3>
                        <a 
                          href={`/ref/${lista.arquivo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm"
                        >
                          Abrir PDF →
                        </a>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{lista.descricao}</p>
                      
                      {lista.topicos.length > 0 && (
                        <>
                          <p className="font-semibold text-gray-800 mb-2">Principais tópicos:</p>
                          <ul className="list-disc ml-6 space-y-1 text-gray-600">
                            {lista.topicos.map((topico, i) => (
                              <li key={i}>{topico}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Seção de Resoluções */}
            <section className="mb-12">
              <h2 className="subsection-title">✏️ Resoluções</h2>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                <p className="font-semibold text-amber-900 mb-2">⚠️ Em Desenvolvimento</p>
                <p className="text-gray-700">
                  As resoluções dos exercícios serão adicionadas gradualmente. 
                  Por enquanto, pratique resolvendo os exercícios por conta própria!
                </p>
              </div>
              
              <div className="card">
                <h3 className="font-bold mb-2">Como estudar com as listas:</h3>
                <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                  <li>Leia o material teórico correspondente</li>
                  <li>Tente resolver os exercícios sem consultar as respostas</li>
                  <li>Compare sua solução com a resolução (quando disponível)</li>
                  <li>Identifique pontos de dificuldade para revisar</li>
                  <li>Refaça exercícios similares para fixar o conteúdo</li>
                </ol>
              </div>
            </section>

            {/* Exercícios por Tópico */}
            <section className="mb-12">
              <h2 className="subsection-title">📚 Exercícios por Tópico</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/exercicios/conjuntos" className="card hover:border-green-600 transition-colors">
                  <h3 className="font-bold mb-2">Fundamentos de Conjuntos</h3>
                  <p className="text-gray-600 text-sm">
                    Relações, funções, propriedades
                  </p>
                  <p className="text-green-600 font-medium mt-3">Ver exercícios →</p>
                </Link>
                
                <Link href="/exercicios/grafos" className="card hover:border-green-600 transition-colors">
                  <h3 className="font-bold mb-2">Conceitos de Grafos</h3>
                  <p className="text-gray-600 text-sm">
                    Vértices, arestas, tipos de grafos
                  </p>
                  <p className="text-green-600 font-medium mt-3">Ver exercícios →</p>
                </Link>
                
                <Link href="/exercicios/caminhos" className="card hover:border-green-600 transition-colors">
                  <h3 className="font-bold mb-2">Caminhos e Ciclos</h3>
                  <p className="text-gray-600 text-sm">
                    Passeios, trilhas, conectividade
                  </p>
                  <p className="text-green-600 font-medium mt-3">Ver exercícios →</p>
                </Link>
                
                <Link href="/exercicios/matrizes" className="card hover:border-green-600 transition-colors">
                  <h3 className="font-bold mb-2">Representação Matricial</h3>
                  <p className="text-gray-600 text-sm">
                    Matriz de adjacência e incidência
                  </p>
                  <p className="text-green-600 font-medium mt-3">Ver exercícios →</p>
                </Link>
              </div>
            </section>
            
            {/* Navegação */}
            <div className="flex justify-center pt-8 border-t">
              <Link href="/" className="btn-secondary">
                ← Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}