const curry = require('./curryFunc');

function adder(a,b,c){
	return a+b+c;
}

describe('The curry function', () => {
	it('Should return a function', () => {
		let result = curry(adder);
		expect(typeof result).toBe('function');
	});
});

describe('The  output function', () => {
	it('Should return a function if there are less than three arguments given', () => {
		let result = curry(adder);
		let result1 = result(56);
		expect(typeof result1).toBe('function');
		let result2 = result(56,76);
		expect(typeof result2).toBe('function');

	});
	it('Should return the sum of arguments if three arguments are passed', () => {
		let result = curry(adder);
		let result1 = result(56,76,87);
		expect(result1).toBe(210);
		expect(typeof result1).toBe('number');
	});
	it('Should return the sum of all three arguments even if passed later', () => {
		let result = curry(adder);
		let result1 = result(56,76)(87);
		expect(result1).toBe(210);
		result1 = result(56)(76,87);
		expect(result1).toBe(210);
		result1 = result(56)(76)(87);
		expect(result1).toBe(210);
	});
});