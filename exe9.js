

function exe9(numero){
    //entrada de dados
    nro = Number(prompt(`Informe um numero inteiro e positivo`))

    for(var i = numero; i >= 1; i--){
        if (numero % i == 0) {
            soma = soma + i
        }
    }
    console.log(`Soma dos divisores é ${soma}`)
}