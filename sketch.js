let rows = 10;
let cols = 10;
let h = 0;
let w = 0;

let r = 0;
let g = 0;
let b = 0;
let hue = 0;

let nodes;

function setup() {
    /* Canvas */
    createCanvas(900, 900);
    background(0);

    /* size */
    h = floor(height / rows);
    w = floor(width / cols);

    /* Colors */
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    hue = random(0, 255);

    /* Create array of nodes */
    nodes = new Array(cols);
    for (let i = 0; i < nodes.length; i++) {
        nodes[i] = new Array(rows);
        for (let j = 0; j < nodes[i].length; j++) {
            nodes[i][j] = new Node(w * i, h * j, h, w);
        }
    }
}

function draw() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            nodes[i][j].draw();
        }
    }
}