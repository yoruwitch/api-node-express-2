# Curso 2: lidando com buscas, filtros, paginação e erros em uma API

Este projeto é utilizado no curso da Alura para demonstrar a construção de uma API utilizando Node.js e Express.js.

## Sobre o Projeto

O projeto consiste em uma API que permite a manipulação de dados de livros. Através dela, é possível realizar operações de CRUD (Create, Read, Update, Delete) em um banco de dados de livros.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento que permite a execução de código JavaScript no lado do servidor.
- **Express.js**: Framework para Node.js que facilita a criação e gerenciamento de rotas e middlewares.

## Arquitetura do Projeto

A arquitetura do projeto segue o padrão MVC (Model-View-Controller):

- **Model**: Responsável pela definição dos esquemas de dados e interação com o banco de dados.
- **View**: Não se aplica diretamente, pois estamos lidando com uma API. No entanto, as respostas JSON podem ser vistas como a "view".
- **Controller**: Contém a lógica de negócio e manipulação das requisições e respostas.

O projeto está organizado da seguinte forma:

```
/api-alurabooks
├── controllers
│   └── bookController.js
├── models
│   └── bookModel.js
├── routes
│   └── bookRoutes.js
├── app.js
└── server.js
```

- **controllers**: Contém os controladores que lidam com as requisições.
- **models**: Contém os modelos que representam os dados e interagem com o banco de dados.
- **routes**: Define as rotas da API e associa cada rota ao seu controlador correspondente.
- **app.js**: Configura o aplicativo Express.
- **server.js**: Inicia o servidor e escuta as requisições.

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie o servidor com `npm start`.

A API estará disponível em `http://localhost:3000`.

