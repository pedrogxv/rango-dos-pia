# Rango dos Pia 🍔

Um blog especializado em avaliação de lanches de rua de Londrina, construído com Astro, Tailwind CSS e shadcn/ui.

## 📖 Sobre

O **Rango dos Pia** é um blog que nasceu da paixão por comida de rua e da vontade de compartilhar as melhores descobertas gastronômicas de Londrina. Nossa missão é ajudar você a encontrar onde comer bem sem gastar muito!

### 🎯 O que avaliamos

- 🍔 **Hambúrgueres**: Artesanais, gourmet e tradicionais
- 🥟 **Pastéis**: De carne, queijo, frango e sabores especiais  
- 🌭 **Cachorros-Quentes**: Tradicionais e gourmet
- 🍕 **Pizzas**: Fatias e pizzas inteiras
- 🍟 **Outros**: Coxinhas, esfihas, sanduíches e muito mais

### ⭐ Critérios de Avaliação

Cada estabelecimento é avaliado considerando:

- **Sabor (0-10)**: Qualidade dos ingredientes, tempero e combinação de sabores
- **Apresentação (0-10)**: Visual do prato e cuidado na montagem
- **Ambiente (0-10)**: Limpeza, conforto e atmosfera do local
- **Atendimento (0-10)**: Cordialidade, rapidez e eficiência
- **Custo-Benefício**: Relação entre preço e qualidade

## 🚀 Tecnologias

- [Astro](https://astro.build) - Framework web para conteúdo
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitário
- [shadcn/ui](https://ui.shadcn.com) - Componentes de interface
- [TypeScript](https://www.typescriptlang.org) - Tipagem estática
- [MDX](https://mdxjs.com) - Markdown com componentes React

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/rango-dos-pia.git
cd rango-dos-pia
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:4321](http://localhost:4321) no seu navegador.

## 📝 Como Adicionar Avaliações

Para adicionar uma nova avaliação:

1. Crie um novo arquivo MDX em `src/content/blog/`
2. Use o seguinte formato de frontmatter:

```yaml
---
title: 'Título da Avaliação'
description: 'Descrição breve da avaliação'
date: 2024-01-15
image: ''
tags: ['hamburguer', 'artesanal', 'londrina']
authors: ['enscribe']
estabelecimento: 'Nome do Estabelecimento'
endereco: 'Endereço completo'
preco: 18.50
nota: 9.2
horario: 'Horário de funcionamento'
telefone: '(43) 99999-9999'
instagram: '@instagram'
categoria: 'hamburguer'
---
```

3. Escreva o conteúdo da avaliação em Markdown/MDX

## 🎨 Personalização

### Cores e Tema

O projeto usa Tailwind CSS com um tema personalizado. As cores principais podem ser alteradas em `src/styles/global.css`.

### Componentes

Os componentes estão localizados em `src/components/` e podem ser facilmente customizados.

### Configurações

As configurações principais do site estão em `src/consts.ts`.

## 📱 Redes Sociais

- 📸 [Instagram](https://instagram.com/rangodospia)
- 🎵 [TikTok](https://tiktok.com/@rangodospia)
- 📧 [Email](mailto:contato@rangodospia.com)

## 🤝 Contribuição

Tem uma sugestão de lugar para avaliarmos? Quer compartilhar sua experiência? Entre em contato conosco!

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Bom apetite e até a próxima avaliação! 🍽️**
