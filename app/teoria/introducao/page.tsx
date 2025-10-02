import React from 'react'
import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

export default function IntroducaoPage() {
  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gray-50' },
    React.createElement(ModernHeader),
    React.createElement(
      'main',
      { className: 'container-modern px-4 py-8' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto' },
        React.createElement(
          'h1',
          { className: 'text-4xl font-bold mb-8' },
          'Introdução aos Grafos'
        ),
        React.createElement(
          'p',
          { className: 'text-lg text-gray-700' },
          'Conteúdo completo da página de introdução em breve.'
        )
      )
    )
  )
}