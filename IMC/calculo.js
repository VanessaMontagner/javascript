/**
 * Cálcular IMC
 * @author Vanessa
 */

 let altura, peso, calculo1, calculoCompleto

 function calcular() {
     altura = Number (imc.altura.value.replace(",","."))
     peso = Number (imc.peso.value.replace(",","."))
     calculo1 =  peso / (altura*altura)
     
     imc.calculoImc.value=calculo1.toFixed(2)

     
 }