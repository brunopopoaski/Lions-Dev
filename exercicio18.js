const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const tarefas = []

function incluirTarefas() {
    rl.question('Digite uma tarefa para incluir na lista: \n', (input) => {

        const tarefa = input.trim()
        const tamanho = tarefas.length
        tarefas.push(tarefa)

        if(tamanho > 3){
            console.log(`\nSua lista de tarefas é:`);
            tarefas.forEach((tarefa, index) => console.log(`\n ${index + 1} - ${tarefa}\n`))
            rl.close()
        } else {
            incluirTarefas()
        }
        })
    }

    
incluirTarefas()



//arrumarrrrrrrrrrrrrrrrrrr