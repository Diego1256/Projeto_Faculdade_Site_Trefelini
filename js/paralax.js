var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
    // o .offset() retorna os valores de left e top dentro do
    // elemento que selecionarmos em $(idBox). Como queremos
    // o topo usamos ao final o .top
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
    // $target define qual elemento vamos animar. Neste caso, todos aqueles que tiverem a classe .anime
	var $target = $('.anime'),
            // animationClass é a classe com as propriedades da animação que será adicionada durante o scroll    
			animationClass = 'anime-init',
            // windowHeight define a altura total da janela do browser. Isso serve para garantirmos que a
            // tela não fique em branco. Este valor será utilizado junto a comparação entre o elemento e o scroll
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

    //A animação
	function animeScroll() {
    // documentTop vai pegar a distância do total do scroll e o topo da página.
    // Isso em relação ao $(document).    
		var documentTop = $(document).scrollTop();
        // $target é a variável que contem a classe que será animada. Queremos verificar cada uma
        // delas por isso temos o .each(), para selecionarmos cada uma individualmente.
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
                // Caso contrário, remova a classe. Você pode deletar todo o else,
                // caso deseje que a animação ocorra uma única vez.
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
    
    // Ativa a função animeScroll()
	animeScroll();
    // Sempre que o usuário der scroll, ative novamente a função animeScroll()
	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 150);
	});
});


function boxBottom(idBox) {
    // o .offset() retorna os valores de left e top dentro do
    // elemento que selecionarmos em $(idBox). Como queremos
    // o topo usamos ao final o .top
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
    // $target define qual elemento vamos animar. Neste caso, todos aqueles que tiverem a classe .anime
	var $target = $('.anime'),
            // animationClass é a classe com as propriedades da animação que será adicionada durante o scroll    
			animationClass = 'anime-final',
            // windowHeight define a altura total da janela do browser. Isso serve para garantirmos que a
            // tela não fique em branco. Este valor será utilizado junto a comparação entre o elemento e o scroll
			windowHeight = $(window).height(),
			offset = windowHeight + (windowHeight / 4);

    //A animação
	function animeScroll() {
    // documentTop vai pegar a distância do total do scroll e o topo da página.
    // Isso em relação ao $(document).    
		var documentTop = $(document).scrollTop();
        // $target é a variável que contem a classe que será animada. Queremos verificar cada uma
        // delas por isso temos o .each(), para selecionarmos cada uma individualmente.
		$target.each(function() {
			if (documentTop > boxTop(this) + offset) {
				$(this).addClass(animationClass);
                // Caso contrário, remova a classe. Você pode deletar todo o else,
                // caso deseje que a animação ocorra uma única vez.
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
    
    // Ativa a função animeScroll()
	animeScroll();
    // Sempre que o usuário der scroll, ative novamente a função animeScroll()
	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 150);
	});
});



