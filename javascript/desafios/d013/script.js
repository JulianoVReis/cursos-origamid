// Adicione a classe ativo a todos os itens do menu
let menu = document.querySelectorAll('.menu a')

menu.forEach((item) => {
	item.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
	item.classList.remove('ativo')
})

menu[0].classList('ativo')
// Verifique se as imagens possuem o atributo alt
let temAlt = document.querySelectorAll('img')
console.log(temAlt)

temAlt.forEach((img) => {
	let imgAtributo = img.hasAttribute('alt')
	console.log(img, imgAtributo)
})
// Modifique o href do link externo no menu
let linkExt = document.querySelector('a[href^="http"]')
linkExt.setAttribute('href', 'https://www.google.com/')

console.log(linkExt)