/**
 * JOKENPO 
 * @author Vanessa
 */


function jogar() {
    // VALIDAÇÃO RADIO BUTTONS
    if ((document.getElementById('pedra').checked === false) && (document.getElementById('papel').checked === false) && (document.getElementById('tesoura').checked === false)) {
        alert ('Selecione Uma Opção')
    } else {
        let sorteio = Math.floor(Math.random() * 3) + 1

        switch (sorteio) {
            case 1:
                document.getElementById('pc').src = 'pcpedra.png'
                break

            case 2:
                document.getElementById('pc').src = 'pcpapel.png'
                break

            case 3:
                document.getElementById('pc').src = 'pctesoura.png'
                break
        }



        if (((document.getElementById('pedra').checked === true && sorteio === 1) || document.getElementById('papel').checked === true && sorteio === 2) || document.getElementById('tesoura').checked === true && sorteio === 3) {
            document.getElementById('resultado').innerText = 'EMPATE'
        } else if (((document.getElementById('pedra').checked === true && sorteio === 3) || document.getElementById('papel').checked === true && sorteio === 1) || document.getElementById('tesoura').checked === true && sorteio === 2) {
            document.getElementById('resultado').innerText = 'GANHOU'
        } else {
            document.getElementById('resultado').innerText = 'PERDEU'
        }

    }

}

function resetar() {
    document.getElementById('pc').src = 'pc.png'
    document.getElementById('resultado').innerText = ''
}



