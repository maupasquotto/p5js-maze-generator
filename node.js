class Node {
    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    draw() {
        fill(255);
        square(this.x, this.y, this.h);
    }
}
