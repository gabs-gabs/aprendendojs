let idade = prompt("Qual sua idade?");
idade = parseInt(idade);

if (idade < 18) {
    console.log("Não pode entrar na balada");
}

if (idade >= 18){
    console.log("Pode entrar na balada");
}