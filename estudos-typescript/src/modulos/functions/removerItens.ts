import { Carrinho } from "../model/carrinho";

export function RemoverItensZerados(carrinho: Carrinho): Carrinho{
    const itens = carrinho.itens.filter((item) => item.quantidade > 0)
    return {...carrinho, itens}
}

