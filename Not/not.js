/**
 * Trabalhando com o NOT
 * @author Vanessa
 */

let broken = false
//broken false = nao esta quebrado
//broken true = est quebrado
let sw1 =  true // Variavel de apoio a troca da chave
// true = chave desligada
// false = chave ligada

function sw(receive) {
    //status da chave
    
    if (receive == 1 && sw1 == true) {
        document.getElementById('sw1').src = "swon.png"
        sw1 = false
    } else if (receive == 1 && sw1 == false)  {
        document.getElementById('sw1').src = "swoff.png"
        sw1 = true
    }

    if(receive == 2){
        document.getElementById('lamp').src = 'broken.jpg'
        broken = true;
    }
    //Ligando a lampada
    // !sw1  /  sw1 == false
    if (broken == false) {
        if (!sw1) {
            document.getElementById('lamp').src = 'on.jpg'
        } else {
            document.getElementById('lamp').src = 'off.jpg'
        }
    }

}
