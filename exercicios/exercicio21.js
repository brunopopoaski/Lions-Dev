/* ● Tarefa: Criar um programa que permita cadastrar 3 contatos, contendo: nome, telefone e
cidade. Após o cadastro, exibir todos os contatos formatados no terminal. */

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const contatos = []
let pessoa = {
    nome: '',
    telefone: '',
    cidade: '',
}

function adicionandoContatos(){
    rl.question('\nPara cadastrar um contato primeiro digite, Nome: \n', inputNome =>{
        const nome = inputNome.trim()
        rl.question('Para cadastrar um contato digite, numero de telefone: \n', inputTelefone =>{
            const telefone = inputTelefone.trim()
            rl.question('Para cadastrar um contato digite, cidade: \n', inputCidade =>{
                const cidade = inputCidade.trim()
                pessoa.nome = nome
                pessoa.telefone = telefone
                pessoa.cidade = cidade
                contatos.push(pessoa)
                if (contatos.length > 2){
                    contatos.forEach(lista => console.log(`\nNome: ${lista.nome} -- Telefone: ${lista.telefone} -- Cidade: ${lista.cidade}`))
                    rl.close()
                    
                }else {
                adicionandoContatos() 
                }
            })
        })
    })
}

adicionandoContatos()