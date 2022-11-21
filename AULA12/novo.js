const alicia = [23, 69, 32, 60];
const bob = [12, 67, 43, 60];

function encontrarGanhador(a, b) {  
    let n1 = {
        pontoalice: 0,
        pontoBob: 0,
      };      
    for (let i = 0 ; i < 500; i++){
        if (a[i] > b[i]) {
            n1.pontoalice += 1;
        }else if(a[i] < b[i]) {
            n1.pontoBob += 1;
        }else {
            n1 == 0;
        }
    
    }
    console.log(n1)
if (n1.pontoalice > n1.pontoBob) {
   return 'Alicia ganhou';
}else {
   return 'Bob ganhou';
}
}
console.log(encontrarGanhador(alicia,bob))
let num = {n4 : 0}

function digitalhouse(n1,n2) { 
  
    for (i = 0; i <= 100; i++){
    if (i % n1 === 0 && i % n2 !== 0){
      console.log('Digital');
    }else if (i % n2 === 0 && i % n1 !== 0){
      console.log('House');
    }else if (i % n1 === 0 && i % n2 === 0){
      console.log('Digital House');
    }else {
      console.log(i);
    }
  }
  }
digitalhouse(10,5)

let somararr = function(b1){
    let soma = 0;
    for(let i = 0; i < b1.length; i++){
        soma = soma+b1[i];
    }
    return soma
}  
console.log(somararr([10,5,8,10,7,10,6]));

let join = function(bb){
    let valor = '';
    bb.forEach(el => {
        valor = valor + el;
    });
    return valor
}
console.log(join((['o','l','a'])))

