'use client'

import { useState } from 'react'
import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  topic: string
}

const quizData: Question[] = [
  {
    id: 1,
    question: 'Quantas arestas tem um grafo completo K₅?',
    options: ['8', '10', '12', '20'],
    correct: 1,
    explanation: 'Um grafo completo Kₙ tem n(n-1)/2 arestas. Para K₅: 5(5-1)/2 = 5(4)/2 = 10 arestas.',
    topic: 'Grafos Básicos'
  },
  {
    id: 2,
    question: 'O que diz o Teorema do Aperto de Mãos?',
    options: [
      'A soma dos graus é igual ao número de arestas',
      'A soma dos graus é o dobro do número de arestas',
      'O número de vértices de grau ímpar é sempre ímpar',
      'Todo grafo tem pelo menos um vértice de grau par'
    ],
    correct: 1,
    explanation: 'O Teorema do Aperto de Mãos afirma que ∑deg(v) = 2|E|. Cada aresta contribui com 2 no somatório dos graus.',
    topic: 'Teoremas'
  },
  {
    id: 3,
    question: 'Para um grafo ter um ciclo Euleriano, todos os vértices devem ter:',
    options: ['Grau par', 'Grau ímpar', 'Grau maior que 2', 'Grau igual'],
    correct: 0,
    explanation: 'Um grafo tem ciclo Euleriano se e somente se todos os vértices têm grau par e o grafo é conexo.',
    topic: 'Caminhos Eulerianos'
  },
  {
    id: 4,
    question: 'Quantas arestas tem uma árvore com 10 vértices?',
    options: ['8', '9', '10', '11'],
    correct: 1,
    explanation: 'Uma árvore sempre tem |E| = |V| - 1 arestas. Com 10 vértices: 10 - 1 = 9 arestas.',
    topic: 'Árvores'
  },
  {
    id: 5,
    question: 'Em uma matriz de adjacência de um grafo não-direcionado, a matriz é:',
    options: ['Simétrica', 'Diagonal', 'Triangular', 'Identidade'],
    correct: 0,
    explanation: 'A matriz de adjacência de um grafo não-direcionado é simétrica porque A[i][j] = A[j][i] (se há aresta de i para j, há de j para i).',
    topic: 'Matrizes'
  },
  {
    id: 6,
    question: 'Qual é a complexidade do algoritmo de Dijkstra com lista de adjacência?',
    options: ['O(V²)', 'O(E log E)', 'O(V + E)', 'O((V + E) log V)'],
    correct: 3,
    explanation: 'Com heap de Fibonacci ou fila de prioridade, Dijkstra tem complexidade O((V + E) log V) usando lista de adjacência.',
    topic: 'Algoritmos'
  },
  {
    id: 7,
    question: 'Quantos elementos tem o conjunto potência de um conjunto com 4 elementos?',
    options: ['8', '12', '16', '24'],
    correct: 2,
    explanation: 'O conjunto potência P(A) tem |P(A)| = 2^|A| elementos. Para |A| = 4: 2⁴ = 16 elementos.',
    topic: 'Conjuntos'
  },
  {
    id: 8,
    question: 'A Fórmula de Euler para grafos planares é:',
    options: ['V + E - F = 2', 'V - E + F = 2', 'V + E + F = 2', 'V - E - F = 2'],
    correct: 1,
    explanation: 'A Fórmula de Euler para grafos planares conexos é V - E + F = 2, onde V são vértices, E arestas e F faces.',
    topic: 'Grafos Planares'
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizData.length).fill(false))

  const question = quizData[currentQuestion]
  const progress = ((currentQuestion + 1) / quizData.length) * 100

  const handleAnswer = (index: number) => {
    if (answeredQuestions[currentQuestion]) return // Já respondeu

    setSelectedAnswer(index)
    setShowExplanation(true)

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    if (index === question.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizCompleted(false)
    setAnsweredQuestions(new Array(quizData.length).fill(false))
  }

  const scorePercentage = Math.round((score / quizData.length) * 100)

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ModernHeader />

        <main className="container-modern px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                {scorePercentage >= 80 ? (
                  <div className="text-6xl mb-4">🎉</div>
                ) : scorePercentage >= 60 ? (
                  <div className="text-6xl mb-4">😊</div>
                ) : (
                  <div className="text-6xl mb-4">📚</div>
                )}
              </div>

              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Quiz Concluído!
              </h1>

              <div className="mb-6">
                <div className="text-5xl font-bold text-green-600 mb-2">
                  {score}/{quizData.length}
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  {scorePercentage}% de acertos
                </p>
              </div>

              <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  {scorePercentage >= 80
                    ? '🌟 Excelente! Você domina o conteúdo!'
                    : scorePercentage >= 60
                    ? '👍 Bom trabalho! Continue estudando para melhorar.'
                    : '📖 Continue estudando! Revise os tópicos e tente novamente.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  Tentar Novamente
                </button>
                <Link
                  href="/roteiro"
                  className="px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                >
                  Ver Roteiro de Estudo
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ModernHeader />

      <main className="container-modern px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-8">
            <Link href="/" className="text-green-600 hover:underline">
              Início
            </Link>
            <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
            <span className="text-gray-900 dark:text-gray-100">Quiz Interativo</span>
          </nav>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Questão {currentQuestion + 1} de {quizData.length}
              </span>
              <span className="text-sm font-medium text-green-600">
                Score: {score}/{currentQuestion + (answeredQuestions[currentQuestion] ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6 border border-gray-200 dark:border-gray-700">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs font-medium rounded-full">
                {question.topic}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correct
                const showResult = showExplanation

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={answeredQuestions[currentQuestion]}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showResult && isCorrect
                        ? 'border-green-600 bg-green-50 dark:bg-green-900/20'
                        : showResult && isSelected && !isCorrect
                        ? 'border-red-600 bg-red-50 dark:bg-red-900/20'
                        : isSelected
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
                    } ${
                      answeredQuestions[currentQuestion] ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 dark:text-gray-100">{option}</span>
                      {showResult && isCorrect && (
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {showExplanation && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-r-lg">
                <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">💡 Explicação:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{question.explanation}</p>
              </div>
            )}
          </div>

          {showExplanation && (
            <button
              onClick={handleNext}
              className="w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-lg"
            >
              {currentQuestion < quizData.length - 1 ? 'Próxima Questão →' : 'Ver Resultado 🎯'}
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
