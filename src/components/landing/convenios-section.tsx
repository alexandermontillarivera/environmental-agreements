"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Truck, FlaskConical, Ship, ChevronRight } from "lucide-react"
import Image from "next/image"

const convenios = [
  {
    id: "basilea",
    name: "Convenio de Basilea",
    year: "1989",
    icon: Truck,
    image: "/images/basel-waste.jpg",
    shortDesc: "Control del movimiento transfronterizo de desechos peligrosos",
    objectives: [
      "Reducir los movimientos transfronterizos de desechos peligrosos",
      "Minimizar la cantidad y toxicidad de los desechos generados",
      "Tratar y eliminar los desechos lo más cerca posible de su fuente",
      "Prohibir la exportación de desechos a países que carecen de capacidad técnica",
    ],
    impact: "Ha reducido significativamente el dumping de residuos tóxicos de países desarrollados hacia países en desarrollo, protegiendo ecosistemas vulnerables.",
    status: "Vigente con 190+ países. En 2019 se aprobó la Enmienda sobre plásticos para regular su comercio internacional.",
  },
  {
    id: "estocolmo",
    name: "Convenio de Estocolmo",
    year: "2001",
    icon: FlaskConical,
    image: "/images/stockholm-chemicals.jpg",
    shortDesc: "Eliminación de Contaminantes Orgánicos Persistentes (COPs)",
    objectives: [
      "Eliminar o restringir la producción y uso de COPs intencionales",
      "Reducir las liberaciones de COPs producidos involuntariamente",
      "Gestionar de forma ambientalmente racional las existencias de COPs",
      "Prevenir la aparición de nuevos COPs",
    ],
    impact: "Ha logrado la eliminación progresiva de pesticidas peligrosos como DDT, PCBs y dioxinas que persisten en el ambiente durante décadas.",
    status: "186 países parte. Se han añadido más de 30 sustancias a la lista original de 12 contaminantes.",
  },
  {
    id: "rotterdam",
    name: "Convenio de Rotterdam",
    year: "1998",
    icon: Ship,
    image: "/images/rotterdam-trade.jpg",
    shortDesc: "Procedimiento de consentimiento informado previo",
    objectives: [
      "Promover la responsabilidad compartida en el comercio de químicos",
      "Garantizar el consentimiento informado de países importadores",
      "Facilitar el intercambio de información sobre productos químicos peligrosos",
      "Apoyar la toma de decisiones nacional sobre importaciones",
    ],
    impact: "Permite a los países decidir qué productos químicos peligrosos desean recibir, previniendo envíos no deseados.",
    status: "165+ países miembros. Actualmente regula más de 50 productos químicos y plaguicidas.",
  },
]

export function ConveniosSection() {
  const [activeConvenio, setActiveConvenio] = useState(convenios[0])

  return (
    <section id="convenios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
            Los Tres Pilares
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Convenios Internacionales para la <br className="hidden md:block" />
            Protección Ambiental
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {convenios.map((convenio) => {
            const Icon = convenio.icon
            return (
              <button
                key={convenio.id}
                onClick={() => setActiveConvenio(convenio)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeConvenio.id === convenio.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{convenio.name}</span>
                <span className="text-xs opacity-70">{convenio.year}</span>
              </button>
            )
          })}
        </div>

        <motion.div
          key={activeConvenio.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={activeConvenio.image}
              alt={activeConvenio.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground text-lg font-medium">
                {activeConvenio.shortDesc}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary" />
                Objetivos Principales
              </h3>
              <ul className="space-y-3">
                {activeConvenio.objectives.map((objective, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-accent" />
                Impacto en la Contaminación
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activeConvenio.impact}
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-sm font-medium text-foreground mb-2">
                Situación Actual
              </h3>
              <p className="text-muted-foreground text-sm">
                {activeConvenio.status}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
