let idade = 18;
let cnh = true;

if (idade < 18 && cnh == false) {
    console.log("Você não pode dirigir, pois tem menos de 18 anos e não possui CNH.")
} else if (idade >= 18 && cnh == false) {
    console.log("Você não pode dirigir pois não tem CNH.")
} else {
    console.log("Você pode dirigir.")
}