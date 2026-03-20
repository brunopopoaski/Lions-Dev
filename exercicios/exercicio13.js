const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let tentativaAno = 0

const biblia = {
    nome: 'Bíblia Sagrada',
    autor: 'Vários autores',
    ano: 0,
    conteudo: 'Religião'
}
const harryPotter = {
    nome: 'Harry Potter',
    autor: 'Rowling',
    ano: 1997,
    conteudo: 'Fantasia'
}
const oSenhorDosAnéis = {
    nome: 'O Senhor dos Anéis',
    autor: 'Tolkien',
    ano: 1954,
    conteudo: 'Fantasia'
}

const listaLivros = [biblia, harryPotter, oSenhorDosAnéis]

function excluirLivro() {
    let listaExclusao = listarLivros()
    rl.question(`Digite o nome do livro que deseja excluir da lista a seguir:\n`, (input) => {
        const nomeLivro = input.trim()
        const indice = listaLivros.findIndex(livro => livro.nome === nomeLivro)
        if (indice !== -1) {
            listaLivros.splice(indice, 1)
            console.log('Livro excluído com sucesso!')
        } else {
            console.log('Livro não encontrado na biblioteca.')
        }
        iniciar()
    })
}


function listarLivros() {
    console.log('\nLivros cadastrados na biblioteca:')
    listaLivros.forEach(livro => console.log(`\n Nome: ${livro.nome}  - Autor: ${livro.autor}  - Ano de publicação: ${livro.ano}  - Conteúdo: ${livro.conteudo}\n`))

}

function buscarLivro() {
    rl.question('Digite o nome do livro que deseja buscar: ', (input) => {
        const nomeLivro = input.trim()
        const busca = listaLivros.find(livro => livro.nome === nomeLivro)
        if (busca) {
            console.log(`Livro encontrado:\n Nome: ${busca.nome}  - Autor: ${busca.autor}  - Ano de publicação: ${busca.ano}  - Conteúdo: ${busca.conteudo}\n`)
        } else {
            console.log('Livro não encontrado na biblioteca.')
            iniciar()
        }
    })}

function iniciar() {

    rl.question('\nDigite o opção desejada:\n "cadastrar"\n "listar"\n "buscar"\n "excluir"\n "exit"\n', (input) => {
        if (input.toLowerCase() === 'cadastrar') {
            cadastrarLivro()
        }
        else if (input.toLowerCase() === 'listar') {
            listarLivros()
            iniciar()
        } else if (input.toLowerCase() === 'buscar') {
            buscarLivro()
        } else if (input.toLowerCase() === 'excluir') {
            excluirLivro()
        } else if (input.toLowerCase() === 'exit') {
            rl.close()
        } else {
            console.log('Opção inválida. Por favor, escolha uma opção válida.')
            iniciar()
        }
})
}


function cadastrarLivro(nome, autor, ano, conteudo) {
    rl.question('Digite o nome do livro: ', (inputNome) => {
        const nome = inputNome.trim()
        rl.question('Digite o autor do livro: ', (inputAutor) => {
            const autor = inputAutor.trim()
            rl.question('Digite o ano de publicação do livro: ', (inputAno) => {
                const ano = parseInt(inputAno)
                if (isNaN(ano)) {
                    if (tentativaAno < 3) {
                        console.log('Ano inválido. Por favor, digite um número válido para o ano de publicação.')
                        tentativaAno++
                    } else {
                        console.log('Número de tentativas excedido. Encerrando o programa.')
                        rl.close()
                    }
                }
                rl.question('Digite o tema do conteúdo do livro: ', (inputConteudo) => {
                    const conteudo = inputConteudo.trim()
                    const novoLivro = {
                        nome: nome,
                        autor: autor,
                        ano: ano,
                        conteudo: conteudo
                    }
                    listaLivros.push(novoLivro)
                    console.log('Livro cadastrado com sucesso!')
                    tentativaAno = 0
                    iniciar()
                })
            })
        })
    })
}



iniciar()