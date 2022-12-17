import chai from "chai";
import defaultTo from "../src/defaultTo.js";

const expect = chai.expect

describe('defaultTo', () => {
		it("defaultTo(1, 10) => 1", () => {
			expect(defaultTo(1, 10)).to.equal(1)
		})
		it("defaultTo(1, 10) => 1", () => {
			expect(defaultTo(undefined, 10)).to.equal(10)
		})
});