const CLI = require('../lib/cli');

describe('CLI', () => {
    // Tests the logic of error handling when it comes to length
    describe('Length Error Handling', () => {
        it('should return true', () => {
            const cli = new CLI();
            const text = "ABC";
            expect(cli.checkLength(text)).toBe(true);
        }),
        it('should return Letters must be at most 3 in length, please try again!', () => {
            const cli = new CLI();
            const text = "ABCD";
            const result = "Letters must be at most 3 in length, please try again!";
            expect(cli.checkLength(text)).toBe(result);
        })
    })

    // Tests the logic of the color validator method 
    describe('checkValidColor Method', () => {
        it('should return true', () => {
            const cli = new CLI();
            const color = 'red'
            expect(cli.checkValidColor(color)).toBe(true);
        }),
        it('should return Invalid color please try again!', () => {
            const cli = new CLI();
            const color = 'Hello'
            result = "Invalid color please try again!";
            expect(cli.checkValidColor(color)).toBe(result);
        })
    })
  });