const logo = {
    svg: frontside.circle(0),

    draw() {
        logo.svg = frontside.image("assets/logos/sonnenblume.svg", function(){
            logo.svg.size( 70).move( frontside.width() - logo.svg.width() - 15, 15);
        });
    }

};


