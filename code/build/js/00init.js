
frontside = SVG().addTo('#canvas1');
backside = SVG().addTo('#canvas2');


$(document).ready(function () {
    $('#name').val("Thomas Rose");
    $('#title').val("Vorstandsvorsitzender");
    $('#left').val("Grüner Kreisverband\nGartenstraße 18\n71234 Reutlingen");
    $('#right').val("Mobil: 0179 / 9256331\nmail@tom-rose.de");

    setDrawsize();
    background.draw();
    text.draw();
    logo.draw();
    backlogo.draw();


    $('.message').hide();

});
