/**
 * Validador de  formulario simples com array
 * @author Vanessa
 * 
 */

 function validacao(){
     let formulario = document.forms.frmCadastro
     let nome = formulario.txtnome.value 
     let cpf = formulario.txtcpf.value
     let sexo = formulario.sexo.value
     let perfil = formulario.txtperfil.value
     let erro = false
     if(nome.indexOf(' ') === -1){
         alert('Preencha seu nome completo')
         erro = true
     }

     if(cpf.length != 11){
        alert('CPF Invalido')
        erro = true
    }

    if(perfil.length < 20){
        alert('Digite no minimo 20 caracteres')
        erro = true
    }
   
    if(erro === true){
        return false
    } else{
        return true
    }
    

     

 }
