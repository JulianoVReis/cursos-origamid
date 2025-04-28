// 1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999;
// 2 - Adicione ao window uma função que ocorre ao "mousemove";
// 3 - Na função mude as propriedades top e left do círculo com base no mouse.
// 4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente.

let circulo = document.querySelector('.circulo')

window.addEventListener('mousemove', segueSeta)

function segueSeta(event) {
	circulo.style.top = event.y + 'px'
	circulo.style.left = event.x + 'px'
}