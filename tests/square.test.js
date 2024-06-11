const Square = require('../lib/square');

describe('Square', () => {
    // Test the render method
    describe('Render Method', () => {
        it('should return <rect width="150" height="150" fill="blue"/>', () => {
            const square = new Square();
            square.setColor('blue');
            const result = '<rect width="150" height="150" fill="blue"/>'
            expect(square.render()).toBe(result);
        })
    })
    // Test the setColor method
    describe('setColor Method', () => {
        it('should return set color to red', () => {
            const square = new Square();
            square.setColor('red');
            const result = 'red'
            expect(square.color).toBe(result);
        })
    })
  });