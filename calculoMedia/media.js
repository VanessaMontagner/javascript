/**
 * Cálculo da Média
 * @author Vanessa
 */

// Variaveis Globais

let nota1, nota2, media

function calcular() {
    nota1 = Number(frmMedia.textNota1.value.replace(",", "."));
    nota2 = Number(frmMedia.textNota2.value.replace(",", "."));
    media = (nota1 + nota2) / 2
    frmMedia.textMedia.value = media.toFixed(2)
    if (media < 5) {
        frmMedia.txtStatus.value = 'Reprovado'
    } else {
        frmMedia.txtStatus.value = 'Aprovado'
    }


}

