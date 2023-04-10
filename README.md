
# Hamburgueria Rest-API :hamburger: 
## :sparkles: Introdução

Este projeto é a versão 2.0 da minha REST API de hamburgueria. Eu decidi desenvolvê-lo para praticar e aprimorar meus conhecimentos em REST API e também para aprender sobre bancos de dados não relacionais, autenticação com JWT e validação de entrada de dados. Além disso, utilizei o Docker para hospedar o banco de dados e o Winston para fazer o logging de eventos.
	

##  :heavy_check_mark: Pré-Requisitos
Antes de iniciar, verifique se você tem as seguintes ferramentas instaladas em sua máquina:

-   [Node.js](https://nodejs.org/en/) - v. 18.15.0
-   [NPM](https://www.npmjs.com/package/npm/v/8.11.0) - v. 8.11.0
-   [Docker](https://www.docker.com/products/docker-desktop/) 

##  :outbox_tray: Dependências
As seguintes bibliotecas foram utilizadas neste projeto:

-   [Bcrypt](https://www.npmjs.com/package/bcrypt) - v. 5.0.1
-   [Dotenv](https://www.npmjs.com/package/dotenv) - v. 16.0.3
-   [Express](https://expressjs.com/) - v. 4.18.1
-   [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) - v. 8.5.1
-   [Mongoose](https://www.npmjs.com/package/mongoose) - v. 6.6.2
-   [Nodemon](https://www.npmjs.com/package/nodemon) - v. 2.0.19
-   [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - v. 4.6.2
-   [Winston](https://www.npmjs.com/package/winston) - v. 3.8.2
-   [ZOD](https://www.npmjs.com/package/zod) - v. 3.19.1

##  :rocket: Hospedagem juntamente com a Documentação

```

https://hamburgueria-rest-api.cyclic.app/api-docs/

```

## ⚙️ Funcionalidades

A API permite o cadastro e login de usuários, e também permite a criação, listagem, atualização e exclusão de Itens, Complementos, Categorias, Tipos de Pagamento, Endereço e Pedidos. A documentação da API pode ser acessada através do Swagger.


##  :rocket: Instalação da Aplicação

  

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```

git clone https://github.com/GabrielAlvesFS/HamburgueriaAPI

```

Entrando na pasta:

```

cd HamburgueriaAPI

```

Instalando os pacotes:

```

npm install

```

Criando a imagem do MongoDB  com Docker:

```

npm run up:dev

```

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```
MONGODB_CONNECTION_STRING=mongodb://localhost:27017/hamburgueria
JWT_SECRET=<segredo-para-o-jwt>
ADM_EMAIL=<email-para-o-primeiro-manager>
ADM_PASSWORD=<senha-para-o-primeiro-manager>
```

Rode o projeto:
```

npm run dev

```

 Acesse a documentação da API em seu navegador:
```

http://localhost:3000/v1/api-docs/

```

## Conclusão 
Espero que este projeto seja útil para quem deseja ver ou aprender sobre REST API, bancos de dados não relacionais e outras tecnologias utilizadas aqui com o meu projeto. Caso tenha alguma dúvida ou sugestão de melhoria, sinta-se à vontade para entrar em contato. Obrigado!
