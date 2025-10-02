import Link from 'next/link'
import Header from '@/app/components/Header'

export default function ReferenciasPage() {
  const materiais = [
    {
      titulo: "01. Conceitos Básicos de Conjuntos",
      arquivo: "01. Conceitos Básicos de Conjuntos.pdf",
      descricao: "Fundamentos matemáticos: conjunto potência, produto cartesiano, funções, relações"
    },
    {
      titulo: "02. Considerações Iniciais Sobre Grafos",
      arquivo: "02. Considerações Iniciais Sobre Grafos.pdf",
      descricao: "Introdução aos grafos, definições básicas, aplicações e problemas clássicos"
    },
    {
      titulo: "04. Caminhos e Ciclos",
      arquivo: "04. Caminhos e Ciclos.pdf",
      descricao: "Passeios, trilhas, caminhos, conectividade e componentes conexos"
    },
    {
      titulo: "05. Representação Matricial de Grafos",
      arquivo: "05. Representação Matricial de Grafos.pdf",
      descricao: "Matriz de adjacência, matriz de incidência, algoritmos matriciais"
    }
  ]

  const exercicios = [
    {
      titulo: "Lista 1 - Fundamentos",
      arquivo: "Lista_1.pdf",
      descricao: "Exercícios sobre conjuntos, funções e relações"
    },
    {
      titulo: "Lista 2 - Grafos",
      arquivo: "Lista_2.pdf",
      descricao: "Exercícios sobre conceitos básicos de grafos, isomorfismo e operações"
    },
    {
      titulo: "Lista de Exercícios - 30/09/2025",
      arquivo: "Lista_Exercícios_30Setembro2025.pdf",
      descricao: "Lista adicional de exercícios"
    },
    {
      titulo: "Lista Limitada - 30/09/2025",
      arquivo: "ListaLim_Exercícios_30Setembro2025.pdf",
      descricao: "Lista de exercícios com escopo específico"
    }
  ]

  return (
    <div className="container-paper min-h-screen">
      <Header />
      
      <main className="p-8">
        <Link href="/" className="text-sm hover:underline mb-4 inline-block">
          ← Voltar ao início
        </Link>
        
        <h1 className="section-title">Material de Referência</h1>
        
        <section className="mb-12 print-break">
          <h2 className="subsection-title">📚 Material Teórico Original</h2>
          
          <div className="grid gap-4">
            {materiais.map((material, index) => (
              <div key={index} className="border-2 border-black p-4 hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-lg mb-2">{material.titulo}</h3>
                <p className="text-gray-700 mb-3">{material.descricao}</p>
                <a 
                  href={`/ref/${material.arquivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  📄 Abrir PDF
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 print-break">
          <h2 className="subsection-title">📝 Listas de Exercícios</h2>
          
          <div className="grid gap-4">
            {exercicios.map((exercicio, index) => (
              <div key={index} className="border-2 border-black p-4 hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-lg mb-2">{exercicio.titulo}</h3>
                <p className="text-gray-700 mb-3">{exercicio.descricao}</p>
                <a 
                  href={`/ref/${exercicio.arquivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  📄 Abrir PDF
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="print-break">
          <div className="bg-gray-100 border-2 border-black p-6">
            <h2 className="font-bold text-lg mb-3">ℹ️ Sobre o Material de Referência</h2>
            <p className="mb-2">
              Este material foi fornecido pelo IFSULDEMINAS - Campus Muzambinho como base para o 
              estudo de Teoria dos Grafos. Os PDFs originais contêm o conteúdo completo da disciplina.
            </p>
            <p>
              Este site web complementa o material original com exercícios resolvidos, 
              visualizações interativas e resumos organizados para facilitar o estudo.
            </p>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t-2 border-black">
          <Link href="/" className="hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </main>
    </div>
  )
}