
frontside = SVG().addTo('#canvas1');
backside = SVG().addTo('#canvas2');

config = {};

$(document).ready(function () {
    $('#name').val("Vorname Name");
    $('#title').val("Funktion");
    $('#left').val("Grünes Büro\nStraße\nPLZ Stadt");
    $('#right').val("Mobil: 0123/456 789 0\nmail@adresse.de");
    $('#city').val("Deine Stadt");

    setDrawsize();
    background.draw();
    text.draw();
    logo.draw();
    backlogo.draw();

    $('.message').hide();


    $('#logo-tab').click( function(){
        quote.svg.remove();
        backlogo.draw();
    });

    $('#quote-tab').click( function(){
        backlogo.svg.remove();
        quote.draw();
    });

});
