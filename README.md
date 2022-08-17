# :hamburger: Hamburgueria API

![image](https://img.shields.io/github/issues/GabrielAlvesFS/HamburgueriaAPI?color=%23B5A595&logo=GOT&logoColor=%23B5A595&style=plastic) 
![image](https://img.shields.io/github/forks/GabrielAlvesFS/HamburgueriaAPI?color=%23B5A595&logoColor=%23B5A595&style=plastic) 
![image](https://img.shields.io/github/stars/GabrielAlvesFS/HamburgueriaAPI?color=%23B5A595&style=plastic) 
![image](https://img.shields.io/github/license/GabrielAlvesFS/HamburgueriaAPI?color=%23B5A595&logoColor=%23B5A595&style=plastic)

Projeto de final de módulo do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 4.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). SQLite3 foi utilizado como banco de dados do projeto.

## :heavy_check_mark: Pré-Requisitos

- [Node.js](https://nodejs.org/en/) - v. 16.15.1
- [NPM](https://www.npmjs.com/package/npm/v/8.11.0) - v. 8.11.0

## :outbox_tray: Packages

- [Express](https://expressjs.com/) - v. 4.18.1
- [Nodemon](https://www.npmjs.com/package/nodemon) - v. 2.0.19
- [SQLite](https://www.npmjs.com/package/sqlite3) - v. 5.0.11
- [Cors](https://www.npmjs.com/package/cors) - v. 2.8.5
- [Jest](https://www.npmjs.com/package/jest) - v. 28.1.3
- [Supertest](https://www.npmjs.com/package/supertest) - v. 6.2.4
 
## :rocket: Instalação da Aplicação

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

Criando e populando o banco de dados:

```
npm run database
```

Rodando o projeto:

```
npm run dev
```

## :pencil: Rotas HTTP implementadas

### 📦Entregadores

- **GET /entregadores**

  Retorna todos os entregadores do banco. Esquema da resposta:
  
  ```json
   {
    "entregadores": [
      {
        	"id": 1,
	  	"nome": "Antonella Liz Alves",
	  	"cpf": "348.816.098-07",
	  	"telefone": "(88)99796-7405"
      },
      {
      	"id":2,
      	"nome":"Nicolas Carlos Gabriel Aparício",
      	"cpf":"775.212.381-17",
      	"telefone":"(68)99149-6709"
	}
    ]
  }
  ```	

- **GET /entregadores:/id**

  Retorna o entregador correspondente ao id. Esquema da resposta:

  ```json
  {
    "entregadores":
      {
        	"id": 1,
	  	"nome": "Antonella Liz Alves",
	  	"cpf": "348.816.098-07",
	  	"telefone": "(88)99796-7405"
      }
  ```

- **POST /entregadores**

  Insere um entregador na base de dados. Esquema da requisição:

  ```json
  {
    "nome":"Fábio Roberto Igor Castro",
    "cpf":"434.902.992-30",
    "data_nascimento":"1957-03-04",
    "telefone":"(65)98290-8843",
    "email":"fabio-castro80@phocus.com.br",
    "endereco":"Rua Onze, 625, Boa Esperança, Cuiabá, MT"
  }
  ```

  Esquema da resposta

  ```json
  {
    "mensagem": "Pessoa entregadora inserida com sucesso!",
    "erro": false
  }
  ```

- **PUT /entregadores/:id**

  Atualiza um entregador de acordo com o id. Esquema da requisição:

  ```json
  {
    "nome":"Carlos Roberto Igor Castro",
    "cpf":"435.902.992-30",
    "data_nascimento":"1957-04-04",
    "telefone":"(65)98290-8443",
    "email":"carlos-castro80@phocus.com.br",
    "endereco":"Rua Doze, 625, Boa Esperança, Cuiabá, MT"
  }
  ```

  Esquema da resposta:

  ```json
  {
    "msg": "Pessoa entregadora de id ${id} atualizada com sucesso!"
  }
  ```

- **DELETE /entregadores/:id**

  Deleta um entregador de acordo com o id. Esquema da resposta:

  ```json
  {
    "msg": "Pessoa entregadora de id ${id} deletada com sucesso"
  }
  ```
### :fork_and_knife: Item

  - **GET /itens**
     <p>Lista todos os itens cadastrados</p>
    <p>Esquema da resposta:</p>

    ```json
       
    {
      "Item": [
        {
         	"id": 1,
	  	"tipo":"Hambúrguer",
	  	"nome":"Blend Artesanal",
	  	"descricao":"Pão de Brioche tostado na manteiga, queijo, carne 160g, Bacon, Ovo, Cebola Roxa, molho artesanal + batata frita.",
	  	"valor":25,
	  	"url_img":"https://cdn.discordapp.com/attachments/961274170841399306/1007778949608255488/unknown.png"
        },
        {
          	"id": 2,
	  	"tipo":"Hambúrguer",
		"nome":"Blend Rings",
		"descricao":"Pão de Brioche tostado na manteiga, cream cheese, carne 160g, Bacon, Barbecue, 3 onions rings, Alface, molho artesanal + batata frita.",
	  	"valor":26,
	  	"url_img":"https://cdn.discordapp.com/attachments/961274170841399306/1007779038921760798/unknown.png"
        }
      ]
    }
     ```

- **GET /itens/:id**

  <p>Lista o registro do item com determinado id. O número do id deve ser passado como parâmetro na rota.</p>

  <p>Esquema da resposta:</p>

  ```json
          {
		  "id": 16,
		  "tipo":"Sobremesa",
		  "nome":"Brigadeiros Recheados | 4 Unid",
		  "descricao":"Brigadeiro incrível à base de chocolate branco e coco queimado, recheado com uma esfera de chocolate belga e ganache de chocolate. A caixa contém 4 unidades.",
		  "valor":28.9,
		  "url_img":"https://cdn.discordapp.com/attachments/970876881278750801/1007787519074652170/202208121525_JOM1_i.JPEG"
          }
  ```

- **POST /itens**
  <p>Insere um registro de item. 
  
  No <em>body</em> da requisição deve ser passado apenas <em>tipo</em>, <em>nome</em>, <em>descricao</em>, <em>valor</em> e <em>url_img</em> como atributos, pois o id é gerado por autoincremento.</p>

  <p>Esquema da requisição:</p>

  ```json
          {
		  "tipo":"Hambúrguer",
		  "nome":"Hambúrguer Picanha Cheddar",
		  "descricao":"Pão de brioche caramelizado, hambúrguer de picanha, bacon, pasta cheddar, cebola caramelizada e cream cheese.",
		  "valor":21,
		  "url_img":"https://cdn.discordapp.com/attachments/961274170841399306/1007780354104500295/unknown.png"
          }
  ```

  <p>Esquema da resposta:</p>

  ```json
  {
  	"msg": "Item cadastrado com sucesso!",
      	"erro": false
  }
  ```

- **PUT /itens/:id**
  <p>Atualiza um registro específico de item com determinado id. O número do id deve ser passado como parâmetro na rota, e a requisição deve ter um <em>body</em>.</p>
  <p>Esquema da requisição:</p>

  ```json
          {
		  "tipo":"Aperitivos",
		  "nome":"Mini Pastel de Carne (200g)",
		  "descricao":"10 Deliciosos mini pastéis de carne bem sequinho e crocante",
		  "valor":18.88,
		  "url_img":"https://cdn.discordapp.com/attachments/970876881278750801/1007790959003705404/1-kg-de-massa-de-pastel-rende-quantos-mini-pasteis.jpg.webp"
          }
  ```

  Esquema da resposta:

  ```json
  {
  	"msg": "Item atualizado com sucesso!",
      	"erro": false
  }
  ```

- **DELETE /itens/:id**
  <p>Apaga um registro específico, conforme o id passado como parâmetro na rota.</p>
  <p>Esquema da resposta:</p>

  ```
  "Item deletado com sucesso."
  ```
  ### :hamburguer: Pedido

  - **GET /pedidos**
     <p>Lista todos os pedidos cadastrados</p>
    <p>Esquema da resposta:</p>

    ```json
       
    {
      "Pedido": [
        {
         	"id":1,
		"cliente_id":5,
		"entregador_id":3,
		"data_pedido":"2022-08-12",
		"status_pedido":"aberto",
		"valor_total":null,
		"metodo_pagamento":"pix"
        },
        {
          	"id":2,
		"cliente_id":2,
		"entregador_id":4,
		"data_pedido":"2022-08-12",
		"status_pedido":"aberto",
		"valor_total":null,
		"metodo_pagamento":"débito"
        }
      ]
    }
     ```

- **GET /pedidos/:id**

  <p>Lista o registro do pedido com determinado id. O número do id deve ser passado como parâmetro na rota.</p>

  <p>Esquema da resposta:</p>

  ```json
          {
		  "id":3,
		  "cliente_id":1,
		  "entregador_id":2,
		  "data_pedido":"2022-08-12",
		  "status_pedido":"aberto",
		  "valor_total":null,
		  "metodo_pagamento":"crédito"
          }
  ```

- **POST /pedidos**
  <p>Insere um registro de pedido. 

  <p>Esquema da requisição:</p>

  ```json
          {
		  "cliente_id":5,
		  "entregador_id":3,
		  "data_pedido":"2022-08-12",
		  "status_pedido":"aberto",
		  "valor_total":null,
		  "metodo_pagamento":"pix"
          }
  ```

  <p>Esquema da resposta:</p>

  ```json
  {
  	"msg": "Pedido cadastrado com sucesso!",
      	"erro": false
  }
  ```

- **PUT /pedidos/:id**
  <p>Atualiza um registro específico de pedido com determinado id. O número do id deve ser passado como parâmetro na rota, e a requisição deve ter um <em>body</em>.</p>
  <p>Esquema da requisição:</p>

  ```json
          {
		  "cliente_id":2,
		  "entregador_id":4,
		  "data_pedido":"2022-08-12",
		  "status_pedido":"aberto",
		  "valor_total":null,
		  "metodo_pagamento":"crédito"
          }
  ```

  Esquema da resposta:

  ```json
  {
  	"msg": "Pedido atualizado com sucesso!",
      	"erro": false
  }
  ```

- **DELETE pedidos/:id**
  <p>Apaga um registro específico, conforme o id passado como parâmetro na rota.</p>
  <p>Esquema da resposta:</p>

  ```json
  {
  	"msg": "Pedido deletado com sucesso!",
      	"erro": false
  }
  ```

### :clipboard: Item pedido

- **GET /itemPedido**

  Retorna todos os itens pedidos. Esquema da resposta:

  ```json
  {
    "ItemPedido": [
        {
		"id": 1,
		"pedido_id": 1,
		"item_id":1,
		"quantidade_itens":1
        },
        {
		"id":2,
		"pedido_id":1,
		"item_id":8,
		"quantidade_itens":7
        },
      ]
  }

- **GET /itemPedido/:pedido_id**

  Retorna o item pedido correspondente ao id. Esquema da resposta:

  ```json
  {
    "id":3,
    "pedido_id":2,
    "item_id":6,
    "quantidade_itens":1
    }
  ```

- **POST /itemPedido**

  Insere um item pedido na base de dados. Esquema da requisição:

  ```json
  {
    "pedido_id": 6, 
    "item_id":11,
    "quantidade_itens": 2
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Item do Pedido cadastrado com sucesso!",
    "erro": false
  }
  ```

- **PUT /itemPedido/:pedido_id/:itemPedido_id**

  Atualiza um item pedido de acordo com o id. Esquema da requisição:

  ```json
  {
    "item_id":11,
    "quantidade_itens": 1
  }
  ```

  Esquema da resposta:

  ```json
  {
    "msg": "Item do pedido atualizado com sucesso!"
  }
  ```

- **DELETE /itemPedido/:pedido_id/:itemPedido_id**

  Deleta um item pedido de acordo com o id. Esquema da resposta:

  ```json
  {
    "msg": "ItemPedido de id deletado com sucesso!"
  }
  ```

### 👨‍👩‍👧‍👦 Clientes

- **GET /clientes**

  Retorna todos os clientes do banco. Esquema da resposta:

  ```json
      {
      "Clientes": [
          {
		  "Id":1,
		  "nome":"Anthony Giovanni da Luz",
		  "cpf":"552.872.396-53",
		  "data_nascimento":"1961-03-24",
		  "telefone":"(67)99680-4974",
		  "email":"anthony_daluz@facebook.com",
		  "endereco":"Rua Santo Antônio, 830, Industrial, Corumbá, MS"
          },
          {
		  "Id":2,
		  "nome":"Nair Lúcia Josefa Alves",
		  "cpf":"294.903.563-95",
		  "data_nascimento":"1998-04-02",
		  "telefone":"(11)99535-1637",
		  "email":"nair.lucia.alves@uel.br",
		  "endereco":"Rua Estampa Esportiva, 921, Americanópolis, São Paulo, SP "
          }
      ]
    }
  ```

- **GET /clientes/:id**

  Retorna o cliente correspondente ao id. Esquema da resposta:

  ```json
  {
    {
    "Id":4,
    "nome":"Eliane Allana Malu Figueiredo",
    "cpf":"030.012.391-40",
    "data_nascimento":"1963-05-03",
    "telefone":"(79)98866-9472",
    "email":"eliane_allana_figueiredo@procivil.com.br",
    "endereco":"Rua Toney Makey do Nascimento Silva, 766, 17 de Março, Aracaju, SE"
    }
    
  }
  ```

- **POST /clientes**

  Insere um cliente na base de dados. Esquema da requisição:

  ```json
    {
    "nome":"Arnoldo Roberto Igor Castro",
    "cpf":"484.902.992-30",
    "data_nascimento":"1957-09-04",
    "telefone":"(65)98290-8943",
    "email":"arnoldo-castro80@phocus.com.br",
    "endereco":"Rua Dez, 625, Boa Esperança, Cuiabá, MT"
    }
  ```

  Esquema da resposta

  ```json
    {
      "msg": "Cliente cadastrado com sucesso!",
      "erro": false
      }
  ```

- **PUT /clientes/:id**

  Atualiza um cliente de acordo com o id. Esquema da requisição:

  ```json
    {
    "nome":"Nair Lúcia Josefa Alves",
    "cpf":"294.903.563-95",
    "data_nascimento":"1998-04-02",
    "telefone":"(11)99535-1637",
    "email":"nair.lucia.alves@uel.br",
    "endereco":"Rua Estampa Esportiva, 921, Americanópolis, São Paulo, SP "
    }
  ```

  Esquema da resposta:

  ```json
    {
    "msg": "Usuario de id atualizado com sucesso."
    }
  ```

- **DELETE /clientes/:id**

  Deleta um cliente de acordo com o id. Esquema da resposta:

  ```json
    {
    "msg": "Cliente de id deletado com sucesso!"
    }
  ```

## Status do Projeto
![Bagde](https://img.shields.io/badge/Status%20do%20Projeto-Concluído-orange)

<div align='center'>

## 💻  Time de desenvolvimento:
	

 **Gabriel Alves** - [GabrielAlvesFS](https://github.com/GabrielAlvesFS)<br>
 **Jessica dos Santos** - [JessBispo](https://github.com/jessbispo)<br>
 **Julia Zibordi** -  [juliazib](https://github.com/juliazib)<br>
 **Magnus** - [MagnusBittencourt](https://github.com/MagnusBittencourt)

---
