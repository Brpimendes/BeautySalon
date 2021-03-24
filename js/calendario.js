window.addEventListener('load', function(){
    let calendario = document.querySelector('#calendario1')
    calendario = gerarEstrutura(calendario)

    preencherDias(calendario)

    recuperarData(calendario)
})

function gerarEstrutura(el){
    // GARANTE QUE TA PEGANDO O ELEMENTO CERTO, no caso o calendário
    if(el.tagName === 'CALENDARIO'){
        //Cria a tabela, e atribui classe e ID
        const table = document.createElement('table')
        table.classList.add('calendario-table')
        table.setAttribute('id', el.getAttribute('id'))
        el.parentElement.replaceChild(table, el)

        //Cria o cabeçalho da tabela
        const trHeader = document.createElement('tr')
        trHeader.classList.add('calendario-tr')
        trHeader.classList.add('calendario-header')
        table.appendChild(trHeader)

        const tdPrev = document.createElement('td')
        tdPrev.classList.add('calendario-td')
        tdPrev.classList.add('calendario-action')
        tdPrev.appendChild(document.createTextNode('<'))
        tdPrev.addEventListener('click', function(){
            let mes = parseInt(table.dataset.mes)
            let ano = parseInt(table.dataset.ano)

            ano = mes === 0 ? ano - 1 : ano
            mes = mes === 0 ? 11 : (mes - 1)

            preencherDias(table, ano, mes)
        })
        trHeader.appendChild(tdPrev)

        const tdMY = document.createElement('td')
        tdMY.classList.add('calendario-td')
        tdMY.classList.add('calendario-td5')
        tdMY.setAttribute('colspan', 5)
        trHeader.appendChild(tdMY)

        const tdNext = document.createElement('td')
        tdNext.classList.add('calendario-td')
        tdNext.classList.add('calendario-action')
        tdNext.appendChild(document.createTextNode('>'))
        tdNext.addEventListener('click', function(){
            let mes = parseInt(table.dataset.mes) 
            let ano = parseInt(table.dataset.ano)

            ano = mes === 11 ? ano + 1 : ano
            mes = mes === 11 ? 0 : (mes + 1)

            preencherDias(table, ano, mes)
        })
        trHeader.appendChild(tdNext)

        const trHeader2 = document.createElement('tr')
        trHeader2.classList.add('calendario-tr')
        trHeader2.classList.add('calendario-header')
        table.appendChild(trHeader2)

        const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

        for(let day in days){
            const tdDay = document.createElement('td')
            tdDay.classList.add('calendario-td')
            tdDay.appendChild(document.createTextNode(days[day]))
            trHeader2.appendChild(tdDay)
        }

        //Cria as semanas da tabela
        for( let semana = 0; semana < 6; semana++ ){
            const tr = document.createElement('tr')
            tr.classList.add('calendario-tr')
            table.appendChild(tr)

            //Cria os dias da tabela
            for( let dia = 0; dia < 7; dia++ ){
                const td = document.createElement('td')
                td.classList.add('calendario-td')
                td.classList.add(`s${semana + 1}d${dia + 1}`)
                td.addEventListener('click', function(){
                    selecionarDia(table, td)
                })
                tr.appendChild(td)
            }
        }

        return table
    } else {
        console.warn('O elemento ', el, 'nao é um calendário.')
        return el
    }
}

function preencherDias(el, ano, mes, dia){
    if( el.tagName === 'TABLE' && el.classList.contains('calendario-table') ){
        mes = mes === undefined ? new Date().getMonth() : mes//Inicia em 0 = Janeiro
        ano = ano === undefined ? new Date().getFullYear() : ano
        dia = dia === undefined ? new Date().getDate() : dia

        el.dataset.ano = ano
        el.dataset.mes = mes
        el.dataset.dia = dia

        //Em qual dia da semana, cai o dia 1º
        const dia1NaSemana = new Date(ano, mes, 1).getDay() //Inicia em 0 = Domingo

        //Recupera o último dia do mês anterior
        const ultimoDiaMesAnterior = new Date(ano, mes, 0)

        let diaCalendario = 1

        el.querySelectorAll('tr:not(.calendario-header) .calendario-td').forEach(function(el){
            el.innerHTML = ''
        })
         
        for( let semana = 0, dia = dia1NaSemana; dia < 7 && semana < 6; dia++ ){
            const td = el.querySelector(`.s${semana + 1}d${dia +1}`)
            td.innerHTML = ''
            td.appendChild(document.createTextNode(diaCalendario++))

            if( dia === 6 ){
                semana++
                dia = -1 //Reseta a semana para que no incio do for reinicie do 0
            }

            if( diaCalendario > new Date(ano, mes +1, 0).getDate() ){
                break;
            }
        }


        const mesNome = new Date(ano, mes, 1).toLocaleString('default', { month: 'long' })
        const headerMesAno = el.querySelector('.calendario-td5')
        headerMesAno.innerHTML = ''
        headerMesAno.appendChild(document.createTextNode(`${mesNome} - ${ano}`))

    } else {
        console.warn('O elemento ', el, ' não é um calendário')
    }
}

function selecionarDia(el, td){
    el.querySelectorAll('tr:not(calendario-header) .calendario-td').forEach(function(el){
        el.classList.remove('selecionado')
    })

    td.classList.toggle('selecionado')

    el.dataset.dia = td.innerHTML

    location.href = 'agendamento.html?data=' + recuperarData(el) //mudar a tela para apagina de agendamento
}

function recuperarData(el){
    if( el.tagName === 'TABLE' && el.classList.contains('calendario-table') ){
        let date = new Date(el.dataset.ano, el.dataset.mes, el.dataset.dia)

        //Sem adicionar os zeros do inicio
        //return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}}`

        //Adicionando os zeros do inicio
        let m = ( date.getMonth() + 1 ).toString().padStart(2, '0')
        let d = ( date.getDate() ).toString().padStart(2, '0')
        return `${d}/${m}/${date.getFullYear()}`

    } else {
        console.warn('O elemento ', el,' não é um calendário')
    }
}