const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    // Test the render method
    describe('Render Method', () => {
        it('should return <polygon points="150, 18 244, 182 56, 182" fill="blue"/>', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            const result = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
            expect(triangle.render()).toBe(result);
        })
    })
    // Test the setColor method
    describe('setColor Method', () => {
        it('should return set color to red', () => {
            const triangle = new Triangle();
            triangle.setColor('red');
            const result = 'red'
            expect(triangle.color).toBe(result);
        })
    })
  });