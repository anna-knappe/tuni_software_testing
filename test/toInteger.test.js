import chai from "chai";
import toInteger from "../src/toInteger.js";

const expect = chai.expect

describe('toInteger', () => {
		it('3.2 toInteger -> 3', () => {
			expect(toInteger(3.2)).to.equal(3)
		})
        it('Number.MIN_VALUE toInteger -> 0', () => {
			expect(toInteger(Number.MIN_VALUE)).to.equal(0)
		})
        it('Infinity toInteger -> 1.7976931348623157e+308', () => {
			expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308)
		})
        it('"3.2" toInteger -> 3', () => {
			expect(toInteger('3.2')).to.equal(3)
		})
		it('-3.2 toInteger -> -3', () => {
			expect(toInteger(-3.2)).to.equal(-3)
		})
});