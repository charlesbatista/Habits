# Aplicativo de Hábitos

NLW é um evento exclusivo e gratuito promovido pela [Rocketseat](https://rocketseat.com.br) para ensinar tecnologias web. Neste projeto, aprendemos fundamentos importantes sobre React Native, Node.js, Fastify, Prisma, TypeScript e outros conceitos fundamentais.

Para iniciar meus estudos em React Native e Node.js, participei deste curso e como projeto prático, criamos um aplicativo web para monitorar hábitos diários.

A proposta é utilizar React Native para o front-end, Node.js para o back-end, bem como tecnologias de banco de dados como Prisma, e Fastify para gerenciamento de rotas da aplicação.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Projeto](#projeto)
- [O que Aprendi?](#o-que-aprendi)
- [Licença](#licença)

## Tecnologias Utilizadas

- React Native (Front-end)
- Node.js (Servidor)
- Fastify (Rotas RESTful APi)
- Prisma (Banco de dados)

## Projeto

<img src="https://github.com/charlesbatista/Habits/blob/master/Capa.jpg" />

Para acessar o layout do projeto que seguimos, visite o link do Figma: [Hábitos (e)](https://www.figma.com/community/file/1195327109778210238/habits-e)

## O que Aprendi?

Para iniciar projetos, certifique-se de ter o Node.js instalado em sua máquina.

### Criando Projetos Usando Node.js

Neste projeto, criaremos 3 diretórios. Cada um deles será responsável por uma parte da aplicação. Eles são:

- **Servidor:** onde criamos a estrutura base do servidor.
- **Web:** onde criamos a estrutura para a aplicação web.
- **Mobile:** onde criamos a estrutura para a aplicação móvel.

Para iniciar o projeto do **servidor**, acessamos a pasta e executamos o comando:

<pre>npm init -y</pre>

Este comando criará um arquivo na pasta chamado `package.json`. Este arquivo contém informações importantes sobre o projeto, como seu nome, versão, descrição, bibliotecas (dependências) que fazem parte da aplicação, scripts para automação de tarefas, etc.

Para instalar bibliotecas de terceiros, usamos o comando:

<pre>npm install [nome-da-biblioteca]</pre>

Uma vez que instalamos nossa primeira biblioteca, um arquivo chamado `package.lock` também será criado automaticamente, contendo informações que não precisamos mexer, uma vez que é usado para controle interno do próprio `npm`. Também será criado um diretório chamado `node_modules`, que é justamente o local onde nossas bibliotecas serão armazenadas para utilização no nosso projeto.
pm.

Como estamos utilizando TypeScript, vamos iniciá-lo no projeto utilizando o comando:
<pre>npx tsx --init</pre>

Será criado um arquivo chamadio `tsconfig.json`, que guarda toda a configuração utilizada pelo TypeScript em nosso projeto. Uma configuração inicial importante é que neste projeto utilizamos a versão `es2020`. Pra isso, vamos abrir esse arquivo e na configuração <a href="https://www.typescriptlang.org/tsconfig#target" target="_blank"><b>target</b></a> e alterar para essa versão.

O próximo passo é instalar o TypeScript como uma dependência de desenvolvimento do projeto. Pra isso, vamos executar o comando:
<pre>npm i tsx -D</pre>

Isso nos permite executar nossos scripts .ts sempre precisar realizar conversões desse nosso script anteriormente.

Como exemplo, se quisermos executar o arquivo `/server/server.ts` usando o TypeScript, basta executar o comando:
<pre>npx tsx /server/server.ts</pre>

Pra agilizar nosso desenvolvimento, vamos criar um script dentro do nosso `package.json`, e em <b>scripts</b> vamos adicionar o comando:

<img src="https://github.com/charlesbatista/Habits/blob/master/script%20package.json.png" />

<pre>"scripts": {
    "dev": "tsx watch src/server.ts"
  }
</pre>

Um ponto importante neste script é que sempre que alteramos algo nele, precisamos rodá-lo novamente para puxar as últimas atualizações. Pra evitar esse retrabalho, existe um comando que vai observar qualquer alteração e rodar o arquivo de novo de forma automática. Esse comando é o `watch`. Observe que já adicionamos no nosso script criado acima.

### Banco de Dados

Existem várias formas de se trabalhar com banco de dados em aplicações Node.js. Para este projeto, vamos utilizar ORM (Object Relational Mapper), ou Mapeador de Relação de Objetos, que é uma técnica utilizada no desenvolvimento de software que permite mapear objetos em um sistema orientado a objetos para tabelas em um banco de dados relacional. Neste caso, a biblioteca que nos permite utilizar ORM será o Prisma. 

Vamos instalar a biblioteca de desenvolvimento do Prisma través do comando:
<pre>npm i prisma -D</pre>

E agora a dependência que vamos utilizar para manipular o nosso banco do lado do cliente, através do comando:
<pre>npm i @prisma/client</pre>

Para iniciar o prisma no projeto, rodaremos o comando abaixo:
<pre>npx prisma init --datasource-provider SQLite</pre>

Neste caso, utilizamos o provedor do banco de dados `SQLite` porque podemos manipulá-lo diretamente no arquivo local dentro do nosso projeto, facilitando nossa vida ao invés de manipular o banco através de um servidor de banco de dados separado. SQLite é uma escolha comum para aplicativos que precisam de um banco de dados local leve e de fácil integração. Ele armazena o banco de dados em um único arquivo, o que simplifica o gerenciamento e elimina a necessidade de configurar um servidor de banco de dados separado. Isso é especialmente útil para projetos menores ou aplicações que não exigem alta concorrência ou escalabilidade horizontal. 

Uma vez que criamos nossas tabelas dentro do arquivo `schema.prisma`, rodamos o comando:
<pre>npx prisma migrate dev</pre>

Este comando irá criar as nossa tabelas, conforme definimos nas models.

Para mais informações sobre o Prisma, acesse a documentação: [https://www.prisma.io/docs]

### CORS

Neste projeto, utilizamos o CORS (Cross-Origin Resource Sharing) como mecanismo de segurança. "É um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta. Um aplicativo Web executa uma requisição cross-origin HTTP ao solicitar um recurso que tenha uma origem diferente (domínio, protocolo e porta) da sua própria origem." [https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS]

Em outras palavras, ele vai dizer quais aplicações poderão acessar os recursos que estamos definindo no nosso back-end, como recursos de manipulação de dados do nosso banco.

Pra começarmos a configurar, vamos executar o comando:
<pre>npm i @fastify/cors</pre>

Pra registrá-lo no projeto, dentro do arquivo `server.ts`, vamos inserir:
<pre>import cors from '@fastify/cors'</pre>

E depois:
<pre>const app = Fastify()

app.register(cors)</pre>

## Licença

![Licença](https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000)

Este projeto está licenciado sob a Licença MIT.

Feito pela Rocketseat :wave: [Junte-se à nossa comunidade!](https://discord.gg/rocketseat)
