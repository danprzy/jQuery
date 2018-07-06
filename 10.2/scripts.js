$(function(){

	var ignored = ["spanElem2", "spanElem3" ];

	$('span').each(function(index, element) {
		var idx = ignored.indexOf(element.id)
		//console.log(idx);
		//console.log(element.id);
			if(idx == -1) { // kiedy elementu nie ma w tablicy ignored to koloruj na czerwono
				$(element).css('color', 'red');
			};
	});

	/* version 1 co drugi element koloruj na czerwono, sprawdzamy czy jest parzysty
	span.each(function(index, element) {
		if(index % 2 == 0) { 
			$(element).css('color', 'red');
		};
	});
	*/


	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
	    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	    $(element).append(button);
	});

	$('button').click(function(){
		alert($(this).attr('data-tmp'));
	});

});