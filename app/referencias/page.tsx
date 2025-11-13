import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ModernHeader />

      <main className="container-modern px-4 py-8">
        <nav className="mb-8">
          <Link href="/" className="text-green-600 hover:underline">
            Início
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <span className="text-gray-900 dark:text-gray-100">Material de Referência</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Material de Referência</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">PDFs originais e listas de exercícios da disciplina</p>
        
        <section className="mb-12 print-break">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">📚 Material Teórico Original</h2>

          <div className="grid gap-4">
            {materiais.map((material, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">{material.titulo}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{material.descricao}</p>
                <a
                  href={`/ref/${material.arquivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  📄 Abrir PDF
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 print-break">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">📝 Listas de Exercícios</h2>

          <div className="grid gap-4">
            {exercicios.map((exercicio, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">{exercicio.titulo}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exercicio.descricao}</p>
                <a
                  href={`/ref/${exercicio.arquivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  📄 Abrir PDF
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="print-break">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h2 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">ℹ️ Sobre o Material de Referência</h2>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Este material foi fornecido pelo IFSULDEMINAS - Campus Muzambinho como base para o
              estudo de Teoria dos Grafos. Os PDFs originais contêm o conteúdo completo da disciplina.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Este site web complementa o material original com exercícios resolvidos,
              visualizações interativas e resumos organizados para facilitar o estudo.
            </p>
          </div>
        </section>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link href="/" className="text-green-600 hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </main>
    </div>
  )
}