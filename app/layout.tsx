import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import { ProgressProvider } from './context/ProgressContext'

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
      <head>
        <script src="https://vlibras.gov.br/app/vlibras-plugin.js" defer></script>
      </head>
      <body className="font-sans antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <ProgressProvider>
            {children}
            <div vw="true" className="enabled">
              <div vw-access-button="true" className="active"></div>
              <div vw-plugin-wrapper="true">
                <div className="vw-plugin-top-wrapper"></div>
              </div>
            </div>
          </ProgressProvider>
        </ThemeProvider>
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              new window.VLibras.Widget('https://vlibras.gov.br/app');
            }
          `
        }} />
      </body>
    </html>
  )
}