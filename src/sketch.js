/* https://en.wikipedia.org/wiki/Maze_generation_algorithm */

let rows = 20;
let cols = 20;
let y = 0;
let x = 0;
let nodes;

var xSize = 700;
var ySize = 700;

let startNode;
let endNode;

function setup() {
    /* Canvas */
    var canvas = createCanvas(xSize, ySize);
    canvas.parent('mainCanvas');
    background(255);

    /* size */
    x = floor(width / cols);
    y = floor(height / rows);
    
    /* Create array of nodes */
    nodes = new Array(rows);
    for (let i = 0; i < nodes.length; i++) {
        nodes[i] = new Array(cols);
        for (let j = 0; j < nodes[i].length; j++) {
            nodes[i][j] = new Node(x * i, y * j, y, x);

            // /* Set baudrier color */
            // if (i == 0 || j == 0 || i == nodes.length -1 || j == nodes[i].length - 1) {
            //     nodes[i][j].setColor(color(19, 15, 64));
            // }
        }
    }

    /* Create start and end nodes */
    /* The random starts at 1 and end before de boundary */
    startNode = nodes[0][floor(random(1, cols))];
    endNode = nodes[cols-1][floor(random(1, rows))];
    startNode.setColor(color(104, 109, 224));
    endNode.setColor(color(149, 175, 192));

    /* Debug porpuses */
    noLoop();
}

function createMaze(currentNode) {
    
}

function draw() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            nodes[i][j].draw();
        }
    }
}