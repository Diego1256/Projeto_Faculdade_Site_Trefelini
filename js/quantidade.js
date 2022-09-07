function process(qntd) {
	var lblQntd = $(event.target.parentNode).find('label');
	
	var valQntd = parseInt($(lblQntd).text(), 10);
	
	valQntd += qntd;
	if(valQntd < 0)
		valQntd = 0;
	
	$(lblQntd).text(valQntd);
}
//$(".botao").click(function() {
//if($("#quant").text()=='0'){
//        alert('Insira a quantidade do produto');
//        return false;
//    }
//        return true;          
//       });
//
//$(".carrinho").click(function() {
//    if($("#quant").text()=='0'){
//        alert('Insira a quantidade do produto');
//        return false;
//    }
//        return true;          
//       });