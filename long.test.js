const delay = require('./long');

describe('The delay function', () => {
	it('Should return a function if an argument of type num is passed', () => {
		let result = delay(56);
		expect(typeof result).toBe('function');
	});
});
describe('The output function ', ()=> {
	it('Should return the num of all previously passed arguments if no argument is passed', () => {
		let result = delay(56);
		let result1 = result(67);
		let result2 = result1();
		expect(result2).toBe(179);
	});
	it('Should return a function if an argument is passed', () => {
		let result = delay(56);
		let output = result(67);
		expect(typeof output).toBe('function');
	});
	
});