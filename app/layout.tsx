import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Estudo de Teoria dos Grafos',
  description: 'Material didático interativo para o estudo de Teoria dos Grafos',
  authors: [{ name: 'Anderson Henrique' }],
  keywords: ['grafos', 'teoria dos grafos', 'matemática discreta', 'estudo', 'exercícios'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-serif">
        {children}
      </body>
    </html>
  )
}