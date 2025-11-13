import Link from 'next/link'

interface NavigationProps {
  prev?: { url: string; title: string }
  next?: { url: string; title: string }
}

export default function PageNavigation({ prev, next }: NavigationProps) {
  return (
    <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      {prev ? (
        <Link
          href={prev.url}
          className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <div className="text-xs text-gray-300">Anterior</div>
            <div className="font-medium">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.url}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white rounded-lg transition-colors group"
        >
          <div className="text-right">
            <div className="text-xs text-green-100">Próximo</div>
            <div className="font-medium">{next.title}</div>
          </div>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
