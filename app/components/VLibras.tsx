'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    VLibras: any
  }
}

export default function VLibras() {
  useEffect(() => {
    const loadVLibras = () => {
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app')
      }
    }

    // Se o script já carregou
    if (window.VLibras) {
      loadVLibras()
    } else {
      // Aguardar o script carregar
      const script = document.querySelector('script[src*="vlibras"]')
      if (script) {
        script.addEventListener('load', loadVLibras)
      }
    }
  }, [])

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  )
}
