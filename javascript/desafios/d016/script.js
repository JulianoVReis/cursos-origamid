// Duplique o menu e adicione ele em copy
let menu = document.querySelector('.menu')
let copy = document.querySelector('.copy')
let menuDup = menu.cloneNode(true)

copy.appendChild(menuDup)
// Selecione o primeiro DT da dl de Faq
let faq = document.querySelector('.faq')
let primeiroDt = faq.querySelector('dt')
// Selecione o DD referente ao primeiro DT
let ddRef = primeiroDt.nextElementSibling

console.log(ddRef)
// Substitua o conteúdo html de .faq pelo de .animais
let animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML