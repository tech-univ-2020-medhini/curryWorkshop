const binary = require('./binary');

describe('The binary function', () => {
	it('Should return a value of type number', () => {
		let result = binary(56,67);
		expect(typeof result).toBe('number');

	});
	it('Should be equal to the sum of arguments passed', () => {
		let result = binary(56,67);
		expect(result).toBe(123);
	});
});