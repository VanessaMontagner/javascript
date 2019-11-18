/**
 * Painel de Vendas com Desconto em porcentagem
 * @author Vanessa
 */

let total, desconto, total1, pago, troco

function calcular() {
    total = Number (pdv.valor.value.replace(',','.'));
    desconto = Number (pdv.porcentagem.value.replace(',','.'))
    total1 =  (total * desconto ) / 100
    total2 = total - total1
    pdv.total.value= 'R$ ' + total2.toFixed(2)
    pago = Number (pdv.valorPago.value.replace(',','.'))
    troco = pago - total2
    pdv.troco.value= 'R$ ' + troco.toFixed(2)
    

    
}