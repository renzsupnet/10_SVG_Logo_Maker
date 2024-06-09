class Shapes{
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    render(){
        throw new Error("Children classes should have their own render function");
    }
}


module.exports = Shapes;