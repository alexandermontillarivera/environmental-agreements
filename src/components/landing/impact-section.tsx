"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Droplets, Wind, TreePine, Fish, Heart, Globe } from "lucide-react"

const impacts = [
  {
    icon: Droplets,
    title: "Aguas Limpias",
    description: "Reducción de vertidos tóxicos que contaminan ríos, lagos y océanos.",
  },
  {
    icon: Wind,
    title: "Aire Puro",
    description: "Eliminación de emisiones de dioxinas y furanos a la atmósfera.",
  },
  {
    icon: TreePine,
    title: "Suelos Sanos",
    description: "Prevención de la acumulación de pesticidas persistentes en el suelo.",
  },
  {
    icon: Fish,
    title: "Vida Marina",
    description: "Protección de ecosistemas acuáticos contra residuos peligrosos.",
  },
  {
    icon: Heart,
    title: "Salud Humana",
    description: "Reducción de enfermedades causadas por exposición a químicos tóxicos.",
  },
  {
    icon: Globe,
    title: "Futuro Sostenible",
    description: "Preservación del planeta para las generaciones venideras.",
  },
]

export function ImpactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
              ¿Por qué importa?
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
              El impacto de no contaminar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Cada acción que tomamos para reducir la contaminación tiene un efecto 
              multiplicador en nuestro planeta. Los convenios de Basilea, Estocolmo 
              y Rotterdam son herramientas fundamentales que nos ayudan a proteger 
              lo que más valoramos.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {impacts.map((impact, index) => {
                const Icon = impact.icon
                return (
                  <motion.div
                    key={impact.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {impact.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {impact.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/nature-impact.jpg"
                alt="Impacto ambiental"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-card rounded-xl p-6 shadow-lg max-w-xs"
            >
              <p className="text-lg font-medium text-card-foreground mb-2">
                {"\"El planeta no necesita más personas exitosas. Necesita más pacificadores, sanadores, restauradores.\""}
              </p>
              <p className="text-sm text-muted-foreground">
                — Dalai Lama
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
