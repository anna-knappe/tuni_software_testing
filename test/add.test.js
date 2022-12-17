import chai from "chai";
import add from "../src/add.js";

const expect = chai.expect

describe('Addition', () => {
		it('6 + 4 should equal 10', () => {
			expect(add(6, 4)).to.equal(10)
		})
});