export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]')
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()

  const teste = [1,2,3,4,5].indexOf(diaAgora)
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto')
  }
}

// const agora = new Date()
// const futuro = new Date('dec 24 2025 23:59')

// console.log(agora.getMonth())

// console.log(futuro)

// function trasnformarDias(tempo) {
// 	return tempo / (24 * 60 * 60 * 1000)
// }

// const diasAgora = trasnformarDias(agora.getTime())
// const diasFuturo = trasnformarDias(futuro.getTime())

// console.log(diasFuturo - diasAgora)