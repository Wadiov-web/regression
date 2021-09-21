let data = [];

function setup(){
    createCanvas(400, 400);
    
}

let m = 1;
let b = 0;

function linearRegression(){

    let xsum = 0;
    let ysum = 0;
    for (let i = 0; i < data.length; i++) {
        xsum += data[i].x;
        ysum += data[i].y;
    }
    let xavg = xsum / data.length;
    let yavg = ysum / data.length;

    let up = 0;
    let bottom = 0;
    for (let i = 0; i < data.length; i++) {
        let x = data[i].x;
        let y = data[i].y;

        up += (x - xavg) * (y - yavg);
        bottom += (x - xavg) * (x - xavg);
    }
    m = up / bottom;
    b = yavg - m * xavg;
}


function drawLine(){
    let x1 = 0;
    let y1 = m * x1 + b;
    let x2 = 1;
    let y2 = m * x2 + b;

    x1 = map(x1, 0, 1, 0, width);
    y1 = map(y1, 1, 0, 0, height);

    x2 = map(x2, 0, 1, 0, width);
    y2 = map(y2, 1, 0, 0, height);

    stroke(255, 255, 0)
    line(x1, y1, x2, y2)
}

function mouseClicked(){
    let x = map(mouseX, 0, width, 0, 1);
    let y = map(mouseY, 0, height, 1, 0);
    //let point = createVector(x, y);
    let point = {x, y};
    data.push(point);
}



function draw(){
    background(10);
    for (let i = 0; i < data.length; i++){
        let x = map(data[i].x, 0, 1, 0, width);
        let y = map(data[i].y, 1, 0, 0, height);

        fill(255);
        stroke(0)
        ellipse(x, y, 8, 8);
    }
    if (data.length > 1) {
        linearRegression();
        drawLine();
    }
}



























































































// let r = 0
// function draw(){
//     //image(img, 0 , 0)

//     loadPixels()
//     for(let y = 0; y < height; y++){
//         for(let x = 0; x < width; x++) {
//             let index = (x + y * width) * 4

//             pixels[index] = 50
//             pixels[index + 1] = 255
//             pixels[index + 2] = 200
//             pixels[index + 3] = 255

//             if(x > 300){
//                 pixels[index] = r
//                 pixels[index + 1] = r
//                 pixels[index + 2] = r
//                 pixels[index + 3] = 255
//             }
//         }
//         r += 2
//     }
//     updatePixels()
//     noLoop()
// }