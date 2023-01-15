const todosospratos = [{
    
    
}]



let menu = (tempo, tempopadrao) => {
    if (tempo > tempopadrao) {
        console.log('O prato está queimando')
    }else if (tempo < tempopadrao) {
        console.log('O prato está quase pronto')
    }else if (tempo == tempopadrao) {
        console.log('O prato está pronto')        
    }      
}


let microondas = (prato, tempo) => {
    let tempopadrao;
    switch (prato) {
        case 'Pipoca':
            tempopadrao = 5
            menu(tempo, tempopadrao)
            break;
        case 'Feijao':
            tempopadrao = 10
            menu(tempo, tempopadrao)
            break;
        default:
            return 'Este prato não existe'
            break;
    }
}

console.log(microondas('Feijao', 10))