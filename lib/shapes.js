class Shapes{
    constructor(){
    }

    render(){
        throw new Error('Children classes should have their own render function');
    }

    setColor(color){
        this.color = color;
    }
}


module.exports = Shapes;