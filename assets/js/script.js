$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 4);

		$('body').css({
			 background-position: 40px;
		});

	});
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
	$(function(){
	  $("a").click(function(event){
	    if (this.hash !== "") {
	      event.preventDefault();

	      var gato = this.hash;

	      $("html, body").animate({
	        scrollTop: $(gato).offset().top
	      }, 800, function(){
	        window.location.hash= gato;
	      });
	    }
	  });
		$('[data-toggle="popover"]').popover();
});
