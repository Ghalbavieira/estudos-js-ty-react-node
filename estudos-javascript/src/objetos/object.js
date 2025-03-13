/**
 * OBJETO
 *  - uma coleção de dados e/ou funcionalidades;
 *  - podem ter propriedades e métodos;
 */

let obj = {}
console.log(obj);
console.log(typeof obj);

// objeto com propriedades e métodos;
let user = {
    email: "email@email.com",  // propriedade: valor ou pode ser chamado de chave: valor
    age: 23,
    name: {                    //propriedade composta por varios chave: valor (dados menores)
        firstName: "ghalba",
        surName: "vieira",
    },
    address: {
        street: "Rua X",
        number: 23,
        code: 7654900,
        city: "goiania"
    },
    message: function(){
    console.log('oi ' + user.name.firstName)
    },
}

// Acessando propriedades e métodos usando a notação de ponto. e acessando propriedades de objeto
console.log(user.email)
console.log(user.name.firstName)


// quer acessar um metodo do objeto como função
user.message();

// Anotacao de colchetes
console.log(user['email'])
console.log(user['name']['surName'])

user['message']();