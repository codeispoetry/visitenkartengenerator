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

        let paddingleft = frontside.width() * 0.086;
        let nameY = frontside.height() * 0.336;
        let titleY = nameY + this.ArvoGruen.size * 1.3;

        let allY = frontside.height() * 0.56;
        let columnRightX = frontside.width() * 0.55;

        text.name = frontside.text($('#name').val().toUpperCase()).fill( "white" ).move(paddingleft, nameY).font(text.ArvoGruen );
        text.title = frontside.text($('#title').val()).fill( "white" ).move(paddingleft, titleY).font(text.Arvo );

        text.left = frontside.text($('#left').val()).fill( "white" ).move(paddingleft, allY).font(text.Arvo );
        text.right = frontside.text($('#right').val()).fill( "white" ).move(columnRightX, allY).font(text.Arvo );

    },
};

$('.trigger').bind('input propertychange', text.draw);
