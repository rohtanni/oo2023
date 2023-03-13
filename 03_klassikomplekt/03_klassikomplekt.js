var Resistor = /** @class */ (function () {
    function Resistor(r, g, startx, endx, y) {
        this.r = r;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 50;
        this.u = 11.38;
        this.i = 0;
        this.width = this.endx - this.startx;
        this.draw();
    }
    Resistor.prototype.draw = function () {
        this.g.clearRect(this.startx, this.y - this.height / 2, this.width, this.height);
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx + this.width / 4, this.y);
        this.g.rect(this.startx + this.width / 4, this.y - this.height / 4, this.width / 2, this.height / 2);
        this.g.moveTo(this.startx + this.width * 3 / 4, this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();
        this.g.fillText(this.r + " eur ", this.startx + this.width / 3, this.y + 3);
        this.g.fillText(this.u + " kurss " + this.i.toFixed(3), this.startx + this.width / 4, this.y - this.height / 4 - 2);
    };
    Resistor.prototype.setR = function (r) {
        this.r = r;
        this.i = this.u * this.r;
        this.draw();
    };
    Resistor.prototype.getR = function () {
        return this.r;
    };
    return Resistor;
}());
