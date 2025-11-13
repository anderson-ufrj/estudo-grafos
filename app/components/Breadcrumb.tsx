'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  currentStep?: number
  totalSteps?: number
}

export default function Breadcrumb({ items, currentStep, totalSteps }: BreadcrumbProps) {
  return (
    <div className="mb-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm mb-4" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-green-600 dark:text-green-400 hover:underline font-medium transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-gray-100 font-semibold">{item.label}</span>
            )}
          </div>
        ))}
      </nav>

      {/* Progress Indicator */}
      {currentStep !== undefined && totalSteps !== undefined && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Progresso do Estudo
            </span>
            <span className="text-sm font-bold text-green-600 dark:text-green-400">
              {currentStep} de {totalSteps}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            >
              <div className="h-full w-full bg-white opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Percentage */}
          <div className="mt-2 text-right">
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {Math.round((currentStep / totalSteps) * 100)}% concluído
            </span>
          </div>
        </div>
      )}
    </div>
  )
}