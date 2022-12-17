import chai from "chai";
import get from "../src/get.js";

const expect = chai.expect

const object = { 'a': [{ 'b': { 'c': 3 } }] };

describe('Get', () => {
		it("Gets a[0].b.c -> 3", () => {
			expect(get(object, 'a[0].b.c')).to.equal(3)
		})
        it("Gets [a, 0, b, c] -> 3", () => {
			expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3)
		})
        it("Gets 'a.b.c', 'default' -> default", () => {
			expect(get(object, 'a.b.c', 'default')).to.equal('default')
		})
});