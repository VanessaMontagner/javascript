/** 
 * Fade para destacar uma imagem
 * exemplo do jquery com estrutura de funções if e else
 * @author Vanessa 
 * 
*/

$(document).ready(function(){
    $('ul.Destaque li img').hover (function(){
      //verdadeiro	
      $('ul.Destaque li img').not(this).stop().fadeTo(40,0.5)	
    },function(){
      //falso
      $('ul.Destaque li img').stop().fadeTo(40,1)	
    })
  })