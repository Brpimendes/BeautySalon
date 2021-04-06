window.addEventListener('load', function(){
    const btnCadastrar = document.querySelector('.form button')
    btnCadastrar.addEventListener('click', function(){
        cadastrarClientes()
    })
})

function cadastrarClientes(){
    const inputNome = document.querySelector('input#nome')
    const inputCPF = document.querySelector('input#cpf')
    const inputDataNascimento = document.querySelector('input#dataNasc')
    let selectSexo = document.querySelector('select#sexo')
    const inputTelefone = document.querySelector('input#telefone')
    const inputEmail = document.querySelector('input#email')
    const inputSenha = document.querySelector('input#senha')
    const inputRepSenha = document.querySelector('input#repSenha')

    let sexo = selectSexo.options[selectSexo.selectedIndex].value

    if( !inputSenha.value === inputRepSenha.value ){
        alert('As senhas precisam ser iguais')
        return
    }

    if( inputNome.value && inputCPF.value && inputDataNascimento.value && selectSexo.value && inputTelefone.value && inputEmail.value && inputSenha.value && inputRepSenha.value ){

    } else {
        alert('Todos os campos são obrigatórios')
    }
}