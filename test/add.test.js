import chai from "chai";
import add from "../src/add.js";

const expect = chai.expect

describe('Addition', () => {
		it('1 + 1 should equal 2', () => {
			expect(add(1, 1)).to.equal(2)
		})
});