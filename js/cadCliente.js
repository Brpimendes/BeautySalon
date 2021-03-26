window.addEventListener('load', function(){
    const btnCadastrar = document.querySelector('#cadastrar')
    btnCadastrar.addEventListener('click', function(){
        cadastrarCliente()
    })
})

function cadastrarCliente(){
    const inputNome = document.querySelector('input[name="nome"]')

    if(!inputNome.value){
        alert('Todos os campos são obrigatórios!')
    }
}