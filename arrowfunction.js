// let consoleTeste = () => {
//     console.log("Olá mundo!")
// }

// consoleTeste();

// let soma = (a,b) => {
//     return a + b;
// };

// console.log(soma(10,20));

// const multiplicarPorDois = (x) => {
//     return x * 2
// }

// console.log(multiplicarPorDois(2));

// const multiplicarPorDois2 = x => x * 2

// console.log(multiplicarPorDois2(4));


function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log("Esta função precisa ter os dois argumentos")
    } else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));