window.addEventListener('load', function(){
    const btnLogin = document.querySelector('.form button')
    btnLogin.addEventListener('click', function(){
        logar()
    })
})

function logar(){
    let inputEmail = document.querySelector('input[type=email]')
    let inputPassword = document.querySelector('input[type=password]')

    if( inputEmail.value && inputPassword.value ){
        const qs = new URLSearchParams()
        qs.append('login', inputEmail.value)
        qs.append('senha', inputPassword.value)
        qs.append('acao', 'entrar')



        const req = axios.post('../Controller/controllerUsuario.php', qs)

        req.then( function(res){
            if( res.data.success === false ){
                return
            }

            localStorage.setItem('usuario_id', res.data.usuario_id)
            localStorage.setItem('login', res.data.login)
            localStorage.setItem('senha', res.data.senha)

            location.href = 'principal.html'
        } )
    } else {
        alert('Os dois campos são obrigatórios!')
    }

}