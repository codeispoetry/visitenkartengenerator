var textColors = ["white","black","#46962b","#E6007E","#FEEE00"];

const quote = {
    svg: backside.text('hallo').front(),
    grayBackground: backside.circle(0),
    colors: ['#ffffff', '#ffee00'],
    lineheight: 20,
    linemargin: - 4,
    paddingLr: 5,
    font: {
        anchor: 'left',
        leading: '1.0em',
        size: 20
    },
    fontoutsidelines: {
        family: 'ArvoGruen',
        size: 10,
        anchor: 'left',
        leading: '1.0em',
    },

    draw: function () {
        quote.svg.remove();
        if( $('#quote').val()=="" ) return;

        quote.svg = backside.group().attr('id','svg-text');



        let y = 0;

        let lines = $('#quote').val();
        
        let quotationMarks = ['„','“' ];
        let qmI = 0;
        while( (lines.match(/\"/g) || []).length ){
            lines = lines.replace(/\"/, quotationMarks[ qmI ]);
            qmI = (qmI + 1 ) % 2;
        }
       
        lines = lines.replace(/\n$/,'').split(/\n/);

        let fontfamily = (lines.length <= 3) ? 'ArvoGruen' : 'Arvo';
        let longestLine = lines.reduce(function (a, b) { return a.length > b.length ? a : b; });

        let widthSameLineHeihgts = 16 * longestLine.length;

        let lineBeginsY = [];
        let linesRendered = []; 
        let color;

        lines.forEach(function (value, index, array) {
                let style = 1;

                // the main text
                if( lines.length < 4){
                    value = value.toUpperCase();
                }
                values = value.split(/\[|\]/);


                let t = backside.text(function (add) {
                    for(let i = 0; i<values.length; i++) {
                        style = (style == 0 ) ? 1 : 0;

                        color = quote.colors[style];
                        if(style == 0 ){
                            color = textColors[ 0  ];
                            // always white, and not  $('#textColor').val()
                        }

                        add.tspan( values[i] ).fill( color ).font(Object.assign( quote.font,{family: fontfamily}));
                        
                        add.attr("xml:space","preserve");
                        add.attr("style","white-space:pre");
                    }
                });

                t.move(0, y );
              
                if( $('#textsamesize').prop("checked") ){
                    t = backside.group().add(t).size(widthSameLineHeihgts); // the number defines the size of the white bars
                }

                y += (t.rbox().h ) + quote.linemargin ;

                lineBeginsY[ index ] = y;
                linesRendered[ index ] = t;
                quote.svg.add(t);
            }
        );

        // add upper and lower line
        color = "white";
        let linebefore = backside.rect(quote.svg.width(), 2).fill( color ).dy(-4);
        let lineafter = linebefore.clone().dy(quote.svg.height() + 6);
        quote.svg.add(linebefore);
        quote.svg.add(lineafter);



        // text above and below the line
        let textbeforeParts = $('#textbefore').val().split(/\[|\]/);
        let style = 1;
        let textbefore = backside.text(function (add) {
            for(let i = 0; i<textbeforeParts.length; i++) {
                style = (style == 0 ) ? 1 : 0;
                add.tspan( textbeforeParts[i] ).fill(quote.colors[style]).font(quote.fontoutsidelines);
                add.attr("xml:space","preserve");
                add.attr("style","white-space:pre");
            }
        });
       textbefore.dy(-7);

        let textafterParts = $('#textafter').val().split(/\[|\]/);
        style = 1;
        let textafter = backside.text(function (add) {
            for(let i = 0; i<textafterParts.length; i++) {
                style = (style == 0 ) ? 1 : 0;
                add.tspan( textafterParts[i] ).fill(quote.colors[style]).font(quote.fontoutsidelines);
                add.attr("xml:space","preserve");
                add.attr("style","white-space:pre");
            }
        });
        textafter.dy(quote.svg.height() + 7);
        textafter.x( quote.svg.width() - textafter.length() );


        quote.svg.add(textbefore);
        quote.svg.add(textafter);

        let quoteWidth = 0.75;
        quote.svg.size(backside.width() * quoteWidth );

        let _quoteOffset = (1 - quoteWidth ) / 2;
        let _quoteY = (backside.height() - quote.svg.height() ) / 2;
        quote.svg.move( backside.width() * _quoteOffset, _quoteY);

        quote.svg.front();
    },

};

$('#quote, #textbefore, #textafter, #textsamesize').bind('input propertychange', quote.draw);
