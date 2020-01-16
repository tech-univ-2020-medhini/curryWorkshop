const delay = require('./delay');

describe('The delay function', () => {
	it('Should return a function', () => {
		let result = delay(56);
		expect(typeof result).toBe('function');
	});
});
describe('The output function ', ()=> {
	it('Should return a vaue of type number', () => {
		let result = delay(56);
		let output = result(67);
		expect(typeof output).toBe('number');
	});
	it('Should return the num of both arguments', () => {
		let result = delay(56);
		let output = result(67);
		expect(output).toBe(123);
	});
});