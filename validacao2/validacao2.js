/**
 * Validação de formulario com plugin
 * @author Vanessa
 * 
 */

$(document).ready(function(){
    $('#frmcadastro').validate({
        rules:{
            nome:{
                required: true,
                minlength: 4
            },
            email: {
                required:true,
                email:true
            },
            senha:{
                required: true,
            },
            senhaConfirmacao:{
                required: true,
                equalTo: senha
            },
            termos:{
                required: true
            }
        },
        messages:{
            nome:{
                required: " Digite o Nome ", 
                minlength: " Nome Incorreto "
            },
            email:{
                required: "Campo de Email Vazio",
                email: " email invalido"
            },
            senha:{
                required: "Infome uma Senha"
            },
            senhaConfirmacao:{
                required: "Não está correta",
                equalTo:"Não está igual"
            },
            termos:{
                required: "Campo Obrigatório"
            }
        }
    })

})