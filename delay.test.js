const delay = require('./delay');

describe('The delay function', () => {
	it('Should return a function', () => {
		let result = delay(56);
		expect(typeof result).toBe('function');
	});
	it('Should be equal to the argument passed', () => {
		let result = delay(56);
		expect(result).toBe(56);
		result = delay('Hello');
		expect(result).toBe('Hello');
		result = delay([1,2,3]);
		expect(result).toEqual([1,2,3]);
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