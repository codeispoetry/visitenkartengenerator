const background = {

    front: frontside.circle(0),
    back: backside.circle(0),

    draw() {
        background.front.remove();
        background.back.remove();

        background.front = frontside.image("assets/bg_small.jpg", function () {
           // background.front.size(frontside.width(), frontside.height());
        });

        background.back = backside.image("assets/bg_small.jpg", function () {
            // background.front.size(frontside.width(), frontside.height());
        });
    }
};