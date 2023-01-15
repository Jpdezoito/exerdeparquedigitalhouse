
let ativado = 1
let OnOff = () => {
    if (ativado == 1) {
        alert('Assistente ativado')
        ativacao.style.border='12px solid green'
        feedback.innerHTML = 'ATIVADO'
        ativado = 0
    }else {
        alert('Assistente Desativado')
        ativacao.style.border='12px solid red'
        feedback.innerHTML = 'DESATIVADO'
        ativado = 1
    }
}



let menu = (tempo, tempopadrao) => {
    if (tempo > tempopadrao) {
        return 'O prato está queimando'
    }else if (tempo < tempopadrao) {
        return 'O prato está quase pronto'
    }else if (tempo == tempopadrao) {
        return 'O prato está pronto'
    }
}


let microondas = (prato, tempo) => {
    switch (key) {
        case 'Pipoca':
            tempo = 5
            menu(tempo, tempopadrao)
            break;
    
        default:
            return 'Este prato não existe'
            break;
    }
}


