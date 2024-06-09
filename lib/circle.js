const Shapes = require('./shapes');
class Circle extends Shapes{
    constructor(text, color, shape){
        super(text, color);
        this.shape = "circle";
    }
}

module.exports = Circle;