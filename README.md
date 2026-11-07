# Portfólio · Larissa Ribeiro

Portfólio pessoal de **Larissa Ribeiro**, estudante de Engenharia da Computação na UFAM (Manaus, AM), em busca de estágio em TI.

🔗 **Site:** https://larissaribeiro-dev.github.io

## O que tem no site

- Apresentação, formação e cursos, áreas de atuação, habilidades, projetos, competências e formulário de contato
- **Dois idiomas** (português e inglês), com troca em um clique
- **Projetos com miniaturas animadas** que mostram o que cada um faz: terminal, grafo de tarefas, diagrama do processador, relógio de 7 segmentos, monitor ESP32, osciloscópio de hazards, emulador e API
- Layout responsivo para celular, tablet e computador
- Animações de entrada, menu lateral e navegação com destaque da seção atual
- Download do currículo em PDF

## Tecnologias

HTML, CSS e JavaScript puro, sem frameworks, sem build e sem dependências. A única coisa externa é a fonte [Inter](https://fonts.google.com/specimen/Inter), carregada do Google Fonts.

## Estrutura

```
portifolio/
├── index.html      # estrutura da página
├── style.css       # estilos e animações
├── script.js       # textos PT/EN, projetos e interações
├── thumbs.js       # miniaturas animadas dos projetos
├── curriculo.pdf   # currículo para download
└── assets/
    ├── foto.jpg    # foto do perfil
    └── icons/      # ícones das tecnologias
```

## Rodar no computador

Basta abrir o `index.html` no navegador. Se preferir um servidor local:

```bash
python -m http.server 8000
```

e acessar http://localhost:8000.

## Adicionar um projeto novo

Os projetos ficam no array `P` do `script.js`. Cada projeto é uma linha neste formato:

```js
['nome-do-repositorio', ['Tag1', 'Tag2'], { pt: 'Descrição em português.', en: 'Description in English.' }],
```

O nome precisa ser igual ao do repositório no GitHub, pois o botão "Ver no GitHub" usa esse nome para montar o link. Para usar uma imagem no card, salve-a em `assets/projetos/nome-do-repositorio.jpg`.

## Publicação

O site é publicado com o **GitHub Pages**, direto da branch `main`. A cada `git push`, ele é atualizado automaticamente em alguns minutos.

## Contato

- E-mail: larissa.rafaela.dev@gmail.com
- GitHub: [@larissaribeiro-dev](https://github.com/larissaribeiro-dev)
- LinkedIn: [larissaribeiro-dev](https://linkedin.com/in/larissaribeiro-dev)
