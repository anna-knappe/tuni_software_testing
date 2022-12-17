import chai from "chai";
import toString from "../src/toString.js";

const expect = chai.expect

describe('toString', () => {
		it('null toString -> ', () => {
			expect(toString(null)).to.equal('')
		})
        it('-0 toString-> -0', () => {
			expect(toString(-0)).to.equal('-0')
		})
        it('[1, 2, 3] toString -> [1, 2, 3]', () => {
			expect(toString([1, 2, 3])).to.equal('1,2,3')
		})
});