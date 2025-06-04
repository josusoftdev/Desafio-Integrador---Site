CREATE DATABASE IF NOT EXISTS desafio_integrado;
use desafio_integrado;

CREATE TABLE Produto(
    Product_ID int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nome varchar(50),
    Descricao text(100),
    Preco decimal,
    Categoria_ID varchar(50),
    ID_Key int,
    FOREIGN KEY (ID_KEY) references Chave(ID_Key)
    );

CREATE TABLE Chave(
    ID_Key int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Status_Pagamento boolean,
    Product_ID int,
    Codigo_Acesso varchar(10),
    Datageracao timestamp
    );

CREATE TABLE Cliente(
    ID_cliente int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome varchar(50),
    email varchar(50),
    senha varchar(10),
    datacadastr timestamp,
    ativo boolean
);

CREATE TABLE Pedido_Pagamento(
    ID_Pedido int PRIMARY KEY AUTO_INCREMENT,
    datapedido timestamp,
    pedstatus varchar(50),
    valortotal decimal,
    datapagamento timestamp,
    valor decimal,
    metodo varchar(50),
    statuspag varchar(50),
    ID_Cliente int,
    FOREIGN KEY (ID_Cliente) references Cliente(ID_Cliente),
    ID_Cupom int,
    FOREIGN KEY (ID_Cupom) REFERENCES Cupom(ID_Cupom)
);

CREATE TABLE Carrinho(
    ID_Carrinho int PRIMARY KEY AUTO_INCREMENT,
    quantidade int,
    preco_unico decimal,
    Product_ID int,
    foreign key (Product_ID) references Produto(Product_ID),
    ID_Key int,
    FOREIGN KEY (ID_KEY) references Chave(ID_Key),
    ID_Pedido int,
	foreign key (ID_Pedido) references Pedido_Pagamento(ID_Pedido)
);

CREATE TABLE Promocao(
    ID_Promocao int PRIMARY KEY AUTO_INCREMENT,
    Prom_name varchar(100),
    Prom_desc text,
    Desc_perc decimal,
    inicio Date,
    final Date,
    ID_Cupom int,
    FOREIGN KEY (ID_Cupom) REFERENCES Cupom(ID_Cupom)
);

CREATE TABLE cupom(
    ID_Cupom int PRIMARY KEY AUTO_INCREMENT,
    cupom_cod varchar(10),
    data_limite Date,
    qnt_uso int
);



