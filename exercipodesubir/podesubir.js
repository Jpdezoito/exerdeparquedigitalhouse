function podesubir(n1, n2) {  
    let Tru = 'True'
    let Fal = 'False'
    console.log(n2 == 'Acompanhada' ? Tru : Fal)
    let auto = 'Acesso autorizado'
    let some = 'Acesso autorizado somente com acompanhante'    
    if (n1 >= 1.40 && n1 <= 2.00) {                                   
        return auto;
    }else if (n1 < 1.40 && n1 >= 1.20, Fal ) {
        return some 
    }   
    else if (n1 < 1.20) {
        return 'Acesso negado'
    }

}

console.log(podesubir(1.20 , 'e'))