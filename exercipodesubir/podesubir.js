
function podesubir(n1, n2) {
    let acompanhado = (n2 == 'acompanhado'? 'true': 'false')
    let naoacompanhado = (n2 == 'nao acompanhado'? 'false': 'true')    
    console.log(acompanhado)
    console.log(naoacompanhado) 
     if (n1 >= 1.40 && n1 <= 2.00) {
        return 'Acesso autorizado'
     }else if (n1 = 1.39 && n1 >= 1.20){
        console.log(n2 == 'acompanhado'? 'Acesso permitido': 'Somente acompanhado')
        return 'Acesso autorizado somente com acompanhante'        
    }else if (n1 = 1.39 && n1 >= 1.20){
        console.log(n2 == 'nao acompanhado'? 'Somente acompanhado': 'Acesso permitido')        
    }else if(n1 < 1.20){       
       return 'Acesso negado'
    }
        
    }
    
    console.log(podesubir(1.30, 'nao acompanhado'))
    console.log(podesubir(1.30, 'acompanhado'))
    console.log(podesubir(1.50, 'nao acompanhado'))
    console.log(podesubir(1.50, 'acompanhado'))
    console.log(podesubir(1.19, 'acompanhado'))
    console.log(podesubir(1.19, 'nao acompanhado'))
    