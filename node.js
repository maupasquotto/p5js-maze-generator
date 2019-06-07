class Node {
    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.color = 255;

        /* Maze */
        this.wallDirections = ['S', 'W', 'E', 'N'];
        this.visited = false;
    }

    setColor(color) {
        this.color = color;
    }

    draw() {
        push();
        fill(this.color);
        noStroke();
        square(this.x, this.y, this.h);
        pop();

        /* Draw borders */
        if (this.wallDirections.indexOf('W') !== -1) {
            line(this.x, this.y, this.x, this.y + this.h);
        }

        if (this.wallDirections.indexOf('N') !== -1) {
            line(this.x, this.y, this.x + this.w, this.y);
        }

        if (this.wallDirections.indexOf('E') !== -1) {
            line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
        }

        if (this.wallDirections.indexOf('S') !== -1) {
            line(this.x, this.y + this.h, this.x + this.w, this.y + this.h);
        }
    }

    removeWall(wall) {
        let index = this.wallDirections.indexOf(wall.toUpperCase());
        if (index > -1) {
            delete this.wallDirections[index];
        }
    }

    setVisited(visited) {
        this.visited = !!visited;
    }
}
