"use client"

import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium">Convenios Ambientales</p>
              <p className="text-sm text-primary-foreground/60">
                Protegiendo nuestro planeta
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="#convenios" className="hover:text-primary-foreground transition-colors">
              Convenios
            </a>
            <a href="http://www.brsmeas.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              BRS Secretariat
            </a>
            <a href="https://www.unep.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              PNUMA
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/40">
            Contenido educativo sobre los Convenios de Basilea, Estocolmo y Rotterdam.
            <br />
            Proyecto con fines didácticos sobre protección ambiental internacional.
          </p>
        </div>
      </div>
    </footer>
  )
}
