// Arrow Function (função de seta)

const showMessage1 = () =>  {
    console.log("olá")
}

console.log(showMessage1)
showMessage1()

const showMessage2 = (username, email) => {
    console.log(`olá, ${username}. Seu email é: ${email}`)
}

showMessage2('maria', "maria@gmail.com")