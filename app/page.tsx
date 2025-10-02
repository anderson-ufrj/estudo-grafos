import Link from 'next/link'
import Header from './components/Header'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <div className="container-paper min-h-screen">
      <Header />
      
      <main className="p-8">
        <section className="mb-12">
          <h2 className="section-title">Bem-vindo ao Material de Estudo</h2>
          <p className="text-lg leading-relaxed mb-6">
            Este material foi desenvolvido para auxiliar no estudo de Teoria dos Grafos, 
            fornecendo resumos teóricos, fórmulas essenciais e exercícios resolvidos.
          </p>
        </section>

        <Navigation />

        <section className="mt-12 print-break">
          <h2 className="section-title">Conteúdo Disponível</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border-2 border-black p-6">
              <h3 className="font-bold text-lg mb-3">📚 Material Teórico</h3>
              <ul className="space-y-2">
                <li>• Fundamentos de Conjuntos</li>
                <li>• Introdução aos Grafos</li>
                <li>• Caminhos e Ciclos</li>
                <li>• Representação Matricial</li>
                <li>• Fórmulas Essenciais</li>
              </ul>
            </div>
            
            <div className="border-2 border-black p-6">
              <h3 className="font-bold text-lg mb-3">✏️ Exercícios</h3>
              <ul className="space-y-2">
                <li>• Relações Binárias</li>
                <li>• Funções e Propriedades</li>
                <li>• Grafos Bipartidos</li>
                <li>• Conectividade</li>
                <li>• Matrizes de Adjacência</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 print-break">
          <div className="bg-gray-100 border-2 border-black p-6 mb-8">
            <h3 className="font-bold text-lg mb-2">👨‍🏫 Sobre a Disciplina</h3>
            <p className="mb-2">
              <strong>Professor:</strong> Prof. Ricardo Martins
            </p>
            <p className="mb-2">
              <strong>Instituição:</strong> IFSULDEMINAS - Campus Muzambinho
            </p>
            <p>
              <strong>Disciplina:</strong> Teoria dos Grafos - Matemática Discreta
            </p>
          </div>
        </section>
        
        <section className="mt-12 print-break">
          <h2 className="section-title">Como Usar Este Material</h2>
          
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-black">
              <h3 className="font-bold mb-2">1. Estudo da Teoria</h3>
              <p>Comece pelos conceitos fundamentais e avance progressivamente pelos tópicos.</p>
            </div>
            
            <div className="p-4 border-l-4 border-black">
              <h3 className="font-bold mb-2">2. Memorização de Fórmulas</h3>
              <p>Revise as fórmulas essenciais destacadas em cada seção.</p>
            </div>
            
            <div className="p-4 border-l-4 border-black">
              <h3 className="font-bold mb-2">3. Prática com Exercícios</h3>
              <p>Tente resolver os exercícios antes de consultar as soluções.</p>
            </div>
            
            <div className="p-4 border-l-4 border-black">
              <h3 className="font-bold mb-2">4. Revisão para Impressão</h3>
              <p>O material está otimizado para impressão em preto e branco.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t-2 border-black mt-16 p-8 text-center text-sm">
        <p>Material de Estudo - Teoria dos Grafos</p>
        <p>Prof. Ricardo Martins - IFSULDEMINAS Campus Muzambinho</p>
        <p>Elaborado por Anderson Henrique • 28/09/2025</p>
        <p className="mt-2">
          <a href="https://github.com/anderson-ufrj" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' • '}
          <a href="mailto:andersonhs27@gmail.com" className="underline hover:no-underline">
            andersonhs27@gmail.com
          </a>
        </p>
      </footer>
    </div>
  )
}