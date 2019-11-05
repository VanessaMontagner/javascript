/*
 * Estudo do DOM
 * Estudo de parametros 
 * @author Vanessa
 */

/*
// Sem Passagem de Parâmetros
function ligar() {
   document.getElementById('lamp').src = 'on.jpg'
}

function desligar() {
   document.getElementById('lamp').src = 'off.jpg'
}
*/

// Com Passagem de Parâmetros 
let recebe

function controlar(recebe) {
    if (recebe == 1) {
        document.getElementById('lamp').src = 'on.jpg'
    } else {
        document.getElementById('lamp').src = 'off.jpg'
    }

}