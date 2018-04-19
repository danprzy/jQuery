$(function(){
	var carouselList = $('#carousel ul');
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}
	//setInterval(changeSlide, 7000); 

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first'); 
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem); // za ostatnim elementem dodaj pierwszy
		carouselList.css({marginLeft:0});
	}

	//kręcenie pod przycisk w prawo
	$('#next').on('click', function changeSlideOnClickRight() {
	carouselList.animate({'marginLeft':-400}, 100, moveFirstSlide);
	});

	//kręcenie pod przycisk w lewo
	$('#prev').on('click', function changeSlideOnClickLeft() {
	carouselList.animate({'marginRight':-400}, 100, moveFirstSlideBack);
	});

	function moveFirstSlideBack() {
		var firstItem = carouselList.find('li:first'); 
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);// dodawanie przed pierwszym elmentem ostatniego
		carouselList.css({marginLeft:0});
	}
});