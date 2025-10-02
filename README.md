# 📚 Estudo de Teoria dos Grafos

Material didático interativo para o estudo de Teoria dos Grafos, desenvolvido para auxiliar estudantes do IFSULDEMINAS - Campus Muzambinho na preparação para provas e compreensão dos conceitos fundamentais.

## 🎯 Objetivo

Este projeto foi criado para fornecer um material de estudo completo e interativo sobre Teoria dos Grafos, incluindo:
- Resumos teóricos estruturados
- Fórmulas essenciais
- Exercícios resolvidos passo a passo
- Interface responsiva e otimizada para impressão

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **React** - Biblioteca para construção de interfaces

## 📋 Conteúdo Abordado

### 1. Fundamentos de Conjuntos
- Conjunto Potência
- Produto Cartesiano
- Funções (Total, Injetora, Sobrejetora, Bijetora)
- Relações Binárias
- Relações de Equivalência e Ordem Parcial

### 2. Introdução aos Grafos
- Definições básicas (vértices, arestas)
- Tipos de grafos
- Grafos bipartidos
- Aplicações práticas

### 3. Caminhos e Ciclos
- Hierarquia: Passeio → Trilha → Caminho
- Conectividade
- Componentes conexos
- Teorema do Aperto de Mãos

### 4. Representação Matricial
- Matriz de Adjacência
- Matriz de Incidência
- Algoritmos básicos
- Cálculo de passeios

### 5. Exercícios Resolvidos
- Relações binárias
- Funções injetoras
- Construção de grafos
- Verificação de propriedades

## 🛠️ Instalação e Uso

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/estudo-grafos.git
cd estudo-grafos
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📱 Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Modo de impressão otimizado (preto e branco)
- ✅ Navegação intuitiva entre tópicos
- ✅ Exercícios com soluções detalhadas
- ✅ Fórmulas destacadas para fácil memorização
- ✅ Exemplos visuais e diagramas

## 🌐 Deploy

### GitHub Pages
Para fazer deploy no GitHub Pages:

```bash
npm run build
npm run export
```

Os arquivos estáticos serão gerados na pasta `out/`.

### Vercel
Para deploy no Vercel (recomendado para Next.js):

1. Faça push do código para o GitHub
2. Conecte o repositório no Vercel
3. O deploy será automático a cada push

## 📝 Estrutura do Projeto

```
estudo-grafos/
├── app/                  # App directory (Next.js 13+)
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página inicial
│   ├── teoria/          # Páginas de teoria
│   ├── exercicios/      # Páginas de exercícios
│   └── components/      # Componentes reutilizáveis
├── public/              # Arquivos estáticos
├── styles/              # Estilos globais
└── lib/                 # Utilitários e tipos
```

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Anderson Henrique**

- GitHub: [@anderson-ufrj](https://github.com/anderson-ufrj)
- Email: andersonhs27@gmail.com
- Data: 28 de setembro de 2025

## 👨‍🏫 Professor

**Prof. Ricardo Martins**  
IFSULDEMINAS - Campus Muzambinho

---

💡 **Dica**: Use este material como complemento aos seus estudos. Pratique resolvendo os exercícios antes de ver as soluções!