var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;


console.log(branco == "branco");
console.log(branco == cinza);
console.log(carro === branco);

var cavalo = carro == "preto" ? "cinza" : "marron";
console.log(cavalo);

function calcularPrestacao(valor, prestacao) {
    valorEntra = valor - 3000;
    numeroPrestacoes = valorEntra / prestacao;
    return numeroPrestacoes;
}

console.log("São necessario " + calcularPrestacao(valor, prestacao) + " prestações para pagar o carro");

let cor = branco + preto + cinza;
console.log("A soma das variaveis cor é " + cor + " e tem " + cor.length + " caracteres");



