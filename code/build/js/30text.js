const text = {

    name: frontside.circle(0),
    title: frontside.circle(0),
    left: frontside.circle(0),
    right: frontside.circle(0),

    ArvoGruen: {
        family: 'ArvoGruen',
        size: 22,
        anchor: 'left',
        weight: 300
    },
    Arvo: {
        family: 'Arvo',
        size: 12,
        anchor: 'left',
        weight: 300
    },

    draw(){
        text.name.remove();
        text.title.remove();
        text.left.remove();
        text.right.remove();

        let paddingleft = 40;

        text.name = frontside.text($('#name').val().toUpperCase()).fill( "white" ).move(paddingleft, 40).font(text.ArvoGruen );
        text.title = frontside.text($('#title').val()).fill( "white" ).move(paddingleft, 70).font(text.Arvo );

        text.left = frontside.text($('#left').val()).fill( "white" ).move(paddingleft, 120).font(text.Arvo );
        text.right = frontside.text($('#right').val()).fill( "white" ).move(paddingleft + 150, 120).font(text.Arvo );

    },
};

$('.trigger').bind('input propertychange', text.draw);
