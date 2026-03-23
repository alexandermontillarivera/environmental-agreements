"use client"

import { motion } from "framer-motion"
import { Leaf, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
            <Leaf className="w-12 h-12 text-primary" />
          </div>
          <p className="text-8xl font-light text-primary tracking-tight">404</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-light text-foreground mb-4 text-balance">
            Página no encontrada
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
            Parece que esta ruta no existe. Vuelve al inicio para explorar los convenios
            ambientales internacionales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
