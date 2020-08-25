chefe()

function chefe(){
    exe7()
}
// função testada
function exe7(){
    var soma = 0
    var conta = 0
    var numero = Number(prompt("Informe um número"))
    do {
        conta++ // soma1
        soma = soma + numero
        numero = Number(prompt("Informe outro número. Digite número negativo para encerrar"))
    }
    while(numero >= 0)

    console.log(`A média dos número informados é ${soma / conta} `)
}