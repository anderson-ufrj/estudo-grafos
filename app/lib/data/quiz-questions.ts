export interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  topic: string
  difficulty?: 'Básico' | 'Intermediário' | 'Avançado'
}

export const quizQuestions: Question[] = [
  // Questões Básicas (8 originais)
  {
    id: 1,
    question: 'Quantas arestas tem um grafo completo K₅?',
    options: ['8', '10', '12', '20'],
    correct: 1,
    explanation: 'Um grafo completo Kₙ tem n(n-1)/2 arestas. Para K₅: 5(5-1)/2 = 5(4)/2 = 10 arestas.',
    topic: 'Grafos Básicos',
    difficulty: 'Básico'
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
    topic: 'Teoremas',
    difficulty: 'Básico'
  },
  {
    id: 3,
    question: 'Para um grafo ter um ciclo Euleriano, todos os vértices devem ter:',
    options: ['Grau par', 'Grau ímpar', 'Grau maior que 2', 'Grau igual'],
    correct: 0,
    explanation: 'Um grafo tem ciclo Euleriano se e somente se todos os vértices têm grau par e o grafo é conexo.',
    topic: 'Caminhos Eulerianos',
    difficulty: 'Básico'
  },
  {
    id: 4,
    question: 'Quantas arestas tem uma árvore com 10 vértices?',
    options: ['8', '9', '10', '11'],
    correct: 1,
    explanation: 'Uma árvore sempre tem |E| = |V| - 1 arestas. Com 10 vértices: 10 - 1 = 9 arestas.',
    topic: 'Árvores',
    difficulty: 'Básico'
  },
  {
    id: 5,
    question: 'Em uma matriz de adjacência de um grafo não-direcionado, a matriz é:',
    options: ['Simétrica', 'Diagonal', 'Triangular', 'Identidade'],
    correct: 0,
    explanation: 'A matriz de adjacência de um grafo não-direcionado é simétrica porque A[i][j] = A[j][i] (se há aresta de i para j, há de j para i).',
    topic: 'Matrizes',
    difficulty: 'Básico'
  },
  {
    id: 6,
    question: 'Qual é a complexidade do algoritmo de Dijkstra com lista de adjacência?',
    options: ['O(V²)', 'O(E log E)', 'O(V + E)', 'O((V + E) log V)'],
    correct: 3,
    explanation: 'Com heap de Fibonacci ou fila de prioridade, Dijkstra tem complexidade O((V + E) log V) usando lista de adjacência.',
    topic: 'Algoritmos',
    difficulty: 'Intermediário'
  },
  {
    id: 7,
    question: 'Quantos elementos tem o conjunto potência de um conjunto com 4 elementos?',
    options: ['8', '12', '16', '24'],
    correct: 2,
    explanation: 'O conjunto potência P(A) tem |P(A)| = 2^|A| elementos. Para |A| = 4: 2⁴ = 16 elementos.',
    topic: 'Conjuntos',
    difficulty: 'Básico'
  },
  {
    id: 8,
    question: 'A Fórmula de Euler para grafos planares é:',
    options: ['V + E - F = 2', 'V - E + F = 2', 'V + E + F = 2', 'V - E - F = 2'],
    correct: 1,
    explanation: 'A Fórmula de Euler para grafos planares conexos é V - E + F = 2, onde V são vértices, E arestas e F faces.',
    topic: 'Grafos Planares',
    difficulty: 'Intermediário'
  },

  // 12 Novas Questões
  {
    id: 9,
    question: 'Um grafo bipartido completo K₃,₄ possui quantas arestas?',
    options: ['7', '10', '12', '14'],
    correct: 2,
    explanation: 'Um grafo bipartido completo Kₘ,ₙ tem m×n arestas. Para K₃,₄: 3×4 = 12 arestas.',
    topic: 'Grafos Bipartidos',
    difficulty: 'Intermediário'
  },
  {
    id: 10,
    question: 'Qual estrutura de dados o algoritmo BFS utiliza?',
    options: ['Pilha', 'Fila', 'Árvore Binária', 'Hash Table'],
    correct: 1,
    explanation: 'BFS (Busca em Largura) utiliza uma FILA (queue) para processar vértices por níveis, garantindo exploração camada por camada.',
    topic: 'Algoritmos',
    difficulty: 'Básico'
  },
  {
    id: 11,
    question: 'Um grafo com 6 vértices e 15 arestas é necessariamente:',
    options: ['Completo', 'Bipartido', 'Planar', 'Acíclico'],
    correct: 0,
    explanation: 'K₆ tem 6(6-1)/2 = 15 arestas. Um grafo com 6 vértices e 15 arestas só pode ser completo (todas conexões possíveis).',
    topic: 'Grafos Completos',
    difficulty: 'Intermediário'
  },
  {
    id: 12,
    question: 'Qual algoritmo NÃO encontra árvore geradora mínima?',
    options: ['Prim', 'Kruskal', 'Dijkstra', 'Borůvka'],
    correct: 2,
    explanation: 'Dijkstra encontra o menor caminho de um vértice origem. Prim, Kruskal e Borůvka encontram árvore geradora mínima.',
    topic: 'Algoritmos',
    difficulty: 'Intermediário'
  },
  {
    id: 13,
    question: 'Dado A = {1,2,3} e B = {2,3,4}, qual é A ∩ B?',
    options: ['{1,2,3,4}', '{2,3}', '{1}', '{4}'],
    correct: 1,
    explanation: 'A interseção A ∩ B contém apenas os elementos que pertencem a AMBOS os conjuntos: {2,3}.',
    topic: 'Conjuntos',
    difficulty: 'Básico'
  },
  {
    id: 14,
    question: 'Se um grafo tem um caminho Euleriano mas não um ciclo Euleriano, quantos vértices de grau ímpar ele possui?',
    options: ['0', '1', '2', '3 ou mais'],
    correct: 2,
    explanation: 'Um caminho Euleriano existe quando há exatamente 2 vértices de grau ímpar (início e fim). Ciclo requer todos pares.',
    topic: 'Caminhos Eulerianos',
    difficulty: 'Avançado'
  },
  {
    id: 15,
    question: 'Qual é a complexidade do algoritmo de Floyd-Warshall?',
    options: ['O(V²)', 'O(V³)', 'O(V log V)', 'O(E log V)'],
    correct: 1,
    explanation: 'Floyd-Warshall usa três loops aninhados sobre todos vértices, resultando em complexidade O(V³).',
    topic: 'Algoritmos',
    difficulty: 'Intermediário'
  },
  {
    id: 16,
    question: 'Uma floresta é um grafo:',
    options: [
      'Conexo sem ciclos',
      'Desconexo sem ciclos',
      'Conexo com ciclos',
      'Sempre completo'
    ],
    correct: 1,
    explanation: 'Uma floresta é um grafo acíclico (sem ciclos) que NÃO é necessariamente conexo. É uma união de árvores.',
    topic: 'Árvores',
    difficulty: 'Intermediário'
  },
  {
    id: 17,
    question: 'O número cromático de um grafo bipartido é no máximo:',
    options: ['1', '2', '3', '4'],
    correct: 1,
    explanation: 'Todo grafo bipartido pode ser colorido com no máximo 2 cores (uma para cada partição), logo χ(G) ≤ 2.',
    topic: 'Coloração',
    difficulty: 'Avançado'
  },
  {
    id: 18,
    question: 'Se |A| = 3 e |B| = 4, quantos elementos tem A × B?',
    options: ['7', '12', '16', '64'],
    correct: 1,
    explanation: 'O produto cartesiano A × B tem |A| × |B| elementos. 3 × 4 = 12 pares ordenados.',
    topic: 'Conjuntos',
    difficulty: 'Básico'
  },
  {
    id: 19,
    question: 'Um grafo planar com 10 vértices e 8 faces possui quantas arestas?',
    options: ['14', '16', '18', '20'],
    correct: 1,
    explanation: 'Pela Fórmula de Euler V - E + F = 2: 10 - E + 8 = 2, então E = 16 arestas.',
    topic: 'Grafos Planares',
    difficulty: 'Avançado'
  },
  {
    id: 20,
    question: 'Qual estrutura de dados DFS (Busca em Profundidade) utiliza?',
    options: ['Fila', 'Pilha', 'Heap', 'Grafo'],
    correct: 1,
    explanation: 'DFS utiliza uma PILHA (stack) - seja explícita ou implícita via recursão - para explorar em profundidade antes de retroceder.',
    topic: 'Algoritmos',
    difficulty: 'Básico'
  }
]
