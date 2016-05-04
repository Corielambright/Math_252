// tell jasmine what file we'll be testing
var math = require("../math");

// describe the program we're testing
describe("A program that does simple arithmetic", function() {

	it("can add two numbers together", function() {
		expect(math.add(3,5)).toBe(8);
		expect(math.add(5,5)).toBe(10);
		expect(math.add(3.2,5.7)).toBe(8.9);
		expect(math.add(3,-5)).toBe(-2);
	});

	it("can subtract two numbers", function() {
		expect(math.subtract(3,5)).toBe(-2);
		expect(math.subtract(5,5)).toBe(0);
		expect(math.subtract(3.2,5.7)).toBe(-2.5);
		expect(math.subtract(3,-5)).toBe(8);
	});

	it("can divide two numbers", function() {
		expect(math.divide(3,5)).toBe(0.6);
		expect(math.divide(5,5)).toBe(1);
		expect(math.divide(3.2,1.6)).toBe(2);
		expect(math.divide(3,0)).toBe("Error: Division by zero.");
	});

});
