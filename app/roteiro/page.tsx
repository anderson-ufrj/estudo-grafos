'use client'

import Link from 'next/link'
import ModernHeader from '@/app/components/ModernHeader'
import { useState } from 'react'

interface Topic {
  id: string
  title: string
  url: string
  estimated: string
  description: string
}

export default function RoteiroPage() {
  const [completedTopics, setCompletedTopics] = useState<string[]>([])

  const roadmap: { week: number; topics: Topic[] }[] = [
    {
      week: 1,
      topics: [
        {
          id: 'conjuntos',
          title: 'Fundamentos de Conjuntos',
          url: '/teoria/conjuntos',
          estimated: '2-3 horas',
          description: 'Conjunto potência, produto cartesiano, operações com conjuntos'
        }
      ]
    },
    {
      week: 2,
      topics: [
        {
          id: 'introducao',
          title: 'Introdução aos Grafos',
          url: '/teoria/introducao',
          estimated: '3-4 horas',
          description: 'Definições básicas, tipos de grafos, grau de vértices'
        }
      ]
    },
    {
      week: 3,
      topics: [
        {
          id: 'caminhos',
          title: 'Caminhos e Ciclos',
          url: '/teoria/caminhos',
          estimated: '3-4 horas',
          description: 'Passeios, trilhas, caminhos, conectividade, Teorema do Aperto de Mãos'
        }
      ]
    },
    {
      week: 4,
      topics: [
        {
          id: 'matrizes',
          title: 'Representação Matricial',
          url: '/teoria/matrizes',
          estimated: '2-3 horas',
          description: 'Matriz de adjacência, matriz de incidência, potências'
        }
      ]
    },
    {
      week: 5,
      topics: [
        {
          id: 'formulas',
          title: 'Fórmulas e Algoritmos',
          url: '/teoria/formulas',
          estimated: '3-4 horas',
          description: 'Todas as fórmulas essenciais e complexidades de algoritmos'
        },
        {
          id: 'exercicios',
          title: 'Exercícios Resolvidos',
          url: '/exercicios/todos',
          estimated: '4-6 horas',
          description: 'Praticar com exercícios resolvidos de todos os tópicos'
        }
      ]
    }
  ]

  const toggleTopic = (topicId: string) => {
    setCompletedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    )
  }

  const totalTopics = roadmap.reduce((acc, week) => acc + week.topics.length, 0)
  const progress = Math.round((completedTopics.length / totalTopics) * 100)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ModernHeader />

      <main className="container-modern px-4 py-8">
        <nav className="mb-8">
          <Link href="/" className="text-green-600 hover:underline">
            Início
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <span className="text-gray-900 dark:text-gray-100">Roteiro de Estudo</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Roteiro de Estudo Completo
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Plano estruturado de 5 semanas para dominar Teoria dos Grafos
        </p>

        {/* Progress Bar */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Seu Progresso</h2>
            <span className="text-2xl font-bold text-green-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div
              className="bg-green-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {completedTopics.length} de {totalTopics} tópicos concluídos
          </p>
        </div>

        {/* Roadmap */}
        <div className="space-y-8">
          {roadmap.map(({ week, topics }) => (
            <div key={week} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Semana {week}
              </h2>

              <div className="space-y-4">
                {topics.map(topic => (
                  <div
                    key={topic.id}
                    className={`border-l-4 p-4 rounded-r-lg transition-all ${
                      completedTopics.includes(topic.id)
                        ? 'border-green-600 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <button
                            onClick={() => toggleTopic(topic.id)}
                            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                              completedTopics.includes(topic.id)
                                ? 'bg-green-600 border-green-600'
                                : 'border-gray-300 dark:border-gray-600 hover:border-green-600'
                            }`}
                          >
                            {completedTopics.includes(topic.id) && (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {topic.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 ml-9">
                          {topic.description}
                        </p>
                        <div className="flex items-center gap-4 ml-9">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            ⏱️ {topic.estimated}
                          </span>
                          <Link
                            href={topic.url}
                            className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline"
                          >
                            Estudar agora →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">📚 Dica de Estudo</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Reserve tempo para fazer anotações e resolver os exercícios propostos em cada tópico.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">✅ Progressão</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Marque os tópicos concluídos para acompanhar seu progresso. Os dados são salvos localmente.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">🎯 Flexibilidade</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Adapte o ritmo conforme sua necessidade. O importante é entender bem cada conceito.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link href="/" className="text-green-600 hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </main>
    </div>
  )
}
