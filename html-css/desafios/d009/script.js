// 1 - Lista de imagens (li img) e a imagem principal.
//   1.1 Como selecionar uma lista de itens?
//   1.2 Como selecionar um item?

// 2 - Clique em um dos itens da lista.
//   2.1 Como adicionar um evento de click a uma lista de itens?

// 3 - Precisamos do url do item clicado.
//   3.1 Como pegar o url de um elemento?

// 4 - Precisamos alterar o url da imagem principal.
//   4.1 Como alterar o url de um elemento?

let imagens = document.querySelectorAll('#galeria li img')

function galClick(imagem) {
	imagem.addEventListener('click', galTroca)
}

function galTroca(event) {
	let imgPrincipal = document.querySelector('#img-principal')
	let imgClicada = event.currentTarget
	imgPrincipal.src = imgClicada.src
	imgPrincipal.alt = imgClicada.alt
}

imagens.forEach(galClick)