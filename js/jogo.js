
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var contMosquito = 0

//Pegar o nível selecionado na pagina inicial
var criaMosquitoTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'normal') {
	criaMosquitoTempo = 1500
	}else if(nivel === 'dificil'){
		criaMosquitoTempo = 1000
		}else if(nivel === 'chucknorris'){
			criaMosquitoTempo = 750
		}
//Pega a altura e a largura da tela do navegador
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else {
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//Criar de forma aleatoria a imagem do mosquito em posições e tamanho diferentes
function posicaoRandomica() {


    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }else {
            document.getElementById('vida'+vidas).src="images/coracao_vazio.png"

            vidas++
        }

        
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'images/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
		this.remove()
		contMosquito++
		document.getElementById('contador').innerHTML = contMosquito
    }

	document.body.appendChild(mosquito)
}

/*
troca de forma aleatoria o tamanho do mosquito
*/
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

/*
troca de forma aleatoria o lado do mosquito
*/
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'
	}
}

