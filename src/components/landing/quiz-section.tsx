"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { CheckCircle2, XCircle, RotateCcw, Trophy, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const questions = [
  {
    question: "¿Qué regula principalmente el Convenio de Basilea?",
    options: [
      "El comercio de alimentos orgánicos",
      "El movimiento transfronterizo de desechos peligrosos",
      "La emisión de gases de efecto invernadero",
      "La protección de especies en peligro",
    ],
    correct: 1,
    explanation: "El Convenio de Basilea (1989) se centra específicamente en controlar el movimiento transfronterizo de desechos peligrosos y su eliminación.",
  },
  {
    question: "¿Qué son los COPs que regula el Convenio de Estocolmo?",
    options: [
      "Compuestos Orgánicos Puros",
      "Contaminantes Orgánicos Persistentes",
      "Carbono Orgánico Particulado",
      "Componentes Oxidantes Primarios",
    ],
    correct: 1,
    explanation: "Los COPs son Contaminantes Orgánicos Persistentes - sustancias químicas tóxicas que permanecen en el ambiente durante mucho tiempo y se acumulan en los seres vivos.",
  },
  {
    question: "¿Cuál es el principio clave del Convenio de Rotterdam?",
    options: [
      "Quien contamina paga",
      "Prevención en la fuente",
      "Consentimiento Fundamentado Previo (PIC)",
      "Desarrollo sostenible",
    ],
    correct: 2,
    explanation: "El Procedimiento de Consentimiento Fundamentado Previo (PIC) permite a los países tomar decisiones informadas antes de importar productos químicos peligrosos.",
  },
  {
    question: "¿Cuántos países aproximadamente han ratificado el Convenio de Basilea?",
    options: [
      "Menos de 50",
      "Entre 100 y 150",
      "Más de 190",
      "Todos los países del mundo",
    ],
    correct: 2,
    explanation: "El Convenio de Basilea es uno de los acuerdos ambientales más ampliamente ratificados, con más de 190 países participantes.",
  },
  {
    question: "¿Qué sustancia es un ejemplo de COP regulado por el Convenio de Estocolmo?",
    options: [
      "Dióxido de carbono (CO2)",
      "DDT (Dicloro Difenil Tricloroetano)",
      "Metano",
      "Oxígeno",
    ],
    correct: 1,
    explanation: "El DDT fue uno de los 12 contaminantes originales ('docena sucia') incluidos en el Convenio de Estocolmo debido a su persistencia ambiental y efectos nocivos.",
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (index: number) => {
    if (answered) return
    setSelectedAnswer(index)
    setAnswered(true)
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswered(false)
  }

  return (
    <section className="py-24 bg-foreground text-primary-foreground">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-foreground/60 text-sm tracking-[0.2em] uppercase mb-4">
            Pon a prueba tu conocimiento
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-balance">
            Quiz Interactivo
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-primary-foreground/60">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm text-primary-foreground/60">
                  Puntuación: {score}/{questions.length}
                </span>
              </div>

              <div className="w-full bg-primary-foreground/20 rounded-full h-1 mb-8">
                <div
                  className="bg-accent h-1 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-medium mb-8 text-balance">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => {
                  const isCorrect = index === questions[currentQuestion].correct
                  const isSelected = selectedAnswer === index
                  
                  let buttonClass = "w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-4 "
                  
                  if (answered) {
                    if (isCorrect) {
                      buttonClass += "bg-accent/20 border-2 border-accent text-primary-foreground"
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "bg-destructive/20 border-2 border-destructive text-primary-foreground"
                    } else {
                      buttonClass += "bg-primary-foreground/5 border-2 border-transparent text-primary-foreground/50"
                    }
                  } else {
                    buttonClass += "bg-primary-foreground/5 border-2 border-transparent hover:bg-primary-foreground/10 hover:border-primary-foreground/20 text-primary-foreground"
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                      className={buttonClass}
                    >
                      <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-sm flex-shrink-0">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {answered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      )}
                      {answered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </button>
                  )
                })}
              </div>

              {answered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-primary-foreground/5 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-primary-foreground/80">
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>
                </motion.div>
              )}

              {answered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 flex justify-end"
                >
                  <Button
                    onClick={nextQuestion}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {currentQuestion < questions.length - 1
                      ? "Siguiente pregunta"
                      : "Ver resultados"}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 text-center"
            >
              <Trophy className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                ¡Quiz Completado!
              </h3>
              <p className="text-4xl font-light text-accent mb-2">
                {score} / {questions.length}
              </p>
              <p className="text-primary-foreground/60 mb-8">
                {score === questions.length
                  ? "¡Excelente! Eres un experto en convenios ambientales."
                  : score >= questions.length / 2
                  ? "¡Buen trabajo! Tienes buenos conocimientos sobre estos convenios."
                  : "Sigue aprendiendo sobre estos importantes convenios ambientales."}
              </p>
              <Button
                onClick={resetQuiz}
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reintentar Quiz
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
