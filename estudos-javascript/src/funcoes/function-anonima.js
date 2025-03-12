
// função anonima (função que não possui nome), vc guarda a propria função dentro da variavel


const showMessage = function(){
    return("Olá, Ghalba")
}

console.log(showMessage())


//

const showMessage2 = function(message, name){
    return message + name
}

console.log(showMessage2("olá", "Vieira"))