const Shapes = require('./shapes');
class Square extends Shapes{
    constructor(text, color, shape){
        super(text, color);
        this.shape = "square";
    }
}

module.exports = Square;