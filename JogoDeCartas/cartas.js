/**
 * EXEMPLO DE ARRAY 
 * JOGO DE CARTAS 
 *  @author VANESSA
 */


 let faces = ['A', '2' , '3' , '4', '5' , '6', '7', '8' , '9', '10', 'j', 'Q', 'K' ]
 let nipes = ['♦' , '♠', '♥', '♣' ]
 let f = faces[Math.floor(Math.random()* 13)]
 let n = nipes[Math.floor(Math.random()* 4)]

 document.write('<h1>' + f + n + '</h1>')