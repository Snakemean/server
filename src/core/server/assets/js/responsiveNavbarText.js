$(function() {
    var txt = $(window).width() > 700 ? "Search using a card's name, number, set" : "Enter name/number/set";
    $('.box').attr('placeholder', txt);
});
