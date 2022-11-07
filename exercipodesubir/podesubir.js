function podesubir(n1, n2) {    
    if (n1 > 1.40 && n1 < 2.00) {
        return 'Acesso autorizado!';
    }else if (n1 < 1.40 && n1 > 1.20 ) {
        return 'Acesso autorizado somente com acompanhante'
    }else if (n1 < 1.20) { 
        return 'Acesso negado'
    }

}

console.log(podesubir(0.90))