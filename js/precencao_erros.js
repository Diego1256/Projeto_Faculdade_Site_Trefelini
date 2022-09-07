
//Códigos para prevenir erros do campo de email do quem somos?

$(document).ready(function() {

$(".botao-enviar").click(function() {

if( $(".campo-textarea").val()==''){
//$(".botao-enviar").attr("disabled", true);                          
$(".feedback_mensagem").text('Falta preencher o campo mensagem');    
}else{
//$(".botao-enviar").attr("disabled", false);
$(".feedback_mensagem").text('');      
//$(".sucesso").css( "display", "block");
    
                         

}

});
});

$(document).ready(function() {

$(".botao-enviar").click(function() {

if($(".campo-email").val().indexOf(".com") == -1 ||
   $(".campo-email").val().indexOf(".br") == -1){
//$(".botao-enviar").attr("disabled", true);                          
$(".feedback_combr").text('Precisa colocar o ".com" ou o ".br".');    
}else{
//$(".botao-enviar").attr("disabled", false);
$(".feedback_combr").text('');     
//$(".sucesso").css( "display", "block");
}
    
});        
});

$(document).ready(function() {

$(".botao-enviar").click(function() {

if($(".campo-texto").val().indexOf("@") == -1) {
//$(".botao-enviar").attr("disabled", true);                          
$(".feedback_arroba").text('Precisa colocar o "@".');    
}else{
//$(".botao-enviar").attr("disabled", false);
$(".feedback_arroba").text('');     
//$(".sucesso").css( "display", "block");
}
    
});        
});   

$(document).ready(function() {

$(".botao-enviar").click(function() {

if($(".campo-texto").val().indexOf(".") == -1) {
//$(".botao-enviar").attr("disabled", true);                          
$(".feedback_ponto").text('Precisa colocar o ".".');    
}else{
//$(".botao-enviar").attr("disabled", false);
$(".feedback_ponto").text('');     
//$(".sucesso").css( "display", "block");
    
}

});
});



$(document).ready(function() {

$(".botao-enviar").click(function() {

if( $(".campo-textarea").val()=='' ||
   $(".campo-texto").val()=='' ||
  $(".campo-texto").val().indexOf(".") == -1 ||
  $(".campo-texto").val().indexOf("@") == -1){
//$(".botao-enviar").attr("disabled", true);                          
}else{
//$(".botao-enviar").attr("disabled", false);
$(".feedback_mensagem").text(''); 
$(".feedback_ponto").text('');   
$(".feedback_arroba").text('');     


$(".sucesso").css( "display", "block");
    
                         

}

});
});



$(".close").click(function(){
    $(".alert").css("display","none");
});

//Códigos para prevenir erros do campo de checkout

                  



$(document).ready(function() {

$(".botao_encomendar").click(function() {

if($(".email_checkout").val().indexOf(".com") == -1 ||
   $(".email_checkout").val().indexOf(".br") == -1){
//$(".botao-enviar").attr("disabled", true);                          
$(".feedback_combr").text('Precisa colocar o ".com" ou o ".br".');    
}else{

$(".feedback_combr").text('');     

}
    
});        
});

$(document).ready(function() {

$(".botao_encomendar").click(function() {

if($(".email_checkout").val().indexOf(".") == -1) {
                       
$(".feedback_ponto").text('Precisa colocar um "."');    
}else{

$(".feedback_ponto").text('');     

    
}

});
});

$(document).ready(function() {

$(".botao_encomendar").click(function() {

if($(".email_checkout").val().indexOf("@") == -1) {
                        
$(".feedback_arroba").text('Precisa colocar o "@".');    
}else{

$(".feedback_arroba").text('');     

}
    
});        
}); 

$(document).ready(function() {

$(".botao_encomendar").click(function() {

if($(".telefone").val()==''){ 
                         
$(".feedback_telefone").text('Falta preencher o campo telefone');    
}else{

$(".feedback_telefone").text('');     

}
    
});        
}); 

$(document).ready(function() {

$(".botao_encomendar").click(function() {

if($(".cep").val()==''){ 
                      
$(".feedback_cep").text('Falta preencher o campo cep');    
}else{

$(".feedback_cep").text('');     

}
    
});        
}); 
$(document).ready(function() {
$(".botao_encomendar").click(function() {

if($(".endereco").val()==''){ 
                        
$(".feedback_endereco").text('Falta preencher o campo endereço');    
}else{

$(".feedback_endereco").text('');     

}
    
});        
}); 

$(document).ready(function() {
$(".botao_encomendar").click(function() {

if($(".bairro").val()==''){ 
                         
$(".feedback_bairro").text('Falta preencher o campo bairro');    
}else{

$(".feedback_bairro").text('');     

}
    
});        
}); 

$(document).ready(function() {
$(".botao_encomendar").click(function() {

if($(".numero").val()==''){ 
                       
$(".feedback_numero").text('Falta preencher o campo número.');    
}else{

$(".feedback_numero").text('');     

}
    
});        
}); 


$(document).ready(function() {
$(".botao_encomendar").click(function() {

if(!$("input[name='inlineRadioOptions']:checked").val()){ 
                       
$(".feedback_radio").text('Falta preencher o campo Forma de pagamento');    
}else{

$(".feedback_radio").text('');     

}
    
});        
}); 

$(document).ready(function() {
$(".botao_encomendar").click(function() {

if($(".data_encom").val()==''){ 
                         
$(".feedback_data").text('Falta preencher o campo data.');    
}else{

$(".feedback_data").text('');     

}
    
});        
}); 



$(document).ready(function() {

$(".botao_encomendar").click(function() {

if( $(".email_checkout").val()=='' ||
    $(".email_checkout").val()=='' ||
    $(".email_checkout").val().indexOf(".") == -1 ||
    $(".email_checkout").val().indexOf("@") == -1 ||
    $(".telefone").val()=='' ||
    $(".bairro").val()=='' ||  
    $(".numero").val()=='' || 
    $(".data_encom").val()=='' ||
    !$("input[name='inlineRadioOptions']:checked").val() ||
    $(".cep").val()=='' ||
//    $(".campo-email").val().indexOf(".com") == -1 ||
//   $(".campo-email").val().indexOf(".br") == -1 ||
    $(".endereco").val()==''){
    $(".botao_encomendar").attr( "data-target", "");
//$(".botao-enviar").attr("disabled", true);                          
}else{
//$(".botao-enviar").attr("disabled", false);
$(".botao_encomendar").attr( "data-target", "#modalExemplo2");
$(".feedback_ponto").text('');   
$(".feedback_arroba").text(''); 
$(".feedback_telefone").text(''); 
$(".feedback_endereco").text('');    
$(".feedback_bairro").text('');   
$(".feedback_numero").text('');  
$(".feedback_radio").text('');       
$(".feedback_data").text(''); 
$(".feedback_combr").text(''); 
$(".feedback_cep").text('');      

    
                         

}

});
});

function apaga(){
    
document.querySelector('form').reset();
$(".feedback_ponto").text('');   
$(".feedback_arroba").text(''); 
$(".feedback_telefone").text(''); 
$(".feedback_endereco").text('');    
$(".feedback_bairro").text('');   
$(".feedback_numero").text('');  
$(".feedback_radio").text('');       
$(".feedback_data").text(''); 
$(".feedback_combr").text(''); 
$(".feedback_cep").text('');   
$(".resultado").text('0');       
}



