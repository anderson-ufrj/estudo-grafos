# 📚 Estudo de Teoria dos Grafos

Plataforma educacional completa e interativa para estudo de Teoria dos Grafos, desenvolvida para estudantes do **IFSULDEMINAS - Campus Muzambinho** com foco em aprendizado prático e acessibilidade.

## 🎯 Objetivo

Este projeto oferece uma experiência de aprendizado moderna e completa sobre Teoria dos Grafos, incluindo:
- 📖 **Teoria completa** com 5 módulos estruturados
- ✏️ **10 exercícios resolvidos** passo a passo (conjuntos + grafos)
- 🎮 **Quiz interativo** com 20 questões e 3 níveis de dificuldade
- 🔍 **Busca inteligente** com 48+ itens indexados e filtros
- 📱 **Design responsivo** otimizado para mobile, tablet e desktop
- 🌓 **Dark mode** com suporte completo
- ♿ **Acessibilidade** com integração VLibras (Libras)
- 🖨️ **Otimizado para impressão** em formato PDF

## ✨ Novidades Recentes (2025)

### Navegação e UX
- ✅ Menu hamburger responsivo para mobile
- ✅ FloatingActionMenu (FAB) consolidado
- ✅ Breadcrumb navigation em todas páginas
- ✅ Página 404 personalizada
- ✅ Atalho de teclado Cmd+K / Ctrl+K para busca rápida

### Busca e Filtros
- ✅ 48 itens indexados (teoria, exercícios, algoritmos, recursos)
- ✅ Filtros por categoria (Todos, Teoria, Exercícios, Recursos)
- ✅ Contador de resultados em tempo real
- ✅ Busca em título e conteúdo

### Conteúdo Expandido
- ✅ **20 questões no quiz** (antes: 8) com níveis de dificuldade
- ✅ **Exercícios de Conjuntos** - 5 exercícios resolvidos
- ✅ **Exercícios de Grafos** - 5 exercícios avançados (Kruskal, Euler, etc)
- ✅ Dados do quiz externalizados para fácil manutenção

### SEO e Performance
- ✅ Meta descriptions em todas páginas
- ✅ Open Graph tags para redes sociais
- ✅ 16+ keywords otimizadas
- ✅ Build otimizado sem erros TypeScript
- ✅ 13 rotas estáticas geradas

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
3. Commit suas mudanças em português (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

**Importante**: Este projeto utiliza commits em português. Consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para ver o padrão de commits.

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