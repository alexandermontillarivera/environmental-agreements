"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { Trash2, Recycle, AlertTriangle, CheckCircle2, XCircle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

type WasteType = "hazardous" | "recyclable" | "organic"

interface WasteItem {
  id: number
  name: string
  type: WasteType
  icon: string
  convention: string
}

const wasteItems: WasteItem[] = [
  { id: 1, name: "Baterías", type: "hazardous", icon: "🔋", convention: "Basilea" },
  { id: 2, name: "Pesticidas", type: "hazardous", icon: "☠️", convention: "Estocolmo" },
  { id: 3, name: "Plástico", type: "recyclable", icon: "🧴", convention: "Basilea" },
  { id: 4, name: "PCBs", type: "hazardous", icon: "⚗️", convention: "Estocolmo" },
  { id: 5, name: "Papel", type: "recyclable", icon: "📄", convention: "N/A" },
  { id: 6, name: "DDT", type: "hazardous", icon: "🧪", convention: "Estocolmo" },
  { id: 7, name: "Vidrio", type: "recyclable", icon: "🍾", convention: "N/A" },
  { id: 8, name: "E-waste", type: "hazardous", icon: "📱", convention: "Basilea" },
  { id: 9, name: "Aceite usado", type: "hazardous", icon: "🛢️", convention: "Basilea" },
  { id: 10, name: "Cartón", type: "recyclable", icon: "📦", convention: "N/A" },
]

const bins = [
  { type: "hazardous" as WasteType, label: "Peligrosos", color: "bg-destructive", icon: AlertTriangle },
  { type: "recyclable" as WasteType, label: "Reciclables", color: "bg-accent", icon: Recycle },
]

export function ActionGame() {
  const [currentItem, setCurrentItem] = useState<WasteItem | null>(null)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null)
  const [itemsProcessed, setItemsProcessed] = useState(0)
  const [availableItems, setAvailableItems] = useState<WasteItem[]>([...wasteItems])

  const getNextItem = useCallback(() => {
    if (availableItems.length === 0) {
      setAvailableItems([...wasteItems])
      return wasteItems[Math.floor(Math.random() * wasteItems.length)]
    }
    const randomIndex = Math.floor(Math.random() * availableItems.length)
    const item = availableItems[randomIndex]
    setAvailableItems(prev => prev.filter((_, i) => i !== randomIndex))
    return item
  }, [availableItems])

  useEffect(() => {
    if (!gameOver && !currentItem) {
      setCurrentItem(getNextItem())
    }
  }, [gameOver, currentItem, getNextItem])

  const handleDrop = (binType: WasteType) => {
    if (!currentItem || gameOver) return

    const isCorrect = currentItem.type === binType

    if (isCorrect) {
      setScore(score + 10)
      setFeedback({
        correct: true,
        message: currentItem.convention !== "N/A" 
          ? `¡Correcto! Regulado por: ${currentItem.convention}`
          : "¡Correcto! Bien clasificado.",
      })
    } else {
      setLives(lives - 1)
      setFeedback({
        correct: false,
        message: `Incorrecto. ${currentItem.name} es ${currentItem.type === "hazardous" ? "peligroso" : "reciclable"}.`,
      })
      if (lives <= 1) {
        setGameOver(true)
      }
    }

    setItemsProcessed(itemsProcessed + 1)

    setTimeout(() => {
      setFeedback(null)
      if (!gameOver && lives > (isCorrect ? 0 : 1)) {
        setCurrentItem(getNextItem())
      }
    }, 1500)
  }

  const resetGame = () => {
    setScore(0)
    setLives(3)
    setGameOver(false)
    setFeedback(null)
    setItemsProcessed(0)
    setAvailableItems([...wasteItems])
    setCurrentItem(getNextItem())
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
            Juego Interactivo
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">
            Clasifica los Residuos
          </h2>
          <p className="text-muted-foreground text-pretty">
            Aprende a clasificar residuos correctamente. ¡Los residuos peligrosos 
            están regulados por los convenios internacionales!
          </p>
        </motion.div>

        <div className="bg-secondary rounded-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Puntuación:</span>
              <span className="text-xl font-medium text-foreground">{score}</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Trash2
                  key={i}
                  className={`w-5 h-5 ${i < lives ? "text-primary" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!gameOver && currentItem && (
              <motion.div
                key={currentItem.id + "-" + itemsProcessed}
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center mb-8"
              >
                <div className="inline-flex flex-col items-center bg-card rounded-xl p-6 shadow-sm">
                  <span className="text-5xl mb-3">{currentItem.icon}</span>
                  <span className="text-lg font-medium text-card-foreground">
                    {currentItem.name}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  feedback.correct ? "bg-accent/20" : "bg-destructive/20"
                }`}
              >
                {feedback.correct ? (
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                ) : (
                  <XCircle className="w-5 h-5 text-destructive" />
                )}
                <span className={feedback.correct ? "text-accent" : "text-destructive"}>
                  {feedback.message}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {!gameOver && (
            <div className="grid grid-cols-2 gap-4">
              {bins.map((bin) => {
                const Icon = bin.icon
                return (
                  <button
                    key={bin.type}
                    onClick={() => handleDrop(bin.type)}
                    disabled={!!feedback}
                    className={`${bin.color} rounded-xl p-6 text-center transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary-foreground" />
                    <span className="text-lg font-medium text-primary-foreground">
                      {bin.label}
                    </span>
                  </button>
                )
              })}
            </div>
          )}

          {gameOver && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-medium text-foreground mb-4">
                ¡Juego Terminado!
              </h3>
              <p className="text-muted-foreground mb-2">
                Puntuación final: <span className="text-primary font-medium">{score}</span>
              </p>
              <p className="text-muted-foreground mb-6">
                Residuos clasificados: {itemsProcessed}
              </p>
              <Button onClick={resetGame} className="bg-primary hover:bg-primary/90">
                <RotateCcw className="w-4 h-4 mr-2" />
                Jugar de nuevo
              </Button>
            </motion.div>
          )}

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Consejo:</strong> Los residuos peligrosos (baterías, químicos, e-waste) 
              están regulados por los convenios de Basilea y Estocolmo para proteger la salud 
              humana y el medio ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
