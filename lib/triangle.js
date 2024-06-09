const Shapes = require('./shapes');
class Triangle extends Shapes{
    constructor(text, color, shape){
        super(text, color);
        this.shape = "triangle";
    }
}

module.exports = Triangle;