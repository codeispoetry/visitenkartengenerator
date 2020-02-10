
frontside = SVG().addTo('#canvas1');
backside = SVG().addTo('#canvas2');


$(document).ready(function () {
    frontside.size(250, 135);
    backside.size( 250, 135 );

    $('.message').hide();

});
