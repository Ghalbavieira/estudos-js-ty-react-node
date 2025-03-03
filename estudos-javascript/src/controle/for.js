const carrinho = [
    {nome: 'camisa', quantidade: 3, preco: 50.0},
    {nome: 'calca', quantidade: 5, preco: 150.0},
    {nome: 'bone', quantidade: 10, preco: 60.0}
]

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++){
    let item = carrinho[i]
    let subTotal = item.quantidade * item.preco;
    totalCompra = totalCompra + subTotal
    console.log(totalCompra);
}

console.log(`valor total da compra: R${totalCompra}`)