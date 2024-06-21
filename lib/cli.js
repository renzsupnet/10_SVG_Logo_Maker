// Required imports
const inquirer = require('inquirer');
const validateColor = require('validate-color').default;
const { writeFile } = require('fs/promises');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

class CLI {
    constructor(){
        this.validShapes = ['Triangle', 'Circle', 'Square'];
    }
    // Return the chosen shape
    getShape(shape){
        if(this.validShapes.includes(shape)){
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
        }else{
            throw new Error("Invalid shape received!");
        }
    }

    // Makes the SVG Logo using the user input as params
    renderLogo(shape, color, letters, letterColor){
        try {
            // Check if setColor method exists in shape as expected
            if('setColor' in shape){
                shape.setColor(color);
            
                writeFile('./examples/logo.svg', `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
                ${shape.render()}
                            
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${letterColor}">${letters}</text>
                            
            </svg>`, 'utf-8'); 
            console.log("Generated logo.svg");
            }
            else{
                throw new Error("Shape failed to inherit setColor or is an invalid Shape Object!")
            }
        } catch (error) {
            throw new Error(`Error has occured: ${error.message}`);
        }

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
    async run(){
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
        
        /* async await to make sure the methods are finished before moving to the next one */
        const results = await inquirer.prompt(questions);
        const shape = await(this.getShape(results.shape));
        const render = await this.renderLogo(shape, results.color, results.letters, results.letterColor);
        return render;
    }
    

}

module.exports = CLI;

