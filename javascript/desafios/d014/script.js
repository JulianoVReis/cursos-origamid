// Verifique a distância da primeira imagem
// em relação ao topo da página
let img = document.querySelector('img')
let imgDis = img.offsetTop

console.log(imgDis)
// Retorne a soma da largura de todas as imagens
function somaDasImagens() {
	let imgs = document.querySelectorAll('img')
	let soma = 0
	imgs.forEach((imagem) => {
		soma += imagem.offsetWidth
		console.log(imagem.offsetWidth)
})
console.log(soma)
}

window.onload = function() {
	somaDasImagens()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
let links = document.querySelectorAll('a')

links.forEach((link) => {
	let linkWidth = link.offsetWidth
	let linkHeight = link.offsetHeight
	if (linkWidth >= 48 && linkWidth >= 48) {
		console.log('link', 'Possui boa acessibilidade')
	} else {
		console.log('link', 'Não possui boa acessibilidade')
	}
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
let browserSmall = window.matchMedia('(max-width: 720px)').matches

if (browserSmall) {
	let menu = document.querySelector('.menu')
	menu.classList.add('menu-mobile')
}