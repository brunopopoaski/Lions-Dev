//config
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//</>

const listaAlunos = [
    { nome: "Ana", nota: 7.5 },
    { nome: "Bruno", nota: 9.5 },
    { nome: "Carlos", nota: 6.5 },
    { nome: "Daniela", nota: 4.0 },
    { nome: "Eduardo", nota: 5.5 },
    { nome: "Fernanda", nota: 7.0 },
    { nome: "Gabriel", nota: 8.5 },
    { nome: "Helena", nota: 6.0 },
    { nome: "Igor", nota: 9.5 },
    { nome: "Juliana", nota: 7.8 }
]
let totalNotas = 0
let tentativa = 0

function inputDeNumero() {
    console.log("\n\n==============PROGRAMA INICIADO==============\n\n");
    rl.question('Digite seu nome:', inputNome => {
        const nome = inputNome

        rl.question('Digite sua nota:', inputNota => {
            const nota = parseFloat(inputNota)
            switch (true) {

                case (tentativa === 3):
                    console.log(`\nNúmero inválido, finalizando sistema...\n`)
                    rl.close()
                    break;

                case (isNaN(nota)):
                    tentativa++
                    console.log(`\nNúmero inválido, tente novamente\n`)
                    inputDeNumero()
                    break;
                default:
                    const obj = {
                        nome: nome,
                        nota: nota
                    }
                    listaAlunos.push(obj)
                    mediandoNotas()
            }
        })
    })
}

function mediandoNotas() {
    console.clear()
    listaAlunos.forEach(aluno => totalNotas += aluno.nota)
    const mediaNotas = totalNotas / listaAlunos.length
    console.log(`A média das notas entre os alunos é ${mediaNotas.toFixed(2)}\n\n`)
    acimandoMedia(mediaNotas)
}

function acimandoMedia(media) {
    const resultado = listaAlunos.filter((momento) => momento.nota >= media)
    console.log(`Alunos Acima da média:`);
    resultado.forEach(agora => {
        console.log(`Nome: ${agora.nome} - Nota:${agora.nota}`)
    })
    reprovando()
}

function reprovando() {
    const resultado = listaAlunos.filter((momento) => momento.nota < 8)
    console.log(`\n\nUm total de ${resultado.length} alunos reprovou, Lista de reprovados:\n`);
    resultado.forEach(agora => {
        console.log(`${agora.nome}\n`)
    })
    maiorMenor()

}

function maiorMenor() {

    let notaAtual = 0
    const notaComparacao = listaAlunos[0].nota
    let notaMaior = notaComparacao
    const notasMaiores = []
    const notasMenores = []

    maxNota()

    function maxNota() {

        listaAlunos.forEach((objetoAtualA) => {
            notaAtual = objetoAtualA.nota

            switch (true) {

                case (notaAtual > notaMaior):
                    notaMaior = notaAtual
                    break;

                case (notaAtual = notaMaior):
                    notaMaior = notaAtual
                    break;

            }

        })
        minNota()
    }


    function minNota() {

        listaAlunos.forEach((objetoAtualB) => {
            notaAgora = objetoAtualB.nota
            notaMenor = notaComparacao

            switch (true) {

                case (notaAgora < notaMenor):
                    notaMenor = notaAgora
                    break;

                case (notaAgora = notaMenor):
                    notaMenor = notaAgora
                    break;

            }

        })

    }

    listaAlunos.forEach((objetoAtual) => {

        if (objetoAtual.nota === notaMaior) {
            notasMaiores.push(objetoAtual)
        }

    })

    listaAlunos.forEach((objetoAtual) => {

        if (objetoAtual.nota === notaMenor) {
            notasMenores.push(objetoAtual)
        }

    })

    console.log(`\n-----------------------Lista de alunos com maiores notas--------------------`)
    notasMaiores.forEach(todasMaiores => console.log(`\n Nome: ${todasMaiores.nome} | Nota: ${notaMaior}`))
    console.log(`\n-----------------------Lista de alunos com menores notas--------------------`)
    notasMenores.forEach(todasMenores => console.log(`\n Nome: ${todasMenores.nome} | Nota: ${notaMenor}`))
    rl.close()
}

inputDeNumero()