const cadUsers = ['Bruno', 'Lucas', 'Vinicius']
let user = 'Lucas'
let resultado = ''


function testUser (users, Usertest) {
        for (let i = 0; i < users.length; i++){
            if (Usertest == users[i]) {
                return console.log(`Seu usuário já está cadastrado em nosso sistema!`)
            }   

        }
        return console.log(`Usuário não cadastrado`)
}

testUser(cadUsers,user)



const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const listaTarefas = []


rl.question("Digite a sua primeira tarefa: ", (input1) => {
 listaTarefas.push(input1);

    rl.question("Digite a sua segunda tarefa: ", (input2) => {
    listaTarefas.push(input2);
    
        rl.question("Digite a sua terceira tarefa: ", (input3) => {
        listaTarefas.push(input3);

 const resultado = listaTarefas.length
 listaTarefas.pop()
  console.log(`Você tinha ${resultado} tarefas pendentes, após executar umas das tarefas ficou com as seguinte tarefas para serem executadas: ${listaTarefas.join(' e ')} `);
  
  
  rl.question("Digite a sua terceira tarefa: ", (input4) => {
    const tarefa4 = (input4);

  if(listaTarefas.includes(tarefa4)) {
    for (let i = 0; i < listaTarefas.length; i++) {
        if(tarefa4 == listaTarefas[i]){
            listaTarefas.splice(i, 1)
            console.log(`A sua tarefa foi concluida e restou as seguintes tarefas: ${listaTarefas.join(` e `)}`)
        } 
    }
  } else {
    console.log(`A tarefa ${tarefa4} não está na sua lista de tarefas`)
  }


rl.close();

})  
})
})
})

