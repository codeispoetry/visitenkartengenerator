
const backlogo = {
    svg: backside.circle(20).fill("red"),

    draw() {
        //backlogo.svg = backside.svg( pattern.replace(/Eningen/g,'Cologne') );
        backlogo.svg.front();
        backlogo.center();

    },

    center(){
        let x = ( backside.width() - backlogo.svg.width() ) / 2;
        let y = ( backside.height() - backlogo.svg.height() ) / 2;
        backlogo.svg.move( x , y);
    }

};


