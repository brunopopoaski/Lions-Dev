const listaDeNumeros = [5, 11, 9, 20, 0, 14, 3]
let numerosDoFatorial = []
let resultado = ``

function fatorial(numberTest) {

    for (let i = numberTest - 1; i > 0; i--) {
        numerosDoFatorial.push(i)
    }
    return multiplicacao(numberTest, numerosDoFatorial)

}

function multiplicacao(numberFatorial, arrayFatorial) {
    resultado = numberFatorial
    for (let i = 0; i < arrayFatorial.length; i++) {
        resultado *= arrayFatorial[i]
    }
    return resultado
}

function clearNumerosFatorial() {
    numerosDoFatorial = []
}

function iniciarPrograma(arrayParaFatorar) {
    arrayParaFatorar.forEach(element => {
        if (element === 0) {
            console.log(`O resultado de ${element}! é ${1}\n`);
            clearNumerosFatorial()
        } else {
            console.log(`O resultado de ${element}! é ${fatorial(element)} - ${element}*${numerosDoFatorial.join('*')}\n`);
            clearNumerosFatorial()
        }
    });
}

iniciarPrograma(listaDeNumeros)