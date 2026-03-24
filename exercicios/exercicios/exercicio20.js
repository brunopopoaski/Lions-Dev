const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
//sem tempo para entregar kkk



const bimestre = ['primeiro', 'segundo', 'terceiro', 'quarto']
const notas = []
somaNotas = 0
let i = 0

function somandoNotas() {
    rl.question(`Digite a nota do ${bimestre[i]} bimestre: \n`, input =>{

        if(notas.length < 3){
            notas.push(parseFloat(input))
            i++
            somandoNotas()
        } else{
            notas.forEach(atual => somaNotas += atual )
            const media = somaNotas / notas.length
            if (media < 5){
                console.log(`A média das sua notas foi ${media.toFixed(2)}, Infelizmente você foi REPROVADO!`)
                rl.close()
            } else if (media >= 5 && media <= 6.9) {
                console.log(`A média das sua notas foi ${media.toFixed(2)}, Infelizmente você ficou de recuperação e tem uma nova tentativa!`)
                rl.close()
            } else if (media >= 7){
                console.log(`A média das sua notas foi ${media.toFixed(2)}, PARABÉNS você foi aprovado!!!!`)
                rl.close()
            }
        }
    })
}

somandoNotas()