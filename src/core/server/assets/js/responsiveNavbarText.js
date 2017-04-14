$(function() {
    var txt = $(window).width() > 700 ? "Enter a card's name, number, or set." : "Enter name/number/set";
    $('.box').attr('placeholder', txt);
});
