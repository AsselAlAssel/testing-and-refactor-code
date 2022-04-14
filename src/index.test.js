import { main } from "./index.js";
import * as matchers from 'jest-extended';
expect.extend(matchers);


describe("testing on main function", () => {
  it("call main without argument", () => {
    expect(() => main()).toThrow();
  });

  it("call main with empty array", () => {
    expect(main([])).toBeUndefined();
  });

  it("call main with array have 1 statement and  contain 1 word start with small letter", () => {
    expect(main(["hello"])).toIncludeSameMembers([]);
  });

  it("call main with array 1 statement but contain 1 word state with capital", () => {
    expect(main(["Hello"])).toIncludeSameMembers([]);
  });

  it("call main with array 1 element start with small letter", () => {
    expect(main(["hello from me"])).toIncludeSameMembers(['01 "Hello from me"']);
  });

  it("call main with 1 array statement  start with capital letter", () => {
    expect(main(["Hello from me"])).toIncludeSameMembers(['01 "Hello from me"']);
  });


  it("call main with many statements but all statements are same (uncase sensitive)", () => {
    expect(main(["Hello from me", "hello from me", "hello From Me",])).toIncludeSameMembers(['01 "Hello from me"']);
  });

  it("call main with many statements (sort the array ass)", () => {
    expect(main(["Hello from me", "hello from you", "hello From him"])).toIncludeSameMembers(['01 "Hello From him"', '02 "Hello from me"', '03 "Hello from you"']);
  });

  it("call main with array has many statements has one word or multiple", () => {
    expect(main(["Hello from me", "Hello from me", "hello", "hello from you", "hello From him"])).toIncludeSameMembers(['01 "Hello From him"', '02 "Hello from me"', '03 "Hello from you"']);
  });
});
