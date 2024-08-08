# Uni Gastos

## Índice

- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Capturas de Tela](#capturas-de-tela)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)

## Introdução

**Uni Gastos** é uma aplicação móvel construída com React Native, TypeScript e Expo. Utiliza WebSocket para comunicação em tempo real, proporcionando uma experiência interativa e contínua para os usuários. O aplicativo permite aos usuários criar, entrar e gerenciar salas, além de calcular em tempo real o valor total de compras e oferecer um chat em tempo real.

## Funcionalidades

- **Lista de Salas**: Tela inicial que lista as salas que o usuário já entrou ou criou.
- **Entrar em Sala**: Tela para entrar em uma sala existente.
- **Criar Sala**: Tela para criar uma nova sala.
- **Lista de Produtos**: Dentro de uma sala, exibe uma lista de produtos.
- **Chat em Tempo Real**: Comunicação em tempo real utilizando WebSocket.
- **Cálculo de Valor Total**: Calcula o valor total da compra em tempo real, utilizando conexão WebSocket.
- **Adicionar e Editar Produtos**: Função para adicionar novos produtos e editar produtos existentes.

## Tecnologias

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **TypeScript**: Linguagem de programação que adiciona tipos estáticos ao JavaScript.
- **Expo**: Plataforma para construção de aplicações React Native.
- **WebSocket**: Protocolo para comunicação bidirecional em tempo real.

## Capturas de Tela

![Tela Inicial](https://via.placeholder.com/300x600)
*Descrição: Tela inicial listando salas*

![Entrar em Sala](https://via.placeholder.com/300x600)
*Descrição: Tela para entrar em uma sala*

![Criar Sala](https://via.placeholder.com/300x600)
*Descrição: Tela para criar uma nova sala*

![Lista de Produtos](https://via.placeholder.com/300x600)
*Descrição: Tela com lista de produtos dentro de uma sala*

![Chat em Tempo Real](https://via.placeholder.com/300x600)
*Descrição: Chat em tempo real utilizando WebSocket*

## Instalação

1. Instalar AVD para rodar o App.
   
2. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/MyApp.git

3. Instale as dependências
   ```sh
   npm install
   
4. Inicie o aplicativo:
   ```sh
   npm run android

## Uso
- **Abra o aplicativo em um emulador ou dispositivo físico**.
- **Crie uma nova sala ou entre em uma sala existente**.
- **Adicione produtos e utilize o chat em tempo real para comunicação**.
- **Edite produtos conforme necessário e visualize o valor total da compra em tempo real**.

## Contribuição
Contribuições são bem-vindas! Para contribuir, siga estes passos:

- **Faça um fork do repositório**.
- **Crie uma branch para sua funcionalidade (git checkout -b funcionalidade/MinhaFuncionalidade)**.
- **Commit suas alterações (git commit -m 'Adiciona minha funcionalidade')**.
- **Envie para a branch (git push origin funcionalidade/MinhaFuncionalidade)**.
- **Abra um Pull Request**.
