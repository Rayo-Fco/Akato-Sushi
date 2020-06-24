
$('.slider .slider_section:last').insertBefore('.slider .slider_section:first');
$('.slider').css('margin-left', '-'+100+'%');

function moverD() {
	$('.slider').animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.slider .slider_section:first').insertAfter('.slider .slider_section:last');
		$('.slider').css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	$('.slider').animate({
		marginLeft:0
	} ,700, function(){
		$('.slider .slider_section:last').insertBefore('.slider .slider_section:first');
		$('.slider').css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverDmovil(); /// slider movil
		moverD();
		clearInterval(interval);
	}, 5000);
}

autoplay();



$('#btn-next').on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

$('#btn-prev').on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});





$('#b-carta, #c-carta, #d-carta').addClass('oculto')
$(window).resize(function(){     

	if ($('#contenido-carta').width() >= 500 ){
		$('#b-carta, #c-carta, #d-carta').addClass('oculto')
		$('#menu-carta').removeClass('oculto')
	}
	else if($('#contenido-carta').width() < 400 ){	
		$('.grid-carta').removeClass('oculto')

	}
	else
	{
		$('#b-carta, #c-carta, #d-carta').removeClass('oculto')
		$('#menu-carta').addClass('oculto')
	}

});

var num = 1;
$('#btn-sig,#btn-sig-1').on('click',function(){
	switch (num) {
		case 1:
			$('#a-carta').hide("linear");
			$('#b-carta').show().css('display','grid');
			num = 2;
			$('#btn-ant,#btn-ant-1').show();
			window.scrollTo(0, 0);
		break;
		case 2:
			$('#b-carta').hide("linear");
			$('#c-carta').show().css('display','grid');
			num = 3;
			window.scrollTo(0, 0);
		break;
		case 3:
			$('#c-carta').hide("linear");
			$('#d-carta').show().css('display','grid');
			num = 4;
			$('#btn-sig, #btn-sig-1').hide();
			window.scrollTo(0, 0);
		break;
	}
})

$('#btn-ant,#btn-ant-1').on('click',function(){
	switch (num) {
		case 4:
			$('#d-carta').hide();
			$('#c-carta').show(300).css('display','grid');
			num = 3;
			$('#btn-sig ,#btn-sig-1').show();
			window.scrollTo(0, 0);
		break;
		case 3:
			$('#c-carta').hide();
			$('#b-carta').show(300).css('display','grid');
			num = 2;
			window.scrollTo(0, 0);
		break;
		case 2:
			$('#b-carta').hide();
			$('#a-carta').show(300).css('display','grid');
			num = 1;
			$('#btn-ant, #btn-ant-1').hide();
			window.scrollTo(0, 0);
		break;
	}
})

function menu() {
	if($('#menu2-select').css('display') == 'none' ){
		$('#menu2-select').show(300);
	}
	else
	{
		$('#menu2-select').hide("linear");
	}
}




$('.slider-movil .slider_section-movil:last').insertBefore('.slider-movil .slider_section-movil:first');
$('.slider-movil').css('margin-left', '-'+100+'%');

function moverDmovil() {
	$('.slider-movil').animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.slider-movil .slider_section-movil:first').insertAfter('.slider-movil .slider_section-movil:last');
		$('.slider-movil').css('margin-left', '-'+100+'%');
	});
}

function moverImovil() {
	$('.slider-movil').animate({
		marginLeft:0
	} ,700, function(){
		$('.slider-movil .slider_section-movil:last').insertBefore('.slider-movil .slider_section-movil:first');
		$('.slider-movil').css('margin-left', '-'+100+'%');
	});
}


$('#btn-next-movil').on('click',function() {
	moverDmovil();
	clearInterval(interval);
	autoplaymovil();
});

$('#btn-prev-movil').on('click',function() {
	moverImovil();
	clearInterval(interval);
	autoplaymovil();
});


