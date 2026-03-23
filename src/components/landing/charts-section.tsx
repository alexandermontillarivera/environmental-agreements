"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts"

const wasteData = [
  { year: "2010", cantidad: 35 },
  { year: "2012", cantidad: 38 },
  { year: "2014", cantidad: 42 },
  { year: "2016", cantidad: 45 },
  { year: "2018", cantidad: 48 },
  { year: "2020", cantidad: 46 },
  { year: "2022", cantidad: 44 },
  { year: "2024", cantidad: 41 },
]

const copReductionData = [
  { year: "2001", ddt: 100, pcb: 100, dioxinas: 100 },
  { year: "2005", ddt: 75, pcb: 85, dioxinas: 90 },
  { year: "2010", ddt: 50, pcb: 60, dioxinas: 70 },
  { year: "2015", ddt: 30, pcb: 40, dioxinas: 50 },
  { year: "2020", ddt: 15, pcb: 25, dioxinas: 35 },
  { year: "2024", ddt: 8, pcb: 15, dioxinas: 25 },
]

const chemicalCategories = [
  { name: "Pesticidas", value: 35, color: "oklch(0.55 0.15 145)" },
  { name: "Industriales", value: 28, color: "oklch(0.6 0.12 180)" },
  { name: "Plásticos", value: 22, color: "oklch(0.5 0.1 200)" },
  { name: "Metales pesados", value: 15, color: "oklch(0.65 0.08 90)" },
]

export function ChartsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
            Datos y Estadísticas
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            El impacto de los convenios en números
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-medium text-card-foreground mb-2">
              Movimiento Transfronterizo de Residuos
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Millones de toneladas reguladas por Basilea
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={wasteData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.02 145)" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fill: "oklch(0.5 0.02 145)", fontSize: 12 }}
                    axisLine={{ stroke: "oklch(0.9 0.02 145)" }}
                  />
                  <YAxis 
                    tick={{ fill: "oklch(0.5 0.02 145)", fontSize: 12 }}
                    axisLine={{ stroke: "oklch(0.9 0.02 145)" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid oklch(0.9 0.02 145)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar 
                    dataKey="cantidad" 
                    fill="oklch(0.45 0.12 145)" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-medium text-card-foreground mb-2">
              Reducción de COPs (Convenio de Estocolmo)
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Índice de reducción desde 2001 (base 100)
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={copReductionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.02 145)" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fill: "oklch(0.5 0.02 145)", fontSize: 12 }}
                    axisLine={{ stroke: "oklch(0.9 0.02 145)" }}
                  />
                  <YAxis 
                    tick={{ fill: "oklch(0.5 0.02 145)", fontSize: 12 }}
                    axisLine={{ stroke: "oklch(0.9 0.02 145)" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid oklch(0.9 0.02 145)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="ddt" 
                    name="DDT"
                    stroke="oklch(0.55 0.15 145)" 
                    strokeWidth={2}
                    dot={{ fill: "oklch(0.55 0.15 145)" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="pcb" 
                    name="PCBs"
                    stroke="oklch(0.6 0.12 180)" 
                    strokeWidth={2}
                    dot={{ fill: "oklch(0.6 0.12 180)" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="dioxinas" 
                    name="Dioxinas"
                    stroke="oklch(0.5 0.1 200)" 
                    strokeWidth={2}
                    dot={{ fill: "oklch(0.5 0.1 200)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-medium text-card-foreground mb-2">
              Categorías de Químicos Regulados
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Distribución por tipo (Convenio de Rotterdam)
            </p>
            <div className="h-64 flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chemicalCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {chemicalCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid oklch(0.9 0.02 145)",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl p-6 shadow-sm flex flex-col justify-center"
          >
            <h3 className="text-lg font-medium text-card-foreground mb-6">
              Datos Clave
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">92%</span>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Reducción de exportaciones ilegales</p>
                  <p className="text-sm text-muted-foreground">
                    Desde la implementación del Convenio de Basilea
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-medium">30+</span>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Nuevos COPs regulados</p>
                  <p className="text-sm text-muted-foreground">
                    Añadidos a la lista original desde 2001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-chart-4 font-medium">54</span>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Químicos bajo PIC</p>
                  <p className="text-sm text-muted-foreground">
                    Regulados por el Convenio de Rotterdam
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
