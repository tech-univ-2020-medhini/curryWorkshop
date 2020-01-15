const identity = require('./identity');

describe('The identity function', () => {
	it('Should return a value of the same type as the argument', () => {
		let result = identity(56);
		expect(typeof result).toBe('number');
		result = identity('Hello');
		expect(typeof result).toBe('string');
		result = identity([1,2,3]);
		expect(typeof result).toBe('object');
	});
	it('Should be equal to the argument passed', () => {
		let result = identity(56);
		expect(result).toBe(56);
		result = identity('Hello');
		expect(result).toBe('Hello');
		result = identity([1,2,3]);
		expect(result).toEqual([1,2,3]);
	});
});