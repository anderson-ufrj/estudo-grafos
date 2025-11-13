'use client'

import { useProgress } from '@/app/context/ProgressContext'

interface ProgressTrackerProps {
  pageId: string
  title: string
}

export default function ProgressTracker({ pageId, title }: ProgressTrackerProps) {
  const { isCompleted, togglePage } = useProgress()
  const completed = isCompleted(pageId)

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 print:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => togglePage(pageId)}
            className={`w-8 h-8 rounded border-2 flex items-center justify-center transition-all ${
              completed
                ? 'bg-green-600 border-green-600 scale-110'
                : 'border-gray-300 dark:border-gray-600 hover:border-green-600 hover:scale-105'
            }`}
            aria-label={completed ? 'Marcar como não concluído' : 'Marcar como concluído'}
          >
            {completed && (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {completed ? '✅ Tópico Concluído' : 'Marcar como concluído'}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{title}</p>
          </div>
        </div>

        {completed && (
          <div className="flex items-center gap-2 text-green-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">Parabéns!</span>
          </div>
        )}
      </div>
    </div>
  )
}
