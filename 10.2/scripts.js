//debugger
var spans = $('span');
var ignored = ["spanElem0", "spanElem3" ];


$('span').each(function(index, element) {
	if($.inArray(element, ignored) < 0) {
		$(element).css('color', 'red');
	};
});

//jQuery.inArray( value, array [, fromIndex ] )
//The $.inArray() method is similar to JavaScript's native .indexOf() 
/*
span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});
*/
// $('span:even').css('color', 'red');

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});

$('button').click(function(){
	alert($(this).attr('data-tmp'));
});

