create database fuberapi;
use fuberapi;

create table Usuario(
    idUsuario int not null auto_increment,
    celular varchar(13) not null,
    contrasena varchar(50) not null,
    correo varchar(30) not null,
    nombreApellidos varchar(100) not null,
    saldo float,
    idFoto int,
    primary key(idUsuario, celular, correo)
);

create table Producto(
    idProducto int not null auto_increment,
    descripcion varchar(100),
    existencia int,
    idTienda int,
    idUsuario int,
    precio float,
    idFoto int,
    primary key(idProducto)
);

create table Tienda(
    idTienda int not null auto_increment,
    celular varchar(13) not null,
    direccion varchar(100),
    idUsuario int not null,
    nombre varchar(30),
    primary key(idTienda)
);

create table Pedido(
    idPedido int not null auto_increment,
    idUsuarioComprador int not null,
    idUsuarioVendedor int not null,
    idTienda int not null,
    primary key(idPedido)
);

create table Foto(
    idFoto int not null auto_increment,
    url varchar(100) not null,
    primary key(idFoto)
);

create table Pedido_Producto(
    idPedido int not null,
    idProducto int not null
);

create table TarjetaBancaria(
    fechaVencimiento date not null,
    idUsuario int not null,
    numero varchar(20),
    primary key(numero)
);

create table TarjetaRecarga(
    idTarjeta int not null auto_increment,
    idTienda int not null,
    monto float,
    primary key(idTarjeta)
);