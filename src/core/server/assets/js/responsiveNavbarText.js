$(function() {
    var txt = $(window).width() > 700 ? "Enter a card's name, number, or set." : "Enter card's name, number, or set";
    $('.box').attr('placeholder', txt);
});
