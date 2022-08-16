//Importando SQLite
import sqlite3 from 'sqlite3';

//Criando Database 
const db = new sqlite3.Database('./database.db');

//Função para ativar Foreign Key
function activePragma(){
    const pragma = "PRAGMA foreign_keys = ON"
   db.run(pragma, (e) => {
        if(e){
            console.log(e)
        } else {
            console.log("chaves estrangeiras ativadas.")
        }
    })
}

//==== Clientes
// -> Model para criar tabela de clientes

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
	"Id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" VARCHAR(60) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "telefone" VARCHAR(14) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL
)`;

// -> Model para popular tabela de clientes
const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (nome, cpf, data_nascimento, telefone, email, endereco)
VALUES 
('Anthony Giovanni da Luz', '552.872.396-53', '1961-03-24', '(67)99680-4974', 'anthony_daluz@facebook.com', 'Rua Santo Antônio, 830, Industrial, Corumbá, MS'  ),
('Nair Lúcia Josefa Alves', '294.903.563-95', '1998-04-02', '(11)99535-1637', 'nair.lucia.alves@uel.br', 'Rua Estampa Esportiva, 921, Americanópolis, São Paulo, SP '), 
('Lívia Emily Baptista', '343.458.270-35', '1980-06-24', '(71)98170-8478', 'livia_baptista@rmsolutions.inf.br', 'Avenida Joel Santana, 740, Lobato, Salvador, BA'),
('Eliane Allana Malu Figueiredo', '030.012.391-40', '1963-05-03', '(79)98866-9472', 'eliane_allana_figueiredo@procivil.com.br', 'Rua Toney Makey do Nascimento Silva, 766, 17 de Março, Aracaju, SE'),
('Fábio Roberto Igor Castro', '434.902.992-30', '1957-03-04', '(65)98290-8843', 'fabio-castro80@phocus.com.br', 'Rua Onze, 625, Boa Esperança, Cuiabá, MT');
`

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de clientes");
    });
}

function populaTabelaClientes() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de clientes");
    });
}

//==== Entregadores
// -> Model para criar tabela de entregadores
const ENTREGADORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ENTREGADORES" (
	"id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "telefone" VARCHAR(14) NOT NULL
)`;

// -> Model para popular tabela de entregadores
const ADD_ENTREGADORES_DATA = `
INSERT INTO ENTREGADORES (cpf, nome, telefone)
VALUES 
('348.816.098-07', 'Antonella Liz Alves', '(88)99796-7405'),
('775.212.381-17', 'Nicolas Carlos Gabriel Aparício', '(68)99149-6709'),
('898.365.315-99', 'Bruno Carlos Eduardo Pereira', '(96)99540-3981'),
('811.042.673-57', 'Larissa Ayla Drumond', '(67)99103-3407'),
('443.751.795-46', 'Nina Sophie Hadassa da Costa', '(63)99580-2634');`

function criaTabelaEntregadores() {
    db.run(ENTREGADORES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de entregadores");
    });
}

function populaTabelaEntregadores() {
    db.run(ADD_ENTREGADORES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de entregadores");
    });
}


//==== Item
// -> Model para criar tabela de Item
const ITEM_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ITEM" (
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "tipo" VARCHAR(25) NOT NULL,
    "nome" VARCHAR(70) NOT NULL,
    "descricao" VARCHAR(255),
    "valor" DECIMAL(5,2) NOT NULL,
    "url_img" VARCHAR(2048) NOT NULL
)`;

// -> Model para popular tabela de Item
const ADD_ITEM_DATA = `
INSERT INTO ITEM (tipo, nome, descricao, valor, url_img)
VALUES 
('Hambúrguer', 'Blend Artesanal',  'Pão de Brioche tostado na manteiga, queijo, carne 160g, Bacon, Ovo, Cebola Roxa, molho artesanal + batata frita.', 25.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007778949608255488/unknown.png'),
('Hambúrguer', 'Blend Rings', 'Pão de Brioche tostado na manteiga, cream cheese, carne 160g, Bacon, Barbecue, 3 onions rings, Alface, molho artesanal + batata frita.', 26.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007779038921760798/unknown.png'),
('Hambúrguer', 'Blend SALADA', 'Pão de Brioche tostado na manteiga, queijo, carne 160g, Alface, tomate, cebola roxa, molho artesanal + Batata frita.', 24.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007779101144268840/unknown.png'),
('Hambúrguer', 'Hambúrguer Grão de Bico', 'Pão, Hambúrguer de grão de bico, queijo prato, alface, tomate, molho artesanal e anel de cebola. Não acompanha batata.', 22.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007780009378861147/unknown.png'),
('Hambúrguer', 'Hambúrguer de Quinoa', 'Pão, Hambúrguer de quinoa, queijo prato, alface, tomate, molho artesanal e anel de cebola. Não acompanha Batata.', 22.50, 'https://cdn.discordapp.com/attachments/961274170841399306/1007780203512221757/unknown.png'),
('Hambúrguer', 'Hambúrguer Picanha Cheddar', 'Pão de brioche caramelizado, hambúrguer de picanha, bacon, pasta cheddar, cebola caramelizada e cream cheese.', 21.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007780354104500295/unknown.png'),
('Bebidas', 'Coca-Cola lata 350ml', '', 6.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007783880201355294/unknown.png'),
('Bebidas', 'Guarapan lata 220ml', '', 5.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007784390933356614/unknown.png'),
('Bebidas', 'Água Mineral', '', 3.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007784537427816518/unknown.png'),
('Bebidas', 'Água Mineral com gás', '', 4.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007784681212756019/unknown.png'),
('Aperitivos', 'Batata Cheddar Grande', '450g de batata frita com queijo cheddar e bacon', 26.00, 'https://cdn.discordapp.com/attachments/961274170841399306/1007786682281627751/202007111929_tH1P_.webp'),
('Aperitivos', 'Hot Wings', 'Coxinha da Asa empanada e envolvida no nosso delicioso molho hot – Com Sour Cream', 29.80, 'https://cdn.discordapp.com/attachments/961274170841399306/1007787532072783892/128649.jpg'),
('Aperitivos', 'Mini Pastel de Queijo (200g)', '10 Deliciosos mini pastéis de queijo cremoso bem sequinho e crocante', 18.84, 'https://cdn.discordapp.com/attachments/970876881278750801/1007790959003705404/1-kg-de-massa-de-pastel-rende-quantos-mini-pasteis.jpg.webp'),
('Sobremesa', 'Fatia de Bolo Red Velvet', 'Deliciosa e super bem servida fatia de red velvet, um bolo super especial feito com massa da baunilha com toque de iogurte e recheado com um creme surpreendente de chocolate branco com cream cheese.', 21.90, 'https://cdn.discordapp.com/attachments/970876881278750801/1007787172495106058/202207290706_U3N4_i.jpeg'),
('Sobremesa', 'Brownie de Nutella', 'Tradicional receita americana de brownie de chocolate desenvolvida pela nossa chef, úmido e com casquinha levemente crocante, super recheado com Nutella legítima.', 18.90, 'https://cdn.discordapp.com/attachments/970876881278750801/1007787266804035685/202205241820_A7A6_i.jpeg'),
('Sobremesa', 'Brigadeiros Recheados | 4 Unid', 'Brigadeiro incrível à base de chocolate branco e coco queimado, recheado com uma esfera de chocolate belga e ganache de chocolate. A caixa contém 4 unidades.', 28.90, 'https://cdn.discordapp.com/attachments/970876881278750801/1007787519074652170/202208121525_JOM1_i.JPEG');
`

function criaTabelaItem() {
    db.run(ITEM_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de item");
    });
}

function populaTabelaItem() {
    db.run(ADD_ITEM_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de item");
    });
}

//==== Pedido
// -> Model para criar tabela de Pedido
const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "cliente_id" INTEGER NOT NULL,
    "entregador_id" INTEGER NOT NULL,
    "data_pedido" DATETIME NOT NULL,
    "status_pedido" CHECK( "status_pedido" IN ('aberto', 'andamento', 'a caminho', 'finalizado') ) DEFAULT 'aberto',
    "valor_total" DECIMAL(5,2),
    "metodo_pagamento" CHECK( "metodo_pagamento" IN ('débito', 'crédito', 'dinheiro', 'pix') ) NOT NULL,
)`;

// -> Model para popular tabela de Pedidos
const ADD_PEDIDOS_DATA = `INSERT INTO PEDIDOS (cliente_id, entregador_id, data_pedido, metodo_pagamento)
VALUES 
(5, 3, '2022-08-12', 'pix'),
(2, 4, '2022-08-12', 'débito'),
(1, 2, '2022-08-12', 'crédito');`

function criaTabelaPedidos() {
    db.run(PEDIDOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de pedidos");
    });
}

function populaTabelaPedidos() {
    db.run(ADD_PEDIDOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pedidos");
    });
}


//==== Item_Pedido
// -> Model para criar tabela de Item_Pedido
const ITEM_PEDIDOS_SCHEMA = `
CREATE TABLE "ITEM_PEDIDO" (
	"id" INTEGER PRIMARY KEY AUTOINCREMENT, 
	"pedido_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "quantidade_itens" INTEGER NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES Pedidos(id),
    FOREIGN KEY (item_id) REFERENCES Item(id)
)`;

// -> Model para popular tabela de Pedidos
const ADD_ITEM_PEDIDOS_DATA = `
INSERT INTO Item_pedido (pedido_id, item_id, quantidade_itens)
VALUES 
(1,1,1),
(1,8,7),
(2,6,1),
(2,7,3),
(3,2,5),
(3,7,7);
`
function criaTabelaItemPedidos() {
    db.run(ITEM_PEDIDOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de item pedidos", error);
    });
}

function populaTabelaItemPedidos() {
    db.run(ADD_ITEM_PEDIDOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de item pedidos", error);
    });
}

db.serialize( () => {
    activePragma();
    criaTabelaClientes();
    populaTabelaClientes();
    criaTabelaEntregadores();
    populaTabelaEntregadores();
    criaTabelaItem();
    populaTabelaItem();
    criaTabelaPedidos();
    populaTabelaPedidos();
    criaTabelaItemPedidos();
    populaTabelaItemPedidos();
});