// const { lastDayOfDecade } = require("date-fns")

const { format } = require("date-fns")

// console.log(document.title)


// acessar o elemento pelo ID
const guest = document.getElementById("speaker-1")
console.log(guest)

// mostra as propriedades do objeto
console.dir(guest)


const guestBy = document.getElementsByClassName("guest-class")
console.log(guestBy)


let element = document.getElementsByClassName('bNg8Rb')
element.item(1)
element[0];

const guestByTag = document.getElementsByTagName("li")
console.log(guestByTag)


//
// let guests = document.querySelector(".bNg8Rb")
let guests = document.querySelector(".bNg8Rb h1")  //quando não quer alterar ou sumir com uma tag do tipo span, deixar a troca com a tag mais concreta
guests.textContent = 'um dia'  //troca o conteudo da tag com estilização visivel e o oculto (quando tem uma tag que está com display none(oculto))
guests.innerText  //troca o conteudo da tag sem estilização visivel
guests.innerHtml  // retorna o html como texto 
guests.append('Ola') //acrescenta algo depois do conteudo da tag


const input = document.getSelector('#name')
input.classList.add('input-error')    //acessar as classes dos elementos e adicionar nova classe
input.classList.remove('input-error') //remove as classes dos elementos e adicionar nova classe
input.classList.toggle('color-new') //se tiver a classe ela remove a classe, e se não tiver a classe ele adiciona a nova classe.



let inputDom = document.querySelector('input')

// atualizar um atributo
inputDom.setAttribute('type', 'file')

// Remover um atributo
inputDom.removeAttribute('id');


// EVENTOS - alguma ação que o cliente faz para interagir

window.addEventListener('load', () => {    //metodo que fica observando tudo o que acontece no window(Janela)
    console.log("A pagina foi carregada, toda vez que atualiza")
})


// evento que observa a estrutura do DOM
addEventListener('click', (event) => {  //pode colocar event ou somente a letra e
    event.preventDefault()   //previne o comportamento padrão do botão
    
    console.log(event)
})

addEventListener('click', (e) => {  //pode colocar event ou somente a letra e
    e.preventDefault()   //previne o comportamento padrão do botão
    
    console.log(e)
// retorna todas as informações do evento
    console.log(e.target)

    // retorna o elemento clicado
    console.log(e.target.textContent)

     // retorna o conteudo
     console.log(e.target.textContent)
})


// identificar quando o evento acontecer somente em um lugar (observar o evento acontecer nele e não em qualquer lugar)

let ul = document.querySelector("ul")

// quando vc interaje com um elemento é disparado o evento
ul.addEventListener('scroll', () => {
    console.log(ul.scrollTop)

    if(ul.scrollTop > 300) { // se o scroll chegou no final da lista que é maior que 300 ele retorna para o inicio
        console.log("fim da lista")
        
        ul.scrollTop({
            top: 0,
            behavier: 'smooth', //comportamento
        })

    }else{
        console.log("ainda nao chegou")
    }
})


let button = document.querySelector('button')

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("chegou a hora")
})


// eventos de formulario

let form = document.querySelector('form')

// ele vai capturar só o ultimo que vc criou
form.onsubmit = (event) => {
    event.preventDefault()

    console.log("voce fez submit no formulario")
}

// e com o addEventListener ele vai capturar todos o que vc criou
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('form enviado')
})



// keydow - quando uma tecla é pressionada (captura tudo, incluindo CTRL, shift, etc)

let input1 = document.querySelector('input')

input1.addEventListener("keydown", (event) => {
    console.log(event)
    console.log(event.key)   
});
 
input1.addEventListener('keypress', (event) => {  // ele dispara o evento quando uma tecla do tipo caractere é pressionada (letras, numeros, pontos, etc)
    console.log(event)   
    console.log(event.key)   
})

// dispara o evento quando muda 
input1.addEventListener('change', (event) => { 
    console.log(event)   
    console.log(event.key)   
})

input1.onchange = () => {
    console.log('o input mudou')
    inputChange()
}

function inputChange(){
    console.log('o input mudou')
}


// espressão regex

let input2 = document.querySelector('input')

input2.addEventListener('input', (event) => {
   let value = input.value

   const regex = /\D+/g

   console.log(value.match(regex));
})

input2.addEventListener('input', (event) => {
    let value = input.value
 
    const regex = /\D+/g
    let isValid = regex.test(value)
    console.log(isValid);
 })
 

 //evento de submit

 form.addEventListener('submit', (event) => {
    event.preventDefault()

    const regex = /\D+/g
    let value = input.value.replace(regex, '')  // metodo de replace vai procurar o padrão e vai susbtituir pelo segundo argumento ou seja, vazio ou o que seja colocado

    console.log(value);
 })