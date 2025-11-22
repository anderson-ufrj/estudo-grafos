import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import { ProgressProvider } from './context/ProgressContext'
import VLibras from './components/VLibras'

export const metadata: Metadata = {
  title: {
    default: 'Teoria dos Grafos - IFSULDEMINAS Muzambinho',
    template: '%s | Teoria dos Grafos'
  },
  description: 'Plataforma educacional completa para estudo de Teoria dos Grafos com teoria, exercícios resolvidos, quiz interativo e material de referência. IFSULDEMINAS - Campus Muzambinho.',
  authors: [{ name: 'Anderson Henrique' }],
  keywords: [
    'teoria dos grafos',
    'grafos',
    'matemática discreta',
    'ciência da computação',
    'exercícios resolvidos',
    'algoritmos em grafos',
    'Dijkstra',
    'Kruskal',
    'Floyd-Warshall',
    'BFS',
    'DFS',
    'caminho Euleriano',
    'árvore geradora mínima',
    'matriz de adjacência',
    'IFSULDEMINAS',
    'Muzambinho'
  ],
  openGraph: {
    title: 'Teoria dos Grafos - IFSULDEMINAS',
    description: 'Material completo de Teoria dos Grafos com exercícios, quiz e algoritmos',
    type: 'website',
    locale: 'pt_BR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teoria dos Grafos - IFSULDEMINAS',
    description: 'Aprenda Teoria dos Grafos com material completo e interativo'
  },
  robots: {
    index: true,
    follow: true
  }
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
            <VLibras />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}