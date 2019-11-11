/**
 * Cálcular IMC
 * @author Vanessa
 */

 let altura, peso, calculo1, calculo2

 function calcular() {
     altura = Number (imc.altura.value.replace(",","."))
     peso = Number (imc.peso.value.replace(",","."))
     calculo1 =  peso / (altura*altura)

     
     imc.calculoImc.value=calculo1.toFixed(2)

     if (calculo1 <17) {
        document.getElementById("status").src='imc1.png'
    } else if (calculo1 >17 && calculo1 <18.49){
        document.getElementById("status").src='imc2.png'
    } else if (calculo1 >18.5 && calculo1 <24,99){
        document.getElementById("status").src='imc3.png'
    } else if (calculo1 >25 && calculo1 <29.99){
        document.getElementById("status").src='imc4.png'
    } else if (calculo1 >30 && calculo1 <34.99){
        document.getElementById("status").src='imc5.png'
    } else if (calculo1 >35 && calculo1 <39.99){
        document.getElementById("status").src='imc6.png'
    } else if (calculo1 >40){
        document.getElementById("status").src='imc6.png'
    } 

 }