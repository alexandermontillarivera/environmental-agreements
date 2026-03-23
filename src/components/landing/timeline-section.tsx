"use client"

import { motion } from "framer-motion"

const events = [
  {
    year: "1989",
    title: "Convenio de Basilea",
    description: "Se adopta en Basilea, Suiza, para controlar el movimiento transfronterizo de desechos peligrosos.",
    color: "bg-primary",
  },
  {
    year: "1992",
    title: "Basilea entra en vigor",
    description: "El convenio comienza a ser legalmente vinculante para los países firmantes.",
    color: "bg-primary/70",
  },
  {
    year: "1998",
    title: "Convenio de Rotterdam",
    description: "Se adopta para regular el comercio internacional de productos químicos y plaguicidas peligrosos.",
    color: "bg-accent",
  },
  {
    year: "2001",
    title: "Convenio de Estocolmo",
    description: "Se adopta para eliminar los Contaminantes Orgánicos Persistentes más peligrosos.",
    color: "bg-chart-2",
  },
  {
    year: "2004",
    title: "Rotterdam y Estocolmo en vigor",
    description: "Ambos convenios entran en vigor, completando el marco tripartito de protección química.",
    color: "bg-chart-3",
  },
  {
    year: "2019",
    title: "Enmienda sobre plásticos",
    description: "El Convenio de Basilea incluye los residuos plásticos en su ámbito de regulación.",
    color: "bg-chart-4",
  },
  {
    year: "2024",
    title: "Sinergias BRS",
    description: "Los tres convenios trabajan bajo un marco conjunto para maximizar su efectividad.",
    color: "bg-chart-5",
  },
]

export function TimelineSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
            Historia
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Línea del tiempo de los convenios
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${event.color} md:-translate-x-1/2 ring-4 ring-secondary z-10`}
                />

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-primary-foreground ${event.color} mb-3`}>
                      {event.year}
                    </span>
                    <h3 className="text-lg font-medium text-card-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
