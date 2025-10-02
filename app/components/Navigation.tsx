import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="border-2 border-black p-6 bg-gray-50">
      <h2 className="font-bold text-xl mb-4 text-center uppercase tracking-wide">
        Navegação Rápida
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2 border-b border-black">Teoria</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/teoria/conjuntos" className="hover:underline">
                → Fundamentos de Conjuntos
              </Link>
            </li>
            <li>
              <Link href="/teoria/introducao" className="hover:underline">
                → Introdução aos Grafos
              </Link>
            </li>
            <li>
              <Link href="/teoria/caminhos" className="hover:underline">
                → Caminhos e Ciclos
              </Link>
            </li>
            <li>
              <Link href="/teoria/matrizes" className="hover:underline">
                → Representação Matricial
              </Link>
            </li>
            <li>
              <Link href="/teoria/formulas" className="hover:underline">
                → Fórmulas Essenciais
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2 border-b border-black">Exercícios</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/exercicios/conjuntos" className="hover:underline">
                → Exercícios de Conjuntos
              </Link>
            </li>
            <li>
              <Link href="/exercicios/grafos" className="hover:underline">
                → Exercícios de Grafos
              </Link>
            </li>
            <li>
              <Link href="/exercicios/todos" className="hover:underline">
                → Todos os Exercícios
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-black text-center space-y-2">
        <Link 
          href="/roteiro" 
          className="font-bold text-lg hover:underline block"
        >
          📋 Ver Roteiro Completo de Estudo
        </Link>
        <Link 
          href="/referencias" 
          className="font-bold text-lg hover:underline block"
        >
          📚 Material de Referência (PDFs)
        </Link>
      </div>
    </nav>
  )
}