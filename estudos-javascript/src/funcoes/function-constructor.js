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




// classe foi inserida com a ideia de ser uma forma mais simples e amigavel de criar objetos

class Person {
    constructor() {
        console.log('classe instanciada...')
    }

}

const person = new Person()

class Person {
    constructor(name) {
        console.log('classe instanciada...', name)
    }

}

const person1 = new Person('Ghalba')


/////////////////////

class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    sendEmail(){
        console.log('email enviado para ', this.email)
    }
}

const user = new User('Isa', 'email@email.com')
user.sendEmail()



class Users {
    static showMessage(){          // se o metodo tiver o static posso acessar sem instanciar a classe
        console.log('mensagem')
    }
}

let users = new Users()
users.showMessage()


users.showMessage()     // se o metodo tiver o static posso acessar sem instanciar a classe, acessa direto. Precisa tomar cuidado para não querer usar do construtor



//como aplicar herança

class Animals {
    constructor(name){
        this.name = name
    }

    makeNoise(){
        console.log('algum som')
    }
}

class Dog extends Animals {    // extend para herdar a classe de cima

}  

let dog = new Dog(dog.makeNoise)