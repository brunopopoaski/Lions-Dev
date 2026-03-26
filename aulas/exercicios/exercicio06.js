const listaTotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const listaImpar = []
const listaPar = []

function testandoNumeros() {
    listaTotal.forEach(numero => {
        let resultado = numero % 2
        if (resultado === 0) {
            listaPar.push(numero)
        } else {
            listaImpar.push(numero)
        }
    })
}

testandoNumeros()

console.log(`\n Lista Par ---- ${listaPar};\n Lista Impar ---- ${listaImpar};`)