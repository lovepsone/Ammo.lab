function demo() {

    cam ( 0, 20, 100 );

    // ammo terrain shape

    add ({ 
        type:'terrain', 
        pos : [0,-5,0], // terrain position
        size : [200,10,200], // terrain size in meter
        div : [64,64], // number of subdivision
        complexity : 30, // complexity of noise
        flipEdge : false, // inverse the triangle
        hdt : 'PHY_FLOAT', // height data type PHY_FLOAT, PHY_UCHAR, PHY_SHORT
        friction: 0.6, 
        restitution: 0.0,
    });

    add ({ type:'sphere', size:[1], pos:[0,20,5], mass:0.2 });
    add ({ type:'sphere', size:[1], pos:[5,20,5], mass:0.2 });
    add ({ type:'sphere', size:[1], pos:[-5,20,-5], mass:0.2 });

    // ammo car shape

    // ! \\ click on view and use key to controle car

    car ({ 
        type:'box',
        name:'car',
        helper: true,
        pos:[0,10,0], // start position of car 
        rot:[0,0,0], // start rotation of car
        size:[1.5, 0.4, 3.6], // chassis size
        masscenter:[0,-0.6,0], // local center of mass (best is on chassis bottom)

        friction: 0.6, 
        restitution: 0.0, 
        linearDamping: 0.3, 
        angularDamping: 0.3,

        radius:0.5,// wheels radius
        deep:0.4, // wheels deep
        wPos:[1, 0, 1.7], // wheels position on chassis

    });

    follow ('car');

};