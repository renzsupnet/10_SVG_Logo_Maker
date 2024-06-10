const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

class CLI {
    constructor(){

    }

    getShape(shape){
        switch(shape){
            case 'Triangle':
                shape = new Triangle();
                return shape;
            case 'Circle':
                shape = new Circle();
                return shape;
            case 'Square':
                shape = new Square();
                return shape;
            default:
                throw new Error("Invalid shape received!");
        }
    }

    renderLogo(shape, color, letters){
        shape.setColor(color);
        let textColor = "white";
        if(color === 'White' || color === 'white'){
            textColor = "black";
        }
        writeFile('./examples/logo.svg', `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

           ${shape.render()}
                       
           <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${letters}</text>
                       
       </svg>`, 'utf-8'); 
       console.log("Generated logo.svg");
    }

    checkLength(letters){
        if(letters.length > 3){
            return "Letters must be at most 3 in length, please try again!";
        }
        else{
            return true;
        }
    }

    run(){
        const questions = [
            {
                type: "input",
                name: "letters",
                message: "Please enter up to 3 letters for your logo.",
                validate: this.checkLength
            },
            {
                type: "input",
                name: "color",
                message: "Please enter the color."
            },
            {
                type: "list",
                name: "shape",
                message: "Choose a shape.",
                choices: ["Circle", "Triangle", "Square"]
            }
        ];
        
        return inquirer.prompt(questions)
        .then((answers) => {
          const shape = this.getShape(answers.shape);
          this.renderLogo(shape, answers.color, answers.letters);
        });
    }
    

}

module.exports = CLI;