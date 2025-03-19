// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
let lis = document.querySelectorAll('li')

for(let li of lis) {
	li.classList.add('ativo')
}
// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for(let pvoWindow in window) {
	console.log(pvoWindow + ': ' + window[pvoWindow])
}