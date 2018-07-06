$(function () {
  var carouselList = $('#carousel ul');
    function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 1000, moveFirstSlide);
    }
    setInterval(changeSlide, 3000); 

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem); // za ostatnim elementem dodaj pierwszy
        carouselList.css({marginLeft: 0}); //zresetuje lewy margines z powrotem na wartość 0
    }

    //kręcenie pod przycisk w prawo
    $('#next').on('click', function () {
        carouselList.animate({'marginLeft': -400}, 1000, moveFirstSlide);
    });

    //kręcenie pod przycisk w lewo
    $('#prev').on('click', function () {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);// dodawanie przed pierwszym elmentem ostatniego
        carouselList.css({marginLeft: -400}).animate({'marginLeft': 0}, 1000);//zrób animacje od -400 do 0, trwającą 1000ms
    });
});