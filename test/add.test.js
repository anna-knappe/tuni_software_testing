import chai from "chai";
import add from "../src/add.js";

const expect = chai.expect

describe('Addition', () => {
		it('6 + 4 should equal 10', () => {
			expect(add(6, 4)).to.equal(10)
		})
		it('6 + -4 should equal 2', () => {
			expect(add(6, -4)).to.equal(2)
		})
		it('5.5 + 6.6 should equal 12.1', () =>{
			expect(add(5.5, 6.6)).to.equal(12.1)
		})
		it('0.00001 + 100200 should equal 100200.00001', () =>{
			expect(add(0.00001, 100200)).to.equal(100200.00001)
		})
		it('0 + 0 should equal 0', () =>{
			expect(add(0, 0)).to.equal(0)
		})
		it('999 + 0 should equal 999', () =>{
			expect(add(999, 0)).to.equal(999)
		})
});