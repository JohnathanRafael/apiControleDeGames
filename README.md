# API em TypeScrip com Node.js

Uma API desenvolvida em TypeScript utilizando Node.js, para fins de aprendizado.

Nessa API é utilizado o MongoDB como banco de dados, e o prisma como ORM (Object-Relational Mappers) utilizado para simplificar e deixar mais seguro o acesso ao banco de dados. Também é utilizado o fastify como framework web. 

## Comandos 

`npm init -y`

Inicia o projeto com o package.json

`npm install typescript @types/node -D`

Onde o typescript serve para utilizar a linguagem TypeScript e o @types/node serve para integração entre TypeScript e Node.js

`npx tsc init`

Para criar o arquivo de configurações tsconfig.json <br>

[Node Target Mapping](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping) - para configurar o tsconfig.json de acordo com a versão do Node.js no arquivo tsconfig.json

`npm install tsx -D`

Para converter código TypeScript para JavaScript e executar no Node.js de forma automatizada

`npm run dev`

Para inicar o servidor

`npm install fastify`

Para instalar o framework web Fastify

`npm install prisma --save-dev`

Um ORM para o banco de dados

`npx prisma generate`

Para gerar o modelo 

`npx prisma studio`

Para verificar se o prisma está conectado ao banco

## Referências

* [Rocketseat - Configurando Node.js v20 com TypeScript](https://www.youtube.com/watch?v=6DGWzDxi6Cc)
* [Sujeito programador - Criando API completa com NODEJS + TypeScript e MongoDB #backaofront 01](https://www.youtube.com/watch?v=XuTfN_84rcU)