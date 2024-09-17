let inventario = [
{ nome: 'Teclado', preco: 100, emEstoque: true },
{ nome: 'Mouse', preco: 50, emEstoque: false },
{ nome: 'Monitor', preco: 600, emEstoque: true },
{ nome: 'Cadeira de Escritório', preco: 500, emEstoque: true },
{ nome: 'Headset', preco: 200, emEstoque: false },
{ nome: 'Mesa', preco: 550, emEstoque: true },
{ nome: 'Mousepad', preco: 100, emEstoque: false },
{ nome: 'Teclado Gamer', preco: 450, emEstoque: true },
{ nome: 'Mouse Gamer', preco: 400, emEstoque: true },
{ nome: 'Headset Gamer', preco: 350, emEstoque: false },
{ nome: 'Mesa Gamer', preco: 850, emEstoque: true },
{ nome: 'Monitor Gamer', preco: 1600, emEstoque: true },
{ nome: 'Mousepad Gamer', preco: 150, emEstoque: true },
{ nome: 'Cadeira Gamer', preco: 900, emEstoque: true },
{ nome: 'Controle Gamer', preco: 250, emEstoque: true },

];
for (let i = 0; i < inventario.length; i++) {
if (inventario[i].emEstoque) {
console.log(inventario[i].nome + ' está em estoque.');
}
}
let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);