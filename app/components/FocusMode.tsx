'use client'

import { useState, useEffect } from 'react'

export default function FocusMode() {
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (isFocused) {
      document.body.classList.add('focus-mode')
    } else {
      document.body.classList.remove('focus-mode')
    }
  }, [isFocused])

  const toggleFocus = () => {
    setIsFocused(!isFocused)
  }

  return (
    <>
      <button
        onClick={toggleFocus}
        className="fixed bottom-40 right-8 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 print:hidden group"
        aria-label={isFocused ? 'Sair do modo foco' : 'Ativar modo foco'}
        title={isFocused ? 'Sair do modo foco' : 'Ativar modo foco'}
      >
        {isFocused ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
        )}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isFocused ? 'Modo Normal' : 'Modo Foco'}
        </span>
      </button>

      <style jsx global>{`
        .focus-mode header {
          display: none !important;
        }
        .focus-mode .fixed {
          opacity: 0.3;
          transition: opacity 0.3s;
        }
        .focus-mode .fixed:hover {
          opacity: 1;
        }
      `}</style>
    </>
  )
}
