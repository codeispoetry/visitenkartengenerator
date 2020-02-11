const backlogo = {
    svg: backside.circle(0),

    draw() {
        backlogo.svg = backside.image("assets/logos/logo.svg", function(){
            backlogo.svg.size( 180 );
            let x = ( backside.width() - backlogo.svg.width() ) / 2;
            let y = ( backside.height() - backlogo.svg.height() ) / 2;
            backlogo.svg.move( x , y);
        });
    }

};


