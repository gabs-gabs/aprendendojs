// function imprimirNoConsole() { // função sem parâmetro
//     console.log("Olá mundo")
// }

// imprimirNoConsole();

// function imprimirUmNumero(num) { // função com parâmetros
//     console.log("O número é ", num);
// }

// imprimirUmNumero(2);

// const numeroAleatorio = function () { // função anônima atrelada a variavel
//     console.log(Math.random());
// }

// numeroAleatorio();
// numeroAleatorio();


// function multiplicarTresNumeros(x,y,z) {
//     return x * y * z;
// }

// console.log(multiplicarTresNumeros (2,3,4));

// function podeDirigir(idade, cnh) {
//     if(idade >= 18 && cnh == true) {
//         console.log("Pode dirigir");
//     } else {
//         console.log("Não pode dirigir");
//     }
// }

// console.log(podeDirigir(19, true));
// console.log(podeDirigir(25, true));
// console.log(podeDirigir(17, false));

// let x = 20;

// if(true) {
//     let x = 10;
//     console.log(x); // escopo if
// }

// console.log(x); // escopo global

let a = 10;

function multiplicar (x,y) {
    let a = x * y; // escopo função

    if(a > 10) { // escopo if dentro da função
        let a = 0;
        console.log(a);
    }

    console.log(a);

}

console.log(a); // escopo globaL

multiplicar(3,7);