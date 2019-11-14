/**
 * Eleição
 * @author Vanessa
 */

let idade

function verificar() {
    idade = Number(frmEleitor.txtIdade.value)

    if (idade < 16) {
        alert('Não Pode Votar')
    } else if (idade >= 18 && idade <= 70) {
        alert('Pode Votar')
    } else {
        alert('Facultativo')
    }

}