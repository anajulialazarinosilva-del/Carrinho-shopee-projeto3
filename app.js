const Item = require("./item");
const Cart = require("./cart");

const produto1 = new Item(1, "Camisa", 50);
const produto2 = new Item(2, "Tênis", 120);
const produto3 = new Item(3, "Boné", 30);

const carrinho = new Cart();

carrinho.adicionar(produto1);
carrinho.adicionar(produto2);

carrinho.listar();
carrinho.total();

carrinho.remover(1);

carrinho.listar();
carrinho.total();