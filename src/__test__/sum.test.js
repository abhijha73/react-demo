import { sum } from "../utils/sum";

test("sum of 2 numbers", () => {
  const res = sum(2, 5);
  expect(res).toBe(7);
});
