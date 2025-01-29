import { RemoverItensZerados } from "./functions/removerItens";
import { Carrinho } from "./model/carrinho";

const carrinhoOriginal: Carrinho = {
    itens: [
        {nome: 'caneta', preco: 1.5, quantidade: 2},
    ],
    cupom: 0.1,
    total: 0,
    totalComDescontos: 0
}

const carrinhoSemItens = RemoverItensZerados(carrinhoOriginal);
console.log(carrinhoOriginal);
console.log(carrinhoSemItens);