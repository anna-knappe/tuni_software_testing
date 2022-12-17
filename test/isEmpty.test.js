import chai from "chai";
import isEmpty from "../src/isEmpty.js";

const expect = chai.expect

describe('isEmpty', () => {
		it('null isEmpty -> true', () => {
			expect(isEmpty(null)).to.equal(true)
		})
        it('1 isEmpty -> true', () => {
			expect(isEmpty(1)).to.equal(true)
		})
        it('[1, 2, 3] isEmpty -> false', () => {
			expect(isEmpty([1, 2, 3])).to.equal(false)
		})
        it('abc isEmpty -> false', () => {
			expect(isEmpty('abc')).to.equal(false)
		})
        it('{ a : 1 } isEmpty -> false', () => {
			expect(isEmpty({ 'a': 1 })).to.equal(false)
		})
});