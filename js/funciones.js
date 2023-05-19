//

$(document).ready(function() {
    
    let expr = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;  
    let exprLetras= /^[a-zA-Z]+$/;
    let exprLetYnum= /^[0-9a-zA-Z]+$/;
    let exprContrasenia =/^([a-zA-Z]{2,}|[0-9]{2,}|[#$%&@._-]{2,}).{6,}$/;
    let exprPinTarjeta = /^[0-9]{3}$/;
    let exprTarjeta = /^[0-9]{16,19}$/;

    let usuarioReg = "";
    let claveTarjeta = "";
    
    
    
    /////////// recuperar contrasenia -vista recuperar contrasenia./////////////
    $("#email_rec_pass").keyup(function(){
        let email_rec = $("#email_rec_pass").val();
        let usuario_rec = $("#usuario_rec_pass").val();

        if (expr.test(email_rec)){
            $("#mensajeMail").fadeOut();

        }else{
            $("#mensajeMail").fadeIn();
        }

        if(expr.test(email_rec) && usuario_rec!= ""){
            $("#enviar_email").prop("disabled", false);
            $("#mensajeCampos").fadeOut();
        }
        
    });

    $("#usuario_rec_pass").keyup(function(){
        let email_rec = $("#email_rec_pass").val();
        let usuario_rec = $("#usuario_rec_pass").val();

    
        if (usuario_rec!=""){
            $("#mensajeUsuario").fadeOut();
            
        }else{
            $("#mensajeUsuario").fadeIn();

        }

        if(expr.test(email_rec) && usuario_rec!= ""){
            $("#enviar_email").prop("disabled", false);
            $("#mensajeCampos").fadeOut();

        }
    });

    /////////// registrodeusuario -vista registro usuario.///////////////
    $("#nombreRegitro").keyup(function(){
        let nombreRegitro= $("#nombreRegitro").val();

        if (exprLetras.test(nombreRegitro)){
            $("#mensajeNombreRegitro").fadeOut();

        }else{
            $("#mensajeNombreRegitro").fadeIn(); 
        }
        
        if (nombreRegitro !="" && apellidoRegitro !="" && emailRegitro !="" && usuarioReg !=""
        && passRegistro !="" && passRegistroRep !="" && claveTarjeta !="" && cod_tarjeta !="" ) {
           $("#confirmar").prop("disabled", false);
           $("#msjConfirmar").fadeOut();
                }

    })

    $("#apellidoRegitro").keyup(function(){
        let apellidoRegitro= $("#apellidoRegitro").val();

        if (exprLetras.test(apellidoRegitro)){
            $("#mensajeApellidoRegitro").fadeOut();

        }else{
            $("#mensajeApellidoRegitro").fadeIn(); 
        }

        if (nombreRegitro !="" && apellidoRegitro !="" && emailRegitro !="" && usuarioReg !=""
        && passRegistro !="" && passRegistroRep !="" && claveTarjeta !="" && cod_tarjeta !="" ) {
           $("#confirmar").prop("disabled", false);
           $("#msjConfirmar").fadeOut();
                }
        
    })

    $("#emailRegitro").keyup(function(){
        let emailRegitro= $("#emailRegitro").val();

        if (expr.test(emailRegitro)){
             $("#mensajeEmailRegitro").fadeOut();

        }else{
            $("#mensajeEmailRegitro").fadeIn();
        }

        if (nombreRegitro !="" && apellidoRegitro !="" && emailRegitro !="" && usuarioReg !=""
        && passRegistro !="" && passRegistroRep !="" && claveTarjeta !="" && cod_tarjeta !="" ) {
           $("#confirmar").prop("disabled", false);
           $("#msjConfirmar").fadeOut();
                }
    })

    $("#usuarioRegistro").keyup(function(){
        usuarioReg= $("#usuarioRegistro").val();

        if (exprLetYnum.test(usuarioReg)){
            $("#mensajeUsuarioRegitro").fadeOut();

        }else{
            $("#mensajeUsuarioRegitro").fadeIn(); 
        }

        if (nombreRegitro !="" && apellidoRegitro !="" && emailRegitro !="" && usuarioReg !=""
        && passRegistro !="" && passRegistroRep !="" && claveTarjeta !="" && cod_tarjeta !="" ) {
           $("#confirmar").prop("disabled", false);
           $("#msjConfirmar").fadeOut();
                }


    })

    $("#passRegistro").keyup(function(){
        let passRegistro= $("#passRegistro").val();

        
        if (exprContrasenia.test(passRegistro)){
            $("#mensajePassRegitro").fadeOut();

        }else{
            $("#mensajePassRegitro").fadeIn(); 
        }

        if (nombreRegitro !="" && apellidoRegitro !="" && emailRegitro !="" && usuarioReg !=""
        && passRegistro !="" && passRegistroRep !="" && claveTarjeta !="" && cod_tarjeta !="" ) {
           $("#confirmar").prop("disabled", false);
           $("#msjConfirmar").fadeOut();
                }
    
    })


    $("#passRegistroRep").keyup(function(){
        let passRegistroRep = $("#passRegistroRep").val();
        let passRegistro = $("#passRegistro").val();
        
        if (passRegistroRep==passRegistro){
            $("#mensajepassRegRep").fadeOut();

        }else{
            $("#mensajepassRegRep").fadeIn(); 
        }

        if (nombreRegitro !="" && apellidoRegitro !="" && emailRegitro !="" && usuarioReg !=""
        && passRegistro !="" && passRegistroRep !="" && claveTarjeta !="" && cod_tarjeta !="" ) {
           $("#confirmar").prop("disabled", false);
           $("#msjConfirmar").fadeOut();
                }
    
    })

    $("#clave_tarjeta").keyup(function(){
        claveTarjeta= $("#clave_tarjeta").val();
        
        if (exprPinTarjeta.test(claveTarjeta) && claveTarjeta != 000){
            $("#mensajeClave").fadeOut();

        }else{
            $("#mensajeClave").fadeIn(); 
        }

        if (nombreRegitro !="" && apellidoRegitro !="" && emailRegitro !="" && usuarioReg !=""
        && passRegistro !="" && passRegistroRep !="" && claveTarjeta !="" && cod_tarjeta !="" ) {
           $("#confirmar").prop("disabled", false);
           $("#msjConfirmar").fadeOut();
                }
        
    
    })

    $("#cod_tarjeta").keyup(function(){
     let cod_tarjeta= $("#cod_tarjeta").val();
      
        if (exprTarjeta.test(cod_tarjeta)){
            $("#mensajeTarjeta").fadeOut();
        

            let ultimoNumero = cod_tarjeta % 10;

            console.log(ultimoNumero);
            let primerosNumeros = cod_tarjeta.slice(0,-1);
            primerosNumeros = primerosNumeros.split("");
            let resultado = 0
            let numero=0;
            for(let i=0;i<primerosNumeros.length;i++){
                numero = parseInt(primerosNumeros[i]);
                resultado+=numero;
            }

            if(resultado%2==0){
                if(ultimoNumero%2==0){
                  $("#mensajeTarjeta2").fadeIn();
                } 
            }else if(resultado%2!=0){
                if(ultimoNumero%2!=0){
                 $("#mensajeTarjeta2").fadeIn();
                }
            }

        }else{
            
            $("#mensajeTarjeta").fadeIn(); 
        }
     
        if (nombreRegitro !="" && apellidoRegitro !="" && emailRegitro !="" && usuarioReg !=""
         && passRegistro !="" && passRegistroRep !="" && claveTarjeta !="" && cod_tarjeta !="" ) 
        {
            $("#confirmar").prop("disabled", false);
            $("#msjConfirmar").fadeOut();
        }
        
    
    })
 
    $("#perfilNombreUsuario").text(localStorage.getItem("usuario"));
     console.log(localStorage.getItem("usuario"));   

 ////////////  vista perfil   /////////////////

 $("#mailPerfil").keyup(function(){
    let emailPerfil= $("#mailPerfil").val();

    if (expr.test(emailPerfil)){
         $("#msjmailPerfil").fadeOut();

    }else{
        $("#msjmailPerfil").fadeIn();
    }

    if ( passPerfil!="" &&  contraPerfRep!="" ) 
    {
        $("#botonGuardar").prop("disabled", false);
    
    }

   
    })

    $("#passPerfil").keyup(function(){
    let passPerfil= $("#passPerfil").val();

    
    if (exprContrasenia.test(passPerfil)){
        $("#msjPassPerfil").fadeOut();

    }else{
        $("#msjPassPerfil").fadeIn(); 
    }

    if ( passPerfil!="" &&  contraPerfRep!="" ) 
    {
        $("#botonGuardar").prop("disabled", false);
    
    }

    })


    $("#passPerfilRep").keyup(function(){
    let contraPerfRep= $("#passPerfilRep").val();
    let passPerfil= $("#passPerfil").val();
    
    if (contraPerfRep==passPerfil){
        $("#mensajepassRegRep").fadeOut();

    }else{
        $("#mensajepassRegRep").fadeIn(); 
    }

    if ( passPerfil!="" &&  contraPerfRep!="" ) 
    {
        $("#botonGuardar").prop("disabled", false);
    
    }
    })

   
    $("input[name='met_pago']").click(function () {

    if ($("#radioTarjeta").is(":checked")) {

        $("#TarjetaPerfil").keyup(function(){
            let tarjetaPerfil= $("#TarjetaPerfil").val();
           
               if (exprTarjeta.test(tarjetaPerfil)){
                   $("#msjTarjeraPerfil").fadeOut();
               console.log("hola");
       
                   let ultimoNumero = tarjetaPerfil % 10;
       
                   console.log(ultimoNumero);
                   let primerosNumeros = tarjetaPerfil.slice(0,-1);
                   primerosNumeros = primerosNumeros.split("");
                   let resultado = 0
                   let numero=0;
                   for(let i=0;i<primerosNumeros.length;i++){
                       numero = parseInt(primerosNumeros[i]);
                       resultado+=numero;
                   }
       
                   if(resultado%2==0){
                       if(ultimoNumero%2==0){
                         $("#msjTarjetaPerfil2").fadeIn();
                       } 
                   }else if(resultado%2!=0){
                       if(ultimoNumero%2!=0){
                        $("#msjTarjetaPerfil2").fadeIn();
                       }
                   }
       
               }else{
                   
                   $("#msjTarjeraPerfil").fadeIn(); 
               }
            
               if ( passPerfil!="" &&  contraPerfRep!="" ) 
               {
                   $("#botonGuardar").prop("disabled", false);
               
               }  
           
           })

           $("#xx").keyup(function(){
            let pinPerfil= $("#xx").val();
            
            if (exprPinTarjeta.test(pinPerfil) && pinPerfil != 000){
                $("#msjpinPerfil").fadeOut();
    
            }else{
                $("#msjpinPerfil").fadeIn(); 
            }
    
            if ( passPerfil!="" &&  contraPerfRep!="" ) 
           {
               $("#botonGuardar").prop("disabled", false);
              
           }
        
        }) 

    }
    });


    //inicio -vista login.

    function datosInicio() {
    let usuario = document.getElementById("usuario").value;

    let contrasenia = document.getElementById("contrasenia").value;

    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("contrasenia", JSON.stringify(contrasenia));

    }


    $("#usuario").keyup(function(){
    let usuarioI = $("#usuario").val();


    if (usuarioI!=""){
        $("#msjInicioUsuario").fadeOut();
        
    }else{
        $("#msjInicioUsuario").fadeIn();

    }


    });

   
    $("#contrasenia").keyup(function(){
    let contraseniI = $("#contrasenia").val();


    if (contraseniI!=""){
        $("#msjInicioContra").fadeOut();
        
    }else{
        $("#msjInicioContra").fadeIn();

    }

    


    });

 // COMBO DE TEMPORADAS Y CAPITULOS DE SERIES
 let value1=[1,2,3,4,5,6,7];
 let value2=[1,2,3,4,5,6,7,8,9,10];
 let value3=[1,2,3,4,5,6,7,8,9,10];
 let value4=[1,2,3,4,5,6,7,8,9,10,11,12,13];
 let value5=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 let value6=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 let value7=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 let value8=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 let value9=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,];
 let value10=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 let value11=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

    $("#temporada").change(function(){
        let inicial= $(this).val();
        $("#capitulo").empty();
        switch(inicial){
         case"1":
                for (i in value1) {
                 $("#capitulo").append("<option value="+i+">"+value1[i]+"</option>");
                }
            break;

            case "2":
             for (i in value2){
                 $("#capitulo").append("<option value="+i+">"+value2[i]+"</option>");
                }
            break;

         case "3":
            for (i in value3){
                $("#capitulo").append("<option value="+i+">"+value3[i]+"</option>");
                }
            break;

         case "4":
            for (i in value4){
                $("#capitulo").append("<option value="+i+">"+value4[i]+"</option>");
                }
            break;

         case "5":
            for (i in value5){
                $("#capitulo").append("<option value="+i+">"+value5[i]+"</option>");
                }
            break;

            case "6":
                for (i in value6){
                    $("#capitulo").append("<option value="+i+">"+value6[i]+"</option>");
                    }
             break;

                case "7":
                for (i in value7){
                $("#capitulo").append("<option value="+i+">"+value7[i]+"</option>");
                }
         break;

            case "8":
            for (i in value8){
                $("#capitulo").append("<option value="+i+">"+value8[i]+"</option>");
                }
            break;

            case "9":
            for (i in value9){
                $("#capitulo").append("<option value="+i+">"+value9[i]+"</option>");
                }
            break;

            case "10":
            for (i in value10){
                $("#capitulo").append("<option value="+i+">"+value10[i]+"</option>");
                }
            break;

            case "11":
            for (i in value11){
                $("#capitulo").append("<option value="+i+">"+value11[i]+"</option>");
                }
            break;

    }

 });
  // FILTRO EN SERIES PELICULAS
 $("#filtro").change(function(){
    let filtro= $(this).val()
    if(filtro == "1"){
        $("#aplicar").click(function(){
            $("#anne").hide(); 
            $("#breaking").hide();
            $("#games").hide();
            $("#walking").hide();
            $("#chicas").hide();
            $("#anabelle").hide();
            $("#shrek").hide();
            $("#harry").hide();
            $("#black").hide();
            $("#jungle").hide();
            $("#rey").hide();

        })
    }
    if(filtro == "2"){
        $("#aplicar").click(function(){
            $("#breaking").hide()
            $("#games").hide()
            $("#mirror").hide()
            $("#shrek").hide()
            $("#harry").hide()
            $("#jungle").hide()
            $("#rey").hide()
            $("#black").hide();
            $("#cindi").hide();
           
        })
    }

    if(filtro == "3"){
        $("#aplicar").click(function(){
            $("#anne").hide();
            $("#chicas").hide();
            $("#casa").hide();
            $("#mirror").hide()
            $("#shrek").hide();
            $("#cindi").hide();
            $("#coco").hide();
            $("#encanto").hide();
        })
    }

});
// CATEGORIAS DE SERIES Y PELIS EN EL HOME
    $("#categ").change(function() {
    let categorias= $(this).val()
    if (categorias == "1") {
        $("#anne").show();
        $("#breaking").show();
        $("#games").show();
        $("#papel").show();
        $("#umbrella").show();
        $("#walking").show();
        $("#anabell").show();
        $("#cindirella").show();
        $("#shrek").show();
        $("#coco").show();
        $("#encanto").show();
        $("#hp").show();

    }
    if (categorias == "2") {
        $("#anne").hide();
        $("#papel").hide();
        $("#umbrella").hide();
        $("#cindirella").hide();
        $("#coco").hide();
        $("#encanto").hide();
        $("#shrek").hide();
        $("#breaking").hide();
        $("#games").show();
        $("#anabell").show();
    }
    if (categorias == "3") {
        $("#anne").hide();
        $("#papel").hide();
        $("#umbrella").hide();
        $("#cindirella").hide();
        $("#breaking").hide();
        $("#games").hide();
        $("#walking").hide();
        $("#anabell").hide();
        $("#cindirella").hide();
        $("#hp").hide();
        $("#shrek").show();
        $("#coco").show();
        $("#encanto").show();
        
    }
    if (categorias == "4") {
        $("#anne").hide();
        $("#umbrella").hide();
        $("#cindirella").hide();
        $("#coco").hide();
        $("#encanto").hide();
        $("#shrek").hide();
        $("#breaking").show();
        $("#games").show();
        $("#walking").show();
        $("#anabell").show();
        $("#hp").show();
    }
    if (categorias == "5") {
        $("#anabell").hide();
        $("#shrek").hide();
        $("#coco").hide();
        $("#encanto").hide();
        $("#anne").show();
        $("#breaking").show();
        $("#games").show();
        $("#papel").show();
        $("#umbrella").show();
        $("#walking").show();
        $("#anabell").show();
        $("#cindirella").show();
        $("#hp").show();
    }

    });

    $('.slider').slick();

});// *********************FIN***************

// CATEGORIAS DE SERIES Y PELIS EN EL HOME

/*let categorias = document.getElementById("categ");

categorias.onchange=function(){
    document.getElementById("anne").style.display="block";
    document.getElementById("breaking").style.display="block";
    document.getElementById("games").style.display="block";
    document.getElementById("papel").style.display="block";
    document.getElementById("umbrella").style.display="block";
    document.getElementById("walking").style.display="block";
    document.getElementById("anabell").style.display="block";
    document.getElementById("cindirella").style.display="block";
    document.getElementById("coco").style.display="block";
    document.getElementById("encanto").style.display="block";
    document.getElementById("shrek").style.display="block";
    document.getElementById("hp").style.display="block";

    if(categ.value == "Terror"){
        document.getElementById("anne").style.display="none";
        document.getElementById("games").style.display="none";
        document.getElementById("papel").style.display="none";
        document.getElementById("umbrella").style.display="none";
        document.getElementById("cindirella").style.display="none";
        document.getElementById("coco").style.display="none";
        document.getElementById("encanto").style.display="none";
        document.getElementById("shrek").style.display="none";
        document.getElementById("hp").style.display="none";
    }

    if(categ.value == "Animada"){
        document.getElementById("anne").style.display="none";
        document.getElementById("breaking").style.display="none";
        document.getElementById("games").style.display="none";
        document.getElementById("papel").style.display="none";
        document.getElementById("umbrella").style.display="none";
        document.getElementById("walking").style.display="none";
        document.getElementById("anabell").style.display="none";
        document.getElementById("hp").style.display="none";

    }

    if(categ.value == "Suspenso"){
        document.getElementById("anne").style.display="none";
        document.getElementById("breaking").style.display="none";
        document.getElementById("anabell").style.display="none";
        document.getElementById("cindirella").style.display="none";
        document.getElementById("coco").style.display="none";
        document.getElementById("encanto").style.display="none";
        document.getElementById("shrek").style.display="none";
        document.getElementById("hp").style.display="none";
    }

    if(categ.value == "Ciencia_Ficcion"){
        document.getElementById("breaking").style.display="none";
        document.getElementById("games").style.display="none";
        document.getElementById("papel").style.display="none";
        document.getElementById("anabell").style.display="none";
        document.getElementById("cindirella").style.display="none";
        document.getElementById("coco").style.display="none";
        document.getElementById("encanto").style.display="none";
        document.getElementById("shrek").style.display="none";


    }
};*/
    // BUSQUEDA DE P Y S EN EL HOME

    
    




























    





