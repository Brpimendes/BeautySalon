window.addEventListener('load', function(){
    const btnAgendar = document.querySelector('.cta-btn')
    if( btnAgendar ){
        btnAgendar.addEventListener('click', function(){
            agendarHorario()
        })
    }

    const btnHamburguer = document.querySelector('.hamburguer')
    btnHamburguer.addEventListener('click', function(){
        let navHamburguer = document.querySelector('.contacts > nav')
        navHamburguer.classList.toggle('show')
    })

    divCtaBtn()
})

function divCtaBtn(){
    const divCtaBtn = document.querySelector('.cta-btn')
    const spnMaterial = document.createElement('span')
    const linkAgendamento = document.createElement('a')

    spnMaterial.classList.add('material-icons')
    spnMaterial.append('calendar_today')

    linkAgendamento.append('Agende seu horário')

    divCtaBtn.appendChild(spnMaterial)
    divCtaBtn.appendChild(linkAgendamento)
    divCtaBtn.setAttribute('title', 'Realizar Agendamento')
}

function agendarHorario(){
    if( !localStorage.getItem(cliente_id) ){
        location.href = '../login.html'
    } else {
        location.href = '../agendamento.html'
    }
}