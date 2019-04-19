/* https://en.wikipedia.org/wiki/Maze_generation_algorithm */

let rows = 100;
let cols = 100;
let h = 0;
let w = 0;
let nodes;

let startNode;
let endNode;

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

            /* Set baudrier color */
            if (i == 0 || j == 0 || i == nodes.length -1 || j == nodes[i].length - 1) {
                nodes[i][j].setColor(color(19, 15, 64));
            }
        }
    }

    /* Create start and end nodes */
    /* The random starts at 1 and end before de boundary */
    startNode = nodes[0][floor(random(1, cols))];
    endNode = nodes[cols-1][floor(random(1, rows))];
    startNode.setColor(color(104, 109, 224));
    endNode.setColor(color(149, 175, 192));
}

function draw() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            nodes[i][j].draw();
        }
    }
}