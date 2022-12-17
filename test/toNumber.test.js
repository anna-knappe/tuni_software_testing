import chai from "chai";
import toNumber from "../src/toNumber.js";

const expect = chai.expect

describe('toNumber', () => {
		it('3.2 toNumber -> 3.2', () => {
			expect(toNumber(3.2)).to.equal(3.2)
		})
        it('Number.MIN_VALUE toNumber -> 5e-324', () => {
			expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
		})
        it('Infinity toNumber -> Infinity', () => {
			expect(toNumber(Infinity)).to.equal(Infinity)
		})
        it('"3.2" toNumber -> 3.2', () => {
			expect(toNumber('3.2')).to.equal(3.2)
		})
});