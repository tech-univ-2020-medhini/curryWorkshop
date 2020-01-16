const call = require('./callApply');

let update = function(name, age, tShirtSize) {
	this.name = name;
	this.age = age;
	this.tShirtSize = tShirtSize;
};
const person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

describe('The caller function inside the object', () => {
	it('Should return nothing', () => {
		let result = call.caller(update, person, 'Sharma', 29, 'XL');
		expect(typeof result).toBe('undefined');
	});
	it('Should run the function that is passed', () => {
		update = jest.fn();
		call.caller(update, person, 'Sharma', 29, 'XL');
		expect(update).toBeCalledTimes(1);
	});
	it('Should appy the function that is passed onto the object', () => {
		call.caller(update, person, 'Sharma', 29, 'XL');
		expect(person).toEqual({ name: 'Sharma', age: 29, tShirtSize: 'XL' });
	});
});