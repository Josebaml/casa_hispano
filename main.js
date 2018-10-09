
var ancho = $(window).height()
$('#hero, #aboutMe , #studies, #experience, #contact').css('height', ancho+'px')

var inicioSeccion = $(document).scrollTop()

if(inicioSeccion < 717){
	$('header nav a[href$=#hero]').css({'color': '#151d2a','transform': 'scale(1.1)'})
} else if (inicioSeccion >= 717 && inicioSeccion < 1604) {
	$('header nav a[href$=#aboutMe]').css({'color': '#151d2a','transform': 'scale(1.1)'})
} else if (inicioSeccion >= 1604 && inicioSeccion < 2491) {
	$('header nav a[href$=#studies]').css({'color': '#151d2a','transform': 'scale(1.1)'})
} else if (inicioSeccion >= 2491 && inicioSeccion < 3378) {
	$('header nav a[href$=#experience]').css({'color': '#151d2a','transform': 'scale(1.1)'})
} else if (inicioSeccion >= 3378) {
	$('header nav a[href$=#contact]').css({'color': '#151d2a','transform': 'scale(1.1)'})
}

$(window).scroll(function() {
	var inicioScroll = $(document).scrollTop()

if(inicioScroll < 817){
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#hero]').css({'color': '#151d2a','transform': 'scale(1.1)'})
	
} else if (inicioScroll >= 817 && inicioScroll < 1704) {
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#aboutMe]').css({'color': '#151d2a','transform': 'scale(1.1)'})
	//$( "h2.aboutMeMov" ).addClass( "animaH2" );
	//$( "#aboutMeText" ).addClass( "aboutMeTextMov" );
} else if (inicioScroll >= 1704 && inicioScroll < 2591) {
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#studies]').css({'color': '#151d2a','transform': 'scale(1.1)'})
	//$( "h2.studiesMov" ).addClass( "animaH2" );
} else if (inicioScroll >= 2591 && inicioScroll < 3478) {
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#experience]').css({'color': '#151d2a','transform': 'scale(1.1)'})
	//$( "h2.experienceMov" ).addClass( "animaH2" );
} else if (inicioScroll >= 3478) {
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#contact]').css({'color': '#151d2a','transform': 'scale(1.1)'})
	//$( "h2.contactMov" ).addClass( "animaH2" );
	$( "#complete" ).addClass( "animaComplete" );
}
})

$("header h1, #subir").click(irArriba)

$("header nav a").click( irAseccion )

$("div.btnAboutMeWhite, div.btnAboutMe").click( irSeccion )

function irAseccion(event)	{
		
	event.preventDefault()
	
	var idSeccion = $(this).attr("href")
	
	var seccion = $(idSeccion)
	
	var distanciasSeccion = seccion.offset() 
	
	var destinoY = distanciasSeccion.top - $("body > header").outerHeight() 
	
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	
	$('header nav a[href$='+idSeccion+']').css({'color': '#151d2a','transform': 'scale(1.1)'})
	
	$("html,body").stop().animate( { scrollTop: destinoY } , 1000)
	
}

function irArriba(event){
	event.preventDefault()
	
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	
	$('header nav a[href$=#hero]').css({'color': '#151d2a','transform': 'scale(1.1)'})
	
	$("html,body").stop().animate({ scrollTop: "0" } , 1000)	
}

function irSeccion()	{
	
	var idSeccion = $(this).attr("id")
	
	var seccion = $(idSeccion)
	
	var distanciasSeccion = seccion.offset() 
	
	$('header nav a').css('color', '#848484')
	
	$('header nav a[href$='+idSeccion+']').css('color', '#151d2a')
	
	var destinoY = distanciasSeccion.top - $("body > header").outerHeight() 
	
	$("html,body").stop().animate( { scrollTop: destinoY } , 1000)
	

	
}

/*$('.technologies_left').mouseleave(function(){
		$('.technologies_left').css({
			WebkitTransition : 'transform 1s ease',
			MozTransition : 'transform 1s ease',
			MsTransition : 'transform 1s ease',
			OTransition : 'transform 1s ease',
			transition : 'transform 1s ease'
		});
	}),*/