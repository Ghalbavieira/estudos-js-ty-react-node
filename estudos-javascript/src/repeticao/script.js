
// WHILE: executa até que a condição for verdadeira

let execute = true

while (execute === true){   // aqui estou dizendo, enquanto o execute for verdadeiro 
    let response = window.prompt('deseja continuar: 1(sim) ou 2 (Não)')

    if(response == 2){
        execute = false
    }
}

// ou assim

let execute1 = true

while (execute1){   // aqui estou dizendo, enquanto o execute for verdadeiro ele repete
    let response = window.prompt('deseja continuar: 1(sim) ou 2 (Não)')

    if(response == "2"){
        execute1 = false 
    }

}

console.log('segue o fluxo...');


// loop infinito
let value = true
while(value) {   // aqui estou dizendo que enquanto o value for verdadeiro ele vai ficar chamando o console infinitamente.
    console.log('executando while...')  
}


/* DO WHILE
    repete até que a condição especificada seja verdadeira.
    No entanto, a instrução será executada pelo menos uma vez antes da condição ser verificada.
*/

let value1 = 0

do {                       // a condição é verificada no while por isso ele executa pelo menos uma vez
    value1++
    console.log(value)

}while(value < 10)

console.log('segue o fluxo...')



/**
 * FOR - repete até que a condição especificada seja falsa
 *  - variavel de controle
 *  - condição
 *  - incremeto ou decremento da variavel de controle
 * 
 *   i = (index)
 */

let number = 15;

for (let i = 0; i < number; i++){
    console.log(i)
}

let nameText = "Vieira";

for (let i = 0; i < nameText.length; i++){
    console.log(i)
}


/**
 * FOR...IN = executa iterações a partir de um objeto e percorre as propriedades
 */

let person = {
    name: 'Ghalba',
    surName: 'Vieira',
    email: 'email@email.com',
}

/* dentro da estrutura do for...in tem uma variavel auxiliar que estamos chamando de property e usamos o in e o person que é o 
objeto (estou percorrendo as propriedades a partir do objeto in dentro de person e a varival auxiliar funciona quando cada vez que percorrer a cada interação ele vai usar 
a variavel para usar)
*/
for (let property in person) {
    console.log(property) // exibe o nome da propriedade

    //exibe o conteudo da propriedade
    console.log(person[property])
}

let student = ['joao', 'amanda']

// usando o in para percorrer o array e retorna a posição da propriedade no index
for (let index in student) {
    //exibe o conteudo da propriedade
    console.log(student[index])
}
