

$(document).ready(function() {
	$('.title').eq(0).animate({
		color: '#ee4035',
	}, 3000, 'easeInOutBack');
$('body, nav').animate({
	 	'background-color':'#3BAFDA',
	 }, 1750, 'easeInOutCirc');
});

$(document).ready(function() {
	$('.title').eq(1).animate({
		color: '#f37736',
	}, 3500, 'easeInOutBack');
});

$(document).ready(function() {
	$('.title').eq(2).animate({
		color: '#fdf498',
	}, 4000, 'easeInOutBack');
});

$(document).ready(function() {
	$('.title').eq(3).animate({
		color: '#7bc043',
	}, 4500, 'easeInOutBack');
});

$(document).ready(function() {
	$('.title').eq(4).animate({
		color: '#0392cf',
	}, 5000, 'easeInOutBack');
});

$(document).ready(function() {
	$('.title').eq(5).animate({
		color: '#78166D',
	}, 5500, 'easeInOutBack');
});

// Change the colors of the nav bar too!

$(document).ready(function() {
	$('a').eq(0).animate({
		color: '#ee4035',
	}, 1000, 'easeInOutBack');
});

$(document).ready(function() {
	$('a').eq(1).animate({
		color: '#f37736',
	}, 1500, 'easeInOutBack');
});

$(document).ready(function() {
	$('a').eq(2).animate({
		color: '#fdf498',
	}, 2000, 'easeInOutBack');
});

$(document).ready(function() {
	$('a').eq(3).animate({
		color: '#7bc043',
	}, 2500, 'easeInOutBack');
});

$(document).ready(function() {
	$('.title').mouseenter(function() {
		$(this).css('color', 'white');
	})
});

$(document).ready(function() {
	$('.title').eq(0).mouseleave(function() {
		$(this).animate({
		color: '#ee4035',
	}, 1000, 'easeInOutBack');
	})
});

$(document).ready(function() {
	$('.title').eq(1).mouseleave(function() {
		$(this).animate({
		color: '#f37736',
	}, 1000, 'easeInOutBack');
	})
});

$(document).ready(function() {
	$('.title').eq(2).mouseleave(function() {
		$(this).animate({
		color: '#fdf498',
	}, 1000, 'easeInOutBack');
	})
});

$(document).ready(function() {
	$('.title').eq(3).mouseleave(function() {
		$(this).animate({
		color: '#7bc043',
	}, 1000, 'easeInOutBack');
	})
});

$(document).ready(function() {
	$('.title').eq(4).mouseleave(function() {
		$(this).animate({
		color: '#0392cf',
	}, 1000, 'easeInOutBack');
	})
});

$(document).ready(function() {
	$('.title').eq(5).mouseleave(function() {
		$(this).animate({
		color: '#78166D',
	}, 1000, 'easeInOutBack');
	})
});



// Slick Animations

$(document).ready(function(){
  $('.main-header').slick({
//    setting-name: setting-value
  });


	$('.main-header').on('afterChange', function(event, slick, currentSlide){
	  console.log(currentSlide);
	 // $('.main-header div').eq(currentSlide).
	 //$('body').css('background-color', '#A9E482');
	 $('body, nav').animate({
	 	'background-color':'#41F9BD',
	 }, 1750, 'easeInOutCirc');
	 $('.title-2').eq(7).animate({
		color: '#FFF9BD',
	}, 1750, 'easeInOutBack');
	 $('.title-2').eq(8).animate({
		color: '#FFF9BD',
	}, 1500, 'easeInOutBack');
	 $('.title-2').eq(9).animate({
		color: '#FFF9BD',
	}, 1250, 'easeInOutBack');
	 $('.title-2').eq(10).animate({
		color: '#FFF9BD',
	}, 1000, 'easeInOutBack');
	 $('.title-2').eq(11).animate({
		color: '#FFF9BD',
	}, 750, 'easeInOutBack');
	 $('.title-2').eq(12).animate({
		color: '#FFF9BD',
	}, 500, 'easeInOutBack');
	 $('.title-2').eq(13).animate({
		color: '#FFF9BD',
	}, 250, 'easeInOutBack');
	 $('a').eq(0).animate({
		color: '#FFF9BD',
	}, 1750, 'easeInOutBack');
	 $('a').eq(1).animate({
		color: '#FFF9BD',
	}, 1250, 'easeInOutBack');
	 $('a').eq(2).animate({
		color: '#FFF9BD',
	}, 750, 'easeInOutBack');
	 $('a').eq(3).animate({
		color: '#FFF9BD',
	}, 250, 'easeInOutBack');
	});
     
});
