// Required imports
const inquirer = require('inquirer');
const validateColor = require('validate-color').default;
const { writeFile } = require('fs/promises');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

class CLI {
    constructor(){

    }
    // Return the chosen shape
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

    // Makes the SVG Logo using the user input as params
    renderLogo(shape, color, letters, letterColor){
        shape.setColor(color);
        
        writeFile('./examples/logo.svg', `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

           ${shape.render()}
                       
           <text x="150" y="125" font-size="60" text-anchor="middle" fill="${letterColor}">${letters}</text>
                       
       </svg>`, 'utf-8'); 
       console.log("Generated logo.svg");
    }

    // Error Handling to prevent letters input from being more then 3 in length
    checkLength(letters){
        if(letters.length > 3){
            return "Letters must be at most 3 in length, please try again!";
        }
        else{
            return true;
        }
    }

    // Uses the npm package validate color to verify if the input is a valid color or not
    checkValidColor(color){
        if(!validateColor(color)){
            return "Invalid color please try again!"
        }
        else{
            return  true;
        }
    }

    // Runs the inquirer prompt method to asks questions
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
                name: "letterColor",
                message: "Please enter the text color.",
                validate: this.checkValidColor
            },
            {
                type: "list",
                name: "shape",
                message: "Choose a shape.",
                choices: ["Circle", "Triangle", "Square"]
            },
            {
                type: "input",
                name: "color",
                message: "Please enter the shape color.",
                validate: this.checkValidColor
            }
        ];
        
        return inquirer.prompt(questions)
        .then((answers) => {
          const shape = this.getShape(answers.shape);
          this.renderLogo(shape, answers.color, answers.letters, answers.letterColor);
        });
    }
    

}

module.exports = CLI;