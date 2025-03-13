const product = {
    name: "teclado",
    quantity: 100,
}

// Acessando a propriedade do objeto
console.log(product.name);
console.log(product.quantity);

// atualiza o valor de uma propriedade
product.quantity = 90
product.name = "mouse"

console.log(product.name);
console.log(product.quantity);


/* operador de coalescência nula (??)
    Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou underfined. 
    Caso contrário, ele retorna o seu operando do lado esquerdo
*/

// ele leva em consideração o null e o underfined
let content = "olá"
console.log(content ?? "Conteúdo padrão")