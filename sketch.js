/* https://en.wikipedia.org/wiki/Maze_generation_algorithm */

let rows = 100;
let cols = 100;
let y = 0;
let x = 0;
let nodes;

let startNode;
let endNode;

function setup() 
{
    /* Canvas */
    createCanvas(900, 900);
    background(0);

    /* size */
    x = floor(width / cols);
    y = floor(height / rows);
    
    /* Create array of nodes */
    nodes = new Array(rows);
    for (let i = 0; i < nodes.length; i++) {
        nodes[i] = new Array(cols);
        for (let j = 0; j < nodes[i].length; j++) {
            nodes[i][j] = new Node(x * i, y * j, y, x);

            /* Set baudrier color */
            // if (i == 0 || j == 0 || i == nodes.length -1 || j == nodes[i].length - 1) {
            //     nodes[i][j].setColor(color(19, 15, 64));
            // }
        }
    }

    /* Create start and end nodes */
    /* The random starts at 1 and end before de boundary */
    // startNode = nodes[0][floor(random(1, cols))];
    // endNode = nodes[cols-1][floor(random(1, rows))];
    // startNode.setColor(color(104, 109, 224));
    // endNode.setColor(color(149, 175, 192));

    implementsMaze();

    /* Debug porpuses */
    noLoop();
}

//Aldous-Broder Algorithm
function implementsMaze()
{
    let mX = floor(random(0, rows+1)); // Plus one to include the last row/column
    let mY = floor(random(0, cols+1)); // Plus one to include the last row/column
    let DX = {'E': 1, 'W': -1, 'N': 0, 'S': 0};
    let DY = {'E': 0, 'W': 0, 'N': -1, 'S': 1};
    let opposite = {'E': 'W', 'W': 'E', 'N': 'S', 'S': 'N'};
    let remaining = rows * cols;
    let directions = ['N', 'S', 'E', 'W'];
    let nx = 0, ny = 0;

    while (remaining > 0) {
        directions = shuffle(directions);

        for(let i = 0; i < directions.length; i++) {
            nx = mX + DX[directions[i]];
            ny = mY + DY[directions[i]];
            if (nx >= 0 && ny >= 0 && nx < cols && ny < rows) {
                if (!nodes[nx][ny].visited) {
                    nodes[nx][ny].setColor(color(255,0,0));
                    nodes[nx][ny].setVisited(true);

                    nodes[mX][mY].removeWall(directions[i]);
                    nodes[nx][ny].removeWall(opposite[directions[i]]);
                    
                    remaining--;
                }

                mX = nx;
                mY = ny;
                break;
            }
        }
    }
}

function draw() 
{
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            nodes[i][j].draw();
        }
    }
}