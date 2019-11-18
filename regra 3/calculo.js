/**
 * Calculo de regra de 3
 * @author Vanessa
 */

let n1, n2, resultado 

 function calcular(){
     n1= Number (frmRegra3.txtX.value.replace(',','.'))
     n2= Number (frmRegra3.txtY.value.replace(',','.'))

     

     resultado = (n2 * n1) / 100

     frmRegra3.txtResultado.value=resultado.toFixed(2) }
