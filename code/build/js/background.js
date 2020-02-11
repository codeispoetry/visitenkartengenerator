const background = {

    front: frontside.circle(0),
    back: backside.circle(0),

    draw(){
        background.front.remove();
        background.back.remove();


        background.front = frontside.rect( frontside.width() ,frontside.height()).fill("#46962b");
        background.back = backside.rect( frontside.width() ,frontside.height()).fill("#46962b");
    }
};