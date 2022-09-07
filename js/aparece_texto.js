$(".texto").click(function() {
$(".lista").css( "display", "block" )});  




$(".resultado_lista").click(function(){
 $(".lista").css( "display", "none")});

$(".logo,.carrinho,nav,#imgMainBanner,.cp").click(function(){
 $(".lista").css( "display", "none")});



const inputEle = document.getElementById('id_search_list');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { // codigo da tecla enter
    // colocas aqui a tua função a rodar

    $(".click1").click();
      
  }
});
$(".resultado_lista").click(function(){
 $("#id_search_list").val('')});


 $(".telefone").mask("(00) 0000-0000");

function coxinhaIngrediente(){
 document.getElementById('ingrediente_coxinha').style.display = 'block';    
}


$(".fechatudo").click(function(){
    $("#modalExemplo").hide();
    $(".modal-backdrop").hide();
//    $(".pedido_aceito").modal('toogle');
});

