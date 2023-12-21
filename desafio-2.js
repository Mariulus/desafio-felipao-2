let saldoDeVitorias = vencerOuPerder(5, 50)
let nivel = "Ferro"

console.log("O Heroi tem saldo de " + saldoDeVitorias + " e está no nível de " + nivel)

function vencerOuPerder(vitorias, derrotas) {
    let saldo = vitorias - derrotas 
    return saldo
}
