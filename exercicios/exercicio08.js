const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const tarefas = []

function incluirTarefas() {
    rl.question('Digite uma tarefa para incluir na lista, quando finalizar digite "exit" ou "listar" para vizualizar as tarefas adicionadas até momento:\n', (input) => {
        const tarefa = input.trim()
        if (tarefa.toLowerCase() === 'exit') {
            tarefas.forEach((tarefa, posicao) => console.log(`Tarefa ${posicao + 1} - ${tarefa}`))
            rl.close()
        } else if (tarefa.toLowerCase() === 'listar') {
            tarefas.forEach((tarefa, posicao) => console.log(`Tarefa ${posicao + 1} - ${tarefa}`))
            incluirTarefas()
        } else {
            tarefas.push(tarefa)
            incluirTarefas()
        }
    })
}
incluirTarefas()