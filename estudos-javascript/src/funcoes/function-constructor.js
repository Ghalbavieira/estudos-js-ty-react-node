/** 
 * Função construtora é uma função que cria um objeto e retorna o objeto quando instanciada.
 * 
 * Instancia é uma copia que estou fazendo daquele objeto na memoria. Usando a palavra NEW
 */


function createProduct(name){
    const product = {}
    product.name = name
    product.details = function(){
        console.log(`o nome do produto é ${this.name}`)
    }

    return product
}

// instancia
let product1 = new createProduct('teclado')
console.log(product1.name)
product1.details()

let product2 = new createProduct("mouse")
console.log(product2.name)
product2.details()