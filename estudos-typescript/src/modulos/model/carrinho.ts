import { ItemCarrinho } from "./itemCarrinho";

export interface Carrinho {
    readonly itens: ItemCarrinho[];
    readonly cupom?: number;
    total: number;
    totalComDescontos: number;
}


