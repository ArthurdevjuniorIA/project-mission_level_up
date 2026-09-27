# 🛸 As Coisas Estranhas do Front-End — Gamified Roadmap

![Project Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-red?style=for-the-badge)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Educational-lightgrey?style=for-the-badge)](#-licença)

Uma aplicação web gamificada e interativa inspirada no universo de **Stranger Things**. O projeto atua como um **Roadmap de Estudos em Desenvolvimento Front-End**, utilizando elementos narrativos, escolha de personagens e cenários da série para transformar o aprendizado de **HTML, CSS e JavaScript** em uma jornada imersiva — do "Mundo Normal" dos fundamentos até o "Mundo Invertido" da lógica avançada.

---

## 🎮 Sobre o Projeto

A ideia central é simples: aprender front-end costuma ser uma jornada solitária e, às vezes, monótona. Por isso, transformamos esse caminho em uma **missão de RPG** ambientada em Hawkins. O jogador escolhe seu avatar, decide entre os dois mundos disponíveis e avança fase a fase, desbloqueando conceitos de HTML, CSS e JavaScript como se fossem estágios de um jogo — com progresso salvo, barra de XP e um vilão final para enfrentar no fim da trilha.

---

## 🕹️ Funcionalidades Principais

* 🎬 **Abertura Cinematográfica** — Vinheta de entrada em vídeo com controles interativos de áudio/vídeo e transição suave para a partida.
* 👾 **Seleção de Avatares** — Escolha de personagens icônicos em estilo Pixel Art (Dustin, Eddie, Demogorgon, entre outros), cada um com atributos e status próprios.
* 🚲 **Escolha de Mundos:**
  * **Mundo Normal** — 6 fases focadas em fundamentos de HTML5, estilização e layouts CSS.
  * **Mundo Invertido** — 5 fases avançadas cobrindo manipulação do DOM, eventos, lógica e JavaScript assíncrono.
* 🗺️ **Mapa Interativo de Hawkins** — Ponto de navegação dinâmico onde cada localidade representa um módulo de aprendizado.
* 📊 **Sistema de Progresso** — Barra de XP e acompanhamento de evolução do jogador ao longo das fases.
* 👥 **Página de Colaboradores (Player Cards)** — Seção temática no estilo RPG/Arcade retrô apresentando os desenvolvedores do projeto e suas competências.
* 🏆 **Tela de Vitória** — Finalização épica e celebração ao concluir todas as fases e salvar o Mundo Invertido.

---

## 🧠 Trilha de Aprendizado

O roadmap foi desenhado como uma progressão real de conhecimento, não apenas como decoração temática:

| Mundo | Foco | Fases |
|---|---|---|
| 🌤️ **Mundo Normal** | HTML5 semântico, estilização com CSS, responsividade e layout (Flexbox/Grid) | 6 fases |
| 🌑 **Mundo Invertido** | Lógica de programação, manipulação do DOM, eventos e JavaScript assíncrono | 5 fases |

A cada fase concluída, o jogador acumula XP e desbloqueia a próxima etapa do mapa — reforçando conceitos antes de avançar para desafios mais complexos.

---

## 📁 Estrutura do Projeto

```text
project-mission_level_up/
│
├── docs/                           # Documentação do projeto
│
├── src/
│   ├── assets/                     # Recursos de mídia da aplicação
│   │   ├── audios/                 # Trilhas sonoras e efeitos de áudio (.mp3)
│   │   │   ├── creatorsaudio.mp3
│   │   │   ├── finaldustinaudio.mp3
│   │   │   ├── finaleddieaudio.mp3
│   │   │   ├── finalgorgonaudio.mp3
│   │   │   ├── finalinverseaudio.mp3
│   │   │   ├── mundoinvertidoaudio.mp3
│   │   │   └── mundonormalaudio.mp3
│   │   ├── images/                 # Imagens, sprites e mapas
│   │   └── videos/                 # Vídeos e vinhetas de abertura
│   │
│   ├── css/                        # Folhas de estilo
│   │   ├── colaboradores.css
│   │   ├── fases-mundo.invertido.css
│   │   ├── fases-mundo.normal.css
│   │   ├── finals.css
│   │   ├── page1.css
│   │   ├── page2.css
│   │   ├── page3-4.css
│   │   ├── page5.css
│   │   └── page6.css
│   │
│   ├── js/                         # Scripts de lógica e interatividade
│   │   ├── colaborators.js
│   │   ├── fases-mundo.invertido.js
│   │   ├── fases-mundo.normal.js
│   │   ├── final.js
│   │   ├── page1.js
│   │   ├── page2.js
│   │   ├── page3-4.js
│   │   ├── page5.js
│   │   └── page6.js
│   │
│   └── pages/                      # Páginas e módulos do jogo
│       ├── finals/                 # Telas de encerramento por personagem
│       │   ├── finaldustin.html
│       │   ├── finaleddie.html
│       │   ├── finalgorgon.html
│       │   └── finalinverse.html
│       ├── inverse-fases/          # Fases do Mundo Invertido (1 a 5)
│       │   ├── inver-fase1.html
│       │   ├── inver-fase2.html
│       │   ├── inver-fase3.html
│       │   ├── inver-fase4.html
│       │   └── inver-fase5.html
│       ├── normal-fases/           # Fases do Mundo Normal (1 a 6)
│       │   ├── nor-fase1.html
│       │   ├── nor-fase2.html
│       │   ├── nor-fase3.html
│       │   ├── nor-fase4.html
│       │   ├── nor-fase5.html
│       │   └── nor-fase6.html
│       ├── colaboradores.html      # Página da equipe de desenvolvedores
│       ├── mundo-invertido.html    # Seleção de fases do Mundo Invertido
│       └── mundo-normal.html       # Seleção de fases do Mundo Normal
│
├── index.html                      # Ponto de entrada principal da aplicação (SPA)
├── LICENSE                         # Licença de uso
└── README.md                       # Documentação principal
```

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estruturação semântica de todas as páginas e fases.
* **CSS3** — Estilização temática (néon, pixel art, retrô), animações e responsividade.
* **JavaScript (Vanilla)** — Lógica do jogo, controle de fases, manipulação do DOM e sistema de progresso.

---

## 👥 Equipe e Colaboradores

| Jogador | Classe / Responsabilidade | Redes Sociais |
|---|---|---|
| **Arthur Kauã** | Idealizador & Web Developer (HTML/CSS) | — |
| **Marcus Paulo** | JavaScript Specialist (Lógica & DOM) | — |
| **Andrew Rafael** | Web Developer (HTML/CSS) | — |

---

## 💻 Como Rodar o Projeto

**1. Clonar o repositório:**

```bash
git clone https://github.com/Marcuspdev/project-mission_level_up.git
```

**2. Acessar a pasta do projeto:**

```bash
cd project-mission_level_up
```

**3. Executar a aplicação:**

Abra o arquivo `index.html` diretamente no seu navegador, ou utilize a extensão **Live Server** no VS Code para uma melhor experiência (recarregamento automático e suporte correto a caminhos relativos).

---

## 🗺️ Roadmap Futuro

* [ ] Salvar progresso do jogador em `localStorage`
* [ ] Adicionar novas fases ao Mundo Invertido (async/await, fetch, APIs)
* [ ] Sistema de conquistas (badges) por fase concluída
* [ ] Versão responsiva completa para dispositivos móveis
* [ ] Trilha sonora e efeitos sonoros temáticos

---

## 📄 Licença

Este projeto é voltado **estritamente para fins educacionais e de portfólio**. Todos os direitos sobre os elementos visuais e o universo da série *Stranger Things* pertencem aos seus respectivos criadores (Netflix / Duffer Brothers).

---

<p align="center">
  Feito com 💡 e um pouco de Mundo Invertido por <strong>Arthur Kauã</strong>, <strong>Marcus Paulo</strong> e <strong>Andrew Rafael</strong>
</p>
