const threenum = require('./threenum');

describe('The function', () => {
	it('Should return a function if there are less than three arguments given', () => {
		let result = threenum(55);
		expect(typeof result).toBe('function');
		result = threenum(56,67);
		expect(typeof result).toBe('function');
	});
	it('Should be equal to the sum of arguments if three arguments are passed', () => {
		let result = threenum(56,67,87);
		expect(result).toBe(210);
	});
});
describe('The first output function should', () => {
	it('Should return a function if there are less than two arguments given', () => {
		let result = threenum(56);
		let result1 = result(67);
		expect(typeof result1).toBe('function');
	});
	it('Should be equal to the sum of arguments if two arguments are passed', () => {
		let result = threenum(56);
		let result1 = result(67,83);
		expect(result1).toBe(210);
	});
});
describe('The second output function should', () => {
	it('Should return a function if there are less than two arguments given', () => {
		let result = threenum(56);
		let result1 = result(67);
		expect(typeof result1).toBe('function');
	});
	it('Should be equal to the sum of arguments if two arguments are passed', () => {
		let result = threenum(56);
		let result1 = result(67,83);
		expect(result1).toBe(210);
	});
});