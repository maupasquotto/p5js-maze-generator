class Node {
    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.color = 255;
    }

    setColor(color) {
        this.color = color;
    }

    draw() {
        fill(this.color);
        square(this.x, this.y, this.h);
    }
}
