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
   return 'Alice ganhou';
}else {
   return 'Bob ganhou';
}
}

console.log(encontrarGanhador(alicia,bob))