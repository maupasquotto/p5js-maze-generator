class Node {
    tWall = true;
    rWall = true;
    dWall = true;

    color = 255;

    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    setColor(color) {
        this.color = color;

        fill(this.color);
        square(this.x, this.y, this.h);
    }

    draw() {
        let strokeW = 1;

        // Top
        if (this.tWall) {
            strokeWeight(strokeW);
            line(this.x, this.y, this.x + this.w, this.y);
        }

        // Right
        if (this.rWall){
            strokeWeight(strokeW);
            line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
        }

        // Down
        if (this.dWall) {
            strokeWeight(strokeW);
            line(this.x, this.y + this.h, this.x + this.w, this.y + this.h);
        }
    }
}
