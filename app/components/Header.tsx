import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b-4 border-black p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/if-muz.png"
            alt="IFSULDEMINAS - Campus Muzambinho"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">
            Estudo de Teoria dos Grafos
          </h1>
          <p className="text-xl font-semibold">Material Didático Interativo</p>
          <p className="text-lg">IFSULDEMINAS - Campus Muzambinho</p>
          <p className="text-sm italic mt-2">
            Elaborado por Anderson Henrique • 28 de setembro de 2025
          </p>
        </div>
      </div>
    </header>
  )
}