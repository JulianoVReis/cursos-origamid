// Retorne no console todas as imagens do site
let todasImgs = document.querySelectorAll('img')
console.log(todasImgs)
// Retorne no console apenas as imagens que começaram com a palavra imagem
let imagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagem)
// Selecione todos os links internos (onde o href começa com #)
let linkInt = document.querySelectorAll('[href^="#"]')
console.log(linkInt)
// Selecione o primeiro h2 dentro de .animais-descricao
let primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)
// Selecione o último p do site
let ultimoP = document.querySelector('.copy p')
console.log(ultimoP)