'use client'

import { useProgress } from '@/app/context/ProgressContext'
import Link from 'next/link'

export default function ProgressBadge() {
  const { progress, completedPages } = useProgress()

  if (progress === 0) return null

  return (
    <Link
      href="/roteiro"
      className="fixed bottom-24 right-8 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all z-40 print:hidden group"
      title="Ver roteiro completo"
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <svg className="w-8 h-8" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeDasharray={`${progress}, 100`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
            {progress}%
          </span>
        </div>
        <span className="text-sm font-medium hidden group-hover:block whitespace-nowrap">
          {completedPages.length} tópicos
        </span>
      </div>
    </Link>
  )
}
