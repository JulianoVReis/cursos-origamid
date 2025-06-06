// 1 - Adicione uma navegação (nav) com 3 links: ./, ./produto.html e ./contato.html
// 2 - Crie as páginas produto.html e contato.html com o mesmo html de index.html
// 3 - Selecione os links na navegação.
// 4 - Para cada link execute uma função (ativarLink);
// 5 - Na função, extraia o href do elemento.
// 6 - Verifique se o href é igual ao URL da página (document.location.href)
// 7 - Se for igual mude o backgroundColor para black e a color para white do link.

let links = document.querySelectorAll('nav a')

function ativarLink(link) {
	let href = link.href
	let url = document.location.href

	if (href === url) {
		link.style.color = 'white'
		link.style.backgroundColor = 'black'
	}
}

links.forEach(ativarLink)