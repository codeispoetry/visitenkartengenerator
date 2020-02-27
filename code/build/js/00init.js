
frontside = SVG().addTo('#canvas1');
backside = SVG().addTo('#canvas2');

config = {};

$(document).ready(function () {
    $('#name').val("Thomas Rose");
    $('#title').val("Vorstandsvorsitzender");
    $('#left').val("Grüner Kreisverband\nGartenstraße 18\n71234 Reutlingen");
    $('#right').val("Mobil: 0179 / 9256331\nmail@tom-rose.de");
    $('#city').val("Eningen");

    setDrawsize();
    background.draw();
    text.draw();
    logo.draw();
    backlogo.draw();
    backlogotext.draw();


    $('.message').hide();

});
