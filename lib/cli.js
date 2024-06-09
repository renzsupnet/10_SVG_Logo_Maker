const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');
const questions = [
    {
        type: "input",
        name: "letters",
        message: "Please enter up to 3 letters for your logo."
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

class CLI {
    constructor(){

    }

    run(){
        return inquirer.prompt(questions)
        .then((answers) => {
            let shape;
            switch(answers.shape){
                case 'Triangle':
                    shape = new Triangle(answers.letters, answers.color);
                case 'Circle':
                    shape = new Circle(answers.letters, answers.color);
                case 'Square':
                    shape = new Square(answers.letters, answers.color);
            }
           writeFile('./examples/logo.svg', `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

           <circle cx="150" cy="100" r="80" fill="green" />
                       
           <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
                       
       </svg>`, 'utf-8'); 
       console.log("Generated logo.svg");
       console.log(shape);
        });
    }
}

module.exports = CLI;