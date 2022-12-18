import chai from "chai";
import filter from "../src/filter.js";

const expect = chai.expect

const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'fred',   'active': false },
       { 'user': 'betty',   'active': false },
       { 'user': 'wilma',   'active': false }];

const noUsers = []

describe('Filter', () => {
		it("Filters active users", () => {
			expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }])
		})
		it("Filters inactive users", () => {
			expect(filter(users, ({ active }) => !active)).to.deep.equal([
				{ 'user': 'fred',   'active': false },
				{ 'user': 'betty',   'active': false },
				{ 'user': 'wilma',   'active': false }])
		})
		it("Returns an empty array when given an empty array", () => {
			expect(filter(noUsers, ({ active }) => active)).to.deep.equal([[]])
		})
});