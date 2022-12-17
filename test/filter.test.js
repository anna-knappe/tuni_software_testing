import chai from "chai";
import filter from "../src/filter.js";

const expect = chai.expect

const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'fred',   'active': false }];

describe('Filter', () => {
		it("Filters active users", () => {
			expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }])
		})
});