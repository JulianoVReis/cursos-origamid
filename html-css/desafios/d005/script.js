// 1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
// 2 - No corpo da função:
//  2.1 - Transforme o nome para letra maiúscula: toUpperCase()
//  2.2 - Calcule o total de anos desde o lançamento do livro: 2050 - ano
//  2.3 - Crie uma variável com a frase: nome + ' por ' + autor;
//  2.4 - Coloque os 3 valores acima em um objeto.
// 3 - Retorne (return) o objeto definido.
// 4 - Execute a função com os seguintes argumentos:
//     'O Senhor dos Anéis', 1954, 'J. R. R. Tolkien'
// 5 - Guarde o retorno da função executada em uma variável.
// 6 - Log a frase final da função executada no console.

function livro(nome, ano, autor) {
	let nomeMai = nome.toUpperCase()
	let anoTotal = ano - 2050
	let frase = nome + ' por ' + autor
	let obj = {
		nome: nomeMai,
		anoTotal,
		frase
	}
	return obj
}

let livro2 = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')
console.log(livro2.frase)