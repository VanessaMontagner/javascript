/**
 * JOKENPO 
 * @author Vanessa
 */


function jogar() {
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
    } else if (document.getElementById('papel').checked === true) {
        document.getElementById('resultado').innerText = 'pa'
    } else if (document.getElementById('tesoura').checked === true) {
        document.getElementById('resultado').innerText = 'ganhou'
    }


}




function resetar(){
    document.getElementById('pc').src='pc.png'
}
