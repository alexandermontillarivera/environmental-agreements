"use client"

import { motion } from "framer-motion"
import { ExternalLink, BookOpen, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const resources = [
  {
    title: "Secretaría BRS",
    description: "Sitio oficial de los convenios de Basilea, Rotterdam y Estocolmo",
    url: "http://www.brsmeas.org/",
    icon: Globe,
  },
  {
    title: "PNUMA",
    description: "Programa de las Naciones Unidas para el Medio Ambiente",
    url: "https://www.unep.org/",
    icon: BookOpen,
  },
  {
    title: "ONU Medio Ambiente",
    description: "Recursos sobre gestión de químicos y residuos",
    url: "https://www.unep.org/explore-topics/chemicals-waste",
    icon: ExternalLink,
  },
]

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-balance">
            El cambio comienza contigo
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-12 text-pretty">
            Cada pequeña acción cuenta. Infórmate, reduce tu huella ambiental 
            y sé parte de la solución global contra la contaminación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-left hover:bg-primary-foreground/15 transition-colors group"
              >
                <Icon className="w-6 h-6 mb-4 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <h3 className="text-lg font-medium mb-2">{resource.title}</h3>
                <p className="text-sm text-primary-foreground/70">
                  {resource.description}
                </p>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="#convenios">
              Explorar los convenios
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
