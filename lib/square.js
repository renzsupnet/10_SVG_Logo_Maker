const Shapes = require('./shapes');
class Square extends Shapes{
    // Returns a square
    render(){
        return `<rect width="150" height="150" fill="${this.color}"/>`
    }
}

module.exports = Square;