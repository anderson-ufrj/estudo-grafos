'use client'

import { useState } from 'react'
import PrintButton from './PrintButton'
import ShareButtons from './ShareButtons'
import FocusMode from './FocusMode'
import ProgressBadge from './ProgressBadge'

interface FloatingActionMenuProps {
  pageTitle?: string
}

export default function FloatingActionMenu({ pageTitle }: FloatingActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Menu Principal FAB */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        {/* Botões expandidos (aparecem quando isOpen) */}
        <div className={`flex flex-col-reverse gap-3 mb-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {/* Print Button */}
          <div className="flex items-center gap-3 group">
            <span className="bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Imprimir
            </span>
            <PrintButton />
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 group">
            <span className="bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Compartilhar
            </span>
            <ShareButtons title={pageTitle} />
          </div>

          {/* Focus Mode */}
          <div className="flex items-center gap-3 group">
            <span className="bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Modo Foco
            </span>
            <FocusMode />
          </div>

          {/* Progress Badge */}
          <div className="flex items-center gap-3 group">
            <span className="bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Progresso
            </span>
            <ProgressBadge />
          </div>
        </div>

        {/* Botão de Toggle (principal) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 rotate-45'
              : 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'
          }`}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu de ações'}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </>
  )
}
