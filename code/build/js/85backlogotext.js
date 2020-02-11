const backlogotext = {

    svg: backside.circle(0),

    Futura: {
        family: 'Futura Condensed Extra Bold',
        size: 10,
        anchor: 'left',
        weight: 300
    },

    draw(){
        backlogotext.svg.remove();

        backlogotext.svg = backside.text($('#city').val()).fill( "white" ).move(130,183).font(backlogotext.Futura );
    },
};

$('#city').bind('input propertychange', backlogotext.draw);