import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

export const metadata: Metadata = {
  title: 'Estudo de Teoria dos Grafos',
  description: 'Material didático para o estudo de Teoria dos Grafos',
  authors: [{ name: 'Anderson Henrique' }],
  keywords: ['grafos', 'teoria dos grafos', 'matemática discreta', 'estudo', 'exercícios'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}