import chai from "chai";
import defaultTo from "../src/defaultTo.js";

const expect = chai.expect

describe('defaultTo', () => {
		it("defaultTo(1, 10) => 1", () => {
			expect(defaultTo(1, 10)).to.equal(1)
		})
		it("defaultTo(undefined, 10) => 10", () => {
			expect(defaultTo(undefined, 10)).to.equal(10)
		})
		it("defaultTo(null, -10) => -10", () => {
			expect(defaultTo(null, -10)).to.equal(-10)
		})
		it("defaultTo(NaN, -999.9) => -999.9", () => {
			expect(defaultTo(NaN, -999.9)).to.equal(-999.9)
		})
		it("defaultTo(0, 200) => 0", () => {
			expect(defaultTo(0, 200)).to.equal(0)
		})
});