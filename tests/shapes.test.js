const Shapes = require('../lib/shapes');

describe('Shapes', () => {
    // Tests error handling if no child class mutates the render method
    describe('Error Handling', () => {
        it('should throw an error that a child class must have its own render method rather than calling the parent method', () => {
            const shapes = new Shapes();
            const err = new Error('Children classes should have their own render function');
            expect(shapes.render).toThrow(err);
        })
    });

    // Tests the setColor Method
    describe('setColor Method', () => {
        it('should set color to red', () => {
            const shapes = new Shapes();
            shapes.setColor('red');
            const result = 'red'
            expect(shapes.color).toBe(result);
        })
    })
  });