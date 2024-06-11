const Circle = require('../lib/circle');

describe('Circle', () => {
    // Tests the render method
    describe('Render Method', () => {
        it('should return <circle cx="150" cy="100" r="80" fill="blue"/>', () => {
            const circle = new Circle();
            circle.setColor('blue');
            const result = '<circle cx="150" cy="100" r="80" fill="blue"/>'
            expect(circle.render()).toBe(result);
        })
    })
    // Tests the setColor Method
    describe('setColor Method', () => {
        it('should return set color to red', () => {
            const circle = new Circle();
            circle.setColor('red');
            const result = 'red'
            expect(circle.color).toBe(result);
        })
    })
  });

  