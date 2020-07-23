var canvas = document.querySelector('canvas');

canvas.width = 950;
canvas.height = 880;


var burettesol = document.getElementById("burettesol")
burettesol.height = "200"



function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}
var context = canvas.getContext('2d');
var methyladded = 0;
var phenoadded = 0;
var sources = {
    image1: 'src/burette2.png',
    image2: 'src/table.png',
    image3: 'src/rack.png',
    image4: 'src/flask.png',
    image5: 'src/flask_liquid.png',
    image6: 'src/flask_liquid_after_change.png',
    image7: 'src/burette_stand.png',
    image8: 'src/burette knob off.png',
    image9: 'src/burette_knob_on.png',
    image10: 'src/mstirrer.png',
    image11: 'src/white.png',
    image12: 'src/rim.png',
    image13: 'src/drop.png',
    image14: 'src/colorless_sol.png',
    image15: 'src/indicator_bottle.png',
    image16: 'src/dropper.png',
    image17: 'src/indicatorbsolp.png',
    image18: 'src/indicatorbsolm.png',
    image19: 'src/colorchaangeafterph.png',
    image20: 'src/colorchaangeafterme.png',
    image21: 'src/flask_liquid_me.png',
    image22: 'src/blank_flask_liquid.png',
    image23: 'src/phenolname.png',
    image24: 'src/methylname.png'
};

loadImages(sources, function(images) {
    context.drawImage(images.image2, 100, 640, 820, 350);
    // context.drawImage(images.image14, 408, 290, 15, 205);
    context.drawImage(images.image1, 339, 265, 245, 350);
    // context.drawImage(images.image3, 1150, 440, 410, 450);
    context.globalAlpha = 0.7
    context.drawImage(images.image5, 316, 599, 217, 158);
    context.globalAlpha = 1
    context.drawImage(images.image4, 360, 617, 130, 110);
    //context.drawImage(images.image6, 320, 715, 150, 150);
    context.drawImage(images.image7, 160, 236, 540, 640);
    context.drawImage(images.image8, 422, 500, 35, 45);
    //context.drawImage(images.image9, 410, 537, 35, 45)
    context.drawImage(images.image10, 365, 695, 120, 120);
    // context.drawImage(images.image12, 404, 240, 20, 19);
    // context.drawImage(images.image16, 500, 625, 150, 160);
    // context.drawImage(images.image16, 600, 625, 150, 160);
    context.globalAlpha = 0.4
    context.drawImage(images.image17, 480, 616, 250, 250);
    context.drawImage(images.image18, 550, 616, 250, 250);
    context.globalAlpha = 1
    context.drawImage(images.image15, 480, 616, 250, 250);
    context.drawImage(images.image15, 550, 616, 250, 250);

    context.globalAlpha = 0.8
    context.drawImage(images.image23, 528, 790, 100, 40);
    context.drawImage(images.image24, 653, 790, 100, 40);
    context.globalAlpha = 1


});

var flask = document.getElementById('mask');
var h = 615;
var h2 = 300;

function start() {
    console.log('Start')
    document.getElementById("dropperm").style.display = "none";
    document.getElementById("dropperp").style.display = "none";



    loadImages(sources, function(images) {
        document.getElementById("drops").style.display = "block";
        context.drawImage(images.image4, 360, 617, 130, 110);
        context.drawImage(images.image9, 422, 500, 35, 45);
        // context.drawImage(images.image13, 408, h, 15, 15)

    })



    setTimeout(stop, 6000)

}




function stop() {
    if (methyladded == 1) {
        loadImages(sources, function(images) {
            context.drawImage(images.image22, 316, 599, 217, 158);

            context.drawImage(images.image21, 316, 599, 217, 158);
        });
        if (phenoadded == 1) {
            methyladded = 0;
        } else {
            methyladded = 1;
            phenoadded = 0;
        }
    } else {
        loadImages(sources, function(images) {
            context.drawImage(images.image22, 316, 599, 217, 158);
            context.drawImage(images.image5, 316, 599, 217, 158);
        });
    }

    console.log("STOP")
    var t = document.getElementById("burettesol").style.top;
    var top = t.slice(0, -2)
    t = parseInt(t) + 15;
    top = t.toString();
    top = top + "px"
    var h = burettesol.height;
    h = h - 10;
    burettesol.style.top = top
    burettesol.height = h;

    loadImages(sources, function(images) {
        document.getElementById("drops").style.display = "none";

        context.drawImage(images.image11, 432, 500, 35, 45)
        context.drawImage(images.image8, 422, 500, 35, 45);
        // context.drawImage(images.image11, 400, 635, 40, 100)
        context.drawImage(images.image4, 360, 617, 130, 110);
        // context.drawImage(images.image6, 324, 577, 187, 152);


    });
}

var p = document.getElementById('dropper1')
var m = document.getElementById('dropper2')

function addp() {
    phenoadded = 1

    document.getElementById("dropperm").style.display = "none";
    m.style.display = "block";


    var style = p.style.display;
    if (style === "block") {
        p.style.display = "none";
        document.getElementById("dropperp").style.display = "block";

    }

    loadImages(sources, function(images) {
        document.getElementById("dropsp").style.display = "block";
    });
    setTimeout(function stopdropper() {
        document.getElementById("dropsp").style.display = "none";
        document.getElementById("dropperp").style.display = "none";
        document.getElementById("dropper1").style.display = "block";
        loadImages(sources, function(images) {
            context.globalAlpha = 0.5
            context.drawImage(images.image22, 316, 599, 217, 158);

            context.drawImage(images.image19, 316, 599, 216, 162);
            context.globalAlpha = 1
        });
    }, 3000)
}

function addm() {
    methyladded = 1;
    document.getElementById("dropperp").style.display = "none";
    p.style.display = "block";

    var style = m.style.display;
    if (style === "block") {
        m.style.display = "none";
        document.getElementById("dropperm").style.display = "block";
    }

    loadImages(sources, function(images) {
        document.getElementById("dropsm").style.display = "block";
    });
    setTimeout(function stopdropper() {
        document.getElementById("dropsm").style.display = "none";
        document.getElementById("dropperm").style.display = "none";
        document.getElementById("dropper2").style.display = "block";
        loadImages(sources, function(images) {
            context.globalAlpha = 0.5
            context.drawImage(images.image22, 316, 599, 217, 158);

            context.drawImage(images.image20, 316, 594, 217, 162);
            context.globalAlpha = 1
        });
    }, 3000)
}