# 🛒 Lista de Compras

Projeto desenvolvido como parte do desafio de introdução ao JavaScript da [Rocketseat](https://www.rocketseat.com.br/).

## 📋 Sobre o Projeto

Uma aplicação web simples e intuitiva para gerenciar sua lista de compras semanal. Permite adicionar, marcar como comprado e remover itens da lista de forma prática.

## ✨ Funcionalidades

- ✅ Adicionar novos itens à lista
- ✅ Marcar itens como comprados (checkbox)
- ✅ Remover itens da lista (apenas itens marcados)
- ✅ Validação de entrada (não permite números)
- ✅ Mensagem de confirmação ao remover item
- ✅ Interface responsiva e moderna

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## 🎨 Layout

O projeto utiliza:
- Fonte: Inter (Google Fonts)
- Design limpo e minimalista
- Variáveis CSS customizadas
- Interface responsiva

## 📁 Estrutura do Projeto

```
shopping-list/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── logo.svg
│   ├── arrow_left.svg
│   ├── trash.svg
│   └── close.svg
└── README.md
```

## 💻 Como Usar

1. Clone o repositório ou faça o download dos arquivos
2. Abra o arquivo `index.html` no seu navegador
3. Digite o nome do item no campo de texto
4. Clique em "Adicionar item" ou pressione Enter
5. Marque o checkbox quando comprar o item
6. Clique no ícone da lixeira para remover itens marcados

## 🔧 Funcionalidades Técnicas

### Validação de Entrada
O campo de texto não aceita números, apenas texto:
```javascript
inputText.value = inputText.value.replace(/\d+/g, '');
```

### Proteção ao Remover
Só é possível remover itens que estejam marcados como comprados, evitando exclusões acidentais.

### Feedback Visual
Ao remover um item, uma mensagem de confirmação aparece por 2 segundos no rodapé da página.

## 🎯 Aprendizados

Este projeto aborda conceitos fundamentais de JavaScript:
- Manipulação do DOM
- Event Listeners
- Criação dinâmica de elementos
- Validação de formulários
- Expressões regulares (Regex)
- Funções e métodos JavaScript

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte do desafio da Rocketseat.

---

Desenvolvido com 💜 durante o desafio da Rocketseat
