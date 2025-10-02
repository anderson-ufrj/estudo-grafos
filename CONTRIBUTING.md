# Guia de Contribuição

## Convenções de Commits

Este projeto utiliza commits em **português** seguindo o padrão:

```
<tipo>: <descrição>
```

### Tipos de Commit

- `feat`: nova funcionalidade
- `fix`: correção de bug  
- `docs`: alterações na documentação
- `style`: formatação, ponto e vírgula faltando, etc (não afeta lógica)
- `refactor`: refatoração de código (não adiciona funcionalidade nem corrige bug)
- `test`: adição ou correção de testes
- `chore`: tarefas de build, configuração de ferramentas, etc

### Exemplos

```bash
feat: adiciona página de matrizes de adjacência
fix: corrige erro de sintaxe nos componentes
docs: atualiza README com instruções de deploy
style: formata código com prettier
refactor: simplifica lógica de navegação
test: adiciona testes para componente Header
chore: atualiza dependências do projeto
```

### Descrição

- Use o imperativo: "adiciona" ao invés de "adicionado" ou "adicionando"
- Primeira letra minúscula
- Sem ponto final
- Máximo 50 caracteres

### Corpo do Commit (opcional)

Para explicações mais detalhadas, adicione uma linha em branco após a descrição:

```bash
feat: implementa sistema de busca de exercícios

Adiciona funcionalidade de busca por palavras-chave
nos exercícios e resoluções. Inclui filtros por
tópico e nível de dificuldade.
```