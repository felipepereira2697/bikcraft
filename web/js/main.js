$(function() {
	$(".rslides").responsiveSlides();
});

$(".rslides").responsiveSlides({
	auto: true,             // Boolean: Animate automatically, true or false
	speed: 500,            // Integer: Speed of the transition, in milliseconds
	timeout: 3000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslidesPortfolio").responsiveSlides({
	auto: true,             // Boolean: Animate automatically, true or false
	speed: 500,            // Integer: Speed of the transition, in milliseconds
	timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	pager: true,           // Boolean: Show pager, true or false

});


Visibility.onVisible(function(){
	//Index animations
	setTimeout(function(){
		$(".intro h1").addClass("animated fadeInDown");
	}, 400);

	setTimeout(function(){
		$(".intro blockquote").addClass("animated fadeInDown");
	}, 800);

	setTimeout(function(){
		$(".intro .btn").addClass("animated fadeInDown");
	}, 1200);

	setTimeout(function(){
		$(".animar").addClass("animated fadeInDown");
	}, 1600);

	//Internal Pages
	setTimeout(function(){
		$(".animarInternal").addClass("animated fadeInDown");
	}, 400);
	
	setTimeout(function(){
		$(".internalIntro h1").addClass("animated fadeInDown");
	}, 800);

	setTimeout(function(){
		$(".internalIntro p").addClass("animated fadeInDown");
	}, 1200);
});

/* FORM SEND WITH PHPMAILER THESE JS IS NECESSARY */

// Formulario

$('.formphp').on('submit', function() {
	var emailContato = "contato@bikcraft.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});