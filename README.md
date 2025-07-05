# 💰 FinTrack - Seu Gerenciador de Metas Financeiras

![FinTrack Screenshots](/assets/screenshot.png)

## 🚀 Sobre o Projeto

O FinTrack é um aplicativo mobile intuitivo e eficiente, desenvolvido para auxiliar usuários no **cadastro e gestão de suas metas financeiras e transações**. Com uma interface limpa e foco na usabilidade, o app permite que você acompanhe seu progresso, registre entradas e saídas, e visualize de forma clara o quanto falta para alcançar seus objetivos financeiros, como a compra de um Apple Watch ou uma viagem.

## ✨ Funcionalidades Principais

- **Dashboard de Visão Geral:** Tenha um panorama rápido do seu saldo total, entradas e saídas.
- **Gestão de Metas:**
  - Crie novas metas financeiras com nome e valor alvo.
  - Visualize o progresso de cada meta em tempo real.
  - Acompanhe o valor já economizado e o restante para atingir o objetivo.
- **Gestão de Transações:**
  - Registre entradas e saídas de dinheiro.
  - Associe transações a metas específicas ou marque-as como entradas/saídas gerais.
  - Histórico detalhado de todas as transações realizadas.
- **Edição e Exclusão:** Edite ou exclua metas e transações facilmente.

## 🛠️ Tecnologias Utilizadas

O FinTrack é construído com as seguintes tecnologias modernas:

- **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **Expo Go:** Ferramenta para desenvolvimento e teste rápido de aplicativos React Native.
- **Expo Router:** Solução de roteamento baseada em arquivos, simplificando a navegação entre telas.
- **SQLite:** Banco de dados relacional leve para armazenamento local dos dados do aplicativo.

## 📦 Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o FinTrack em seu ambiente de desenvolvimento:

### Pré-requisitos

Certifique-se de ter o Node.js e o Expo CLI instalados em sua máquina.

- **Node.js:** Baixe e instale a versão LTS recomendada em [nodejs.org](https://nodejs.org/).
- **Expo CLI:** Instale globalmente via npm:
  ```bash
  npm install -g expo-cli
  ```

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/nicholasmacedoo/fintrack.git
    cd fintrack
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

### Rodando o Aplicativo

1.  **Inicie o servidor de desenvolvimento Expo:**

    ```bash
    expo start
    # ou (caso não instale o expo-cli)
    npx expo start

    ```

    Isso abrirá no terminal as informações e pode utilizar o qr code para abrir o simulador utilizando o app Expo Go.

2.  **Abra o aplicativo:**
    - **No emulador/simulador:** Se você tem um emulador Android ou iOS configurado, selecione a opção correspondente no painel Expo.
    - **No seu dispositivo físico:** Baixe o aplicativo **Expo Go** na Google Play Store (Android) ou Apple App Store (iOS). Em seguida, use o aplicativo para escanear o código QR exibido no painel Expo ou no terminal.
