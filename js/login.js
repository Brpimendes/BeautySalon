window.addEventListener('load', function(){
    const btnLogin = document.querySelector('.form button')
    btnLogin.addEventListener('click', function(){
        logar()
    })
})

function logar(){
    let inputEmail = document.querySelector('input[type=email]')
    let inputPassword = document.querySelector('input[type=password]')
    
    let error = document.querySelector('p.error')
    error.innerHTML = ''

    if( inputEmail.value && inputPassword.value ){
        if( validarEmail(inputEmail.value) === false ){
            error.classList.add('active')
            error.append(document.createTextNode('Preencha o campo de email com um formato válido'))
            return
        }
    } else {
        error.classList.add('active')
        error.append(document.createTextNode('Os dois campos são obrigatórios de preenchimento'))
    }
}

function validarEmail(email){
    let valida = /\S+@\S+\.\S+/
    return valida.test(email)
}