class Shapes{
    constructor(){
    }
    // Returns an error if no child mutates the render method
    render(){
        throw new Error('Children classes should have their own render function');
    }
    // Sets the color of the shape
    setColor(color){
        this.color = color;
    }
}

const shapes = new Shapes();

module.exports = Shapes;