let array = ['Pão', 'Manteiga', 'Presunto', 'Musarela'];

function inverter(n1) {
let sommul = n1.reverse()
return sommul;
}
console.log(inverter(array));

function inverter(n1) {
let sommul = n1.reverse()
return sommul;
}
console.log(inverter(array));

function somarArray(n5) {
let sun = n5.reduce(function(n1,n2){
return n1 + n2;
})

return sun;
};

console.log(somarArray([1,2,3]));
console.log(somarArray([10,3,10,4]));
console.log(somarArray([-5,100]));


function join(str1) {
let join = str1.reduce(function(join, str3){
    return join + str3;
})
return join;
} 
console.log(join(['O','l','á']));
console.log(join(['T','c','h','a','u']));

const filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];


console.log(filmes[0]);
console.log(filmes.length);


const filmes2 = filmes.map (function(filme) {
  return filme.toUpperCase();
});
console.log(filmes2);

let arr1 = ["toy story", "finding Nemo"];
let arr2 = ["kung-fu panda", "wally", "fortnite"];
let arr3 = arr1. concat(arr2);
console.log(arr3.pop());
console.log(arr3);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const acertos = [];
// Verifica se cada número jogado
// está na lista dos sorteados
for(var i=0; i<asiaScores.length; i++) {
    if(euroScores.indexOf(asiaScores[i]) > -1) {
        acertos.push(asiaScores[i]);
    }
}

console.log("Você tem " + acertos.length + " números iguais ", acertos);
















