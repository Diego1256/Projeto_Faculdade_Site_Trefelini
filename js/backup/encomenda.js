var cochinha = $("#cochinha");
var sonho = $("#sonho");
var descricao_encomenda=$(".nome_produto");
var imagem_encomenda=$(".imagem_encomenda");
var preço_encomenda=$(".preco_produto");
var subtotal=$(".precototal");

cochinha.click(function() {
cochinha.css( "background-image", "url(img/salgados/selecionado/coxinha.jpg)"); 
descricao_encomenda.text('Coxinha de Vegana');
preço_encomenda.text('1x R$ 3,99');    
subtotal.text('R$ 3,99');     
    
imagem_encomenda.attr({src: "img/salgados/coxinha.jpg",
alt:"Produto selecionado coxinha vegana selecionado" });     
  
   
});
sonho.click(function() {
sonho.css( "background-image", "url(img/doces/selecionado/sonho.jpg)");

descricao_encomenda.text('Sonho de Veganinho');
preço_encomenda.text('1x R$ 3,99');  
subtotal.text('R$ 3,99');       

imagem_encomenda.attr({src: "img/doces/sonho_1.jpg",
alt:"Produto sonho de veganinho selecionado"       }); 
  
});
   

