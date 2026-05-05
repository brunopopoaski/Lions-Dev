const listaDeNumeros = [5, 11, 9, 20, 0, 4, 3]
let numerosPrimos = []
let divisivel = 0
let resultado = ``

function listandoNumerosAte(numberTest) {

    for (let i = 0; i <= numberTest; i++) {
        divisivel = numberTest % i
        if(divisivel === 0){
            numerosPrimos.push(i)
        }
    }
    return verificaçãoPrimos(numerosPrimos)

}

function verificaçãoPrimos(arrayPrimos){
    if (arrayPrimos.length > 2){
        numerosPrimos = []
        return false
    } else {
        numerosPrimos = []
        return true
    }
}


function clearNumerosPrimos() {
    numerosPrimos = []
}

function iniciarPrograma(arrayDeNumerosPrimos) {
    arrayDeNumerosPrimos.forEach(element => {
        console.log(`${element} é primo? R: ${listandoNumerosAte(element)}`)
    });
}

iniciarPrograma(listaDeNumeros)
