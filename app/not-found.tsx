import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Erro 404 com ícone de grafo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <svg className="w-16 h-16 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Parece que você tentou acessar um vértice que não existe neste grafo!
            A página que você procura pode ter sido removida ou o caminho está incorreto.
          </p>
        </div>

        {/* Links de navegação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            href="/"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="text-green-600 dark:text-green-400 mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Início</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Voltar para a página inicial</p>
          </Link>

          <Link
            href="/teoria/introducao"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="text-green-600 dark:text-green-400 mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Teoria</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Explorar conteúdo teórico</p>
          </Link>

          <Link
            href="/exercicios/todos"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="text-green-600 dark:text-green-400 mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercícios</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Praticar com exercícios</p>
          </Link>
        </div>

        {/* Links adicionais */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/quiz" className="text-green-600 dark:text-green-400 hover:underline">
            Quiz Interativo
          </Link>
          <Link href="/roteiro" className="text-green-600 dark:text-green-400 hover:underline">
            Roteiro de Estudo
          </Link>
          <Link href="/referencias" className="text-green-600 dark:text-green-400 hover:underline">
            Material de Referência
          </Link>
        </div>

        {/* Sugestão de busca */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            💡 <strong>Dica:</strong> Use a barra de busca no topo da página para encontrar
            rapidamente qualquer tópico sobre teoria dos grafos!
          </p>
        </div>
      </div>
    </div>
  )
}
