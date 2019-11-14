/**
 * EXEMPLO DE USO DO LAÇO FOR
 * @author VANESSA
 */

//  let valor=8

//  for(let i=1; i <= 10; i++){
//      document.write(valor + ' x ' + i + ' = ' + (valor * i) + '<br>')
//  }


for(let i=1; i <= 10; i++){
    document.write('<p> Tabuada do ' + i + ' </p>')
    for(let j = 1; j <=10; j++){
        document.write( i + ' x ' + j + ' = ' +  (i * j) + '<br>')
    } 
}
