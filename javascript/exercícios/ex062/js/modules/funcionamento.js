export default class Funcionamento {
	constructor(funcionamento, activeClass) {
		this.funcionamento = document.querySelector(funcionamento)
		this.activeClass = activeClass
	}

	dadosFuncionamento() {
		this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
  	this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
	}

	dadosAgora() {
		this.dataAgora = new Date()
  	this.diaAgora = this.dataAgora.getDay()
  	this.horarioAgora = this.dataAgora.getUTCHours() - 3
	}

	estaAberto() {
		const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1
		const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] 
			&& this.horarioAgora < this.horarioSemana[1])
		return semanaAberto && horarioAberto
	}

	ativaAberto() {
		if (this.estaAberto()) {
			this.funcionamento.classList.add(this.activeClass)
		}
	}

	init() {
		if (this.funcionamento) {
			this.dadosFuncionamento()
			this.dadosAgora()
			this.ativaAberto()
		}
		return this
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