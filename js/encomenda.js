$(".botao").click(function() {
	if(!$(".divProdutoThumb").hasClass("prodSelecionado")) {
		alert('Selecione pelo menos um produto');
		return false;
	} else {
		var divMain = $('.prodSelecionado');
		
		var descricao_encomenda = $(".nome_produto");
		var imagem_encomenda = $(".imagem_encomenda");
		var preco_encomenda = $(".preco_produto");
		var stotal_encomenda = $(".precototal");
		var quantidade_encomenda = $(".quantidade_produto");
			
		$(imagem_encomenda).attr("src", $($(divMain).find('.deposito').find("img")).attr('src'));
		$(descricao_encomenda).text($(divMain).find(".prodDescricao").text());
		
		var preco = $(divMain).find(".prodPreco").text();
		preco = preco.replace(/[^0-9,]/g, '');
		$(preco_encomenda).text(preco);
	
		var qntd = parseInt($(divMain).find(".prodQntd").text(), 10);
		$(quantidade_encomenda).text(qntd +"x");
		
		$(stotal_encomenda).text((parseFloat(preco.replace(',', '.')) * qntd).toFixed(2));
	}
	
	return true;
});

$(".carrinho").click(function() {
	if(!$(".divProdutoThumb").hasClass("prodSelecionado")) {
		alert('Selecione pelo menos um produto');
		return false;
	} 
	
	return true;
});

                  
$(".deposito").click(function() {
	var divMain = $(this).parent();
	
	var thisIsSelected = $(divMain).hasClass("prodSelecionado");
	$(".divProdutoThumb").each(function(i, e) {
		$(e).removeClass("prodSelecionado");
	});
	
	if(!thisIsSelected)
		$(divMain).addClass("prodSelecionado");	
});




