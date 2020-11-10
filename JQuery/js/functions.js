/*
$(document).ready(function(){

});

$(window).on('load',function(){
	alert("Olá, Mundo")
})
*/

$(function(){

	$('.artigo1').click(function(){
		$('.artigo2').css('background-color','purple');
	});

	$('.artigo1').hover(function(){
		$('.artigo2').css('background-color','red');
	},function(){
		$('.artigo2').css('background-color','rgb(100,100,100)');
	});

	$('textarea').focus(function(){
		alert('Estou dentro do textarea');
	});

	/*
	$('textarea').blur(function(){
		alert('Estou fora do textarea');
	});
	*/

});