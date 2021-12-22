//👉 Write your tests below here:
import { backOfTheLine, array } from "./main.js";

// backOfTheLine()

test("The fuction should return the same array but with Chris taken from the start and put into the end",  function(){
const actual = backOfTheLine(array)
const expected = [
    "Liz", "Arshi", "Jordan", "Jasien", "Chris M", "Dave", "Abdullah", "Hamza", "Chris"
]

expect(actual).toStrictEqual(expected);
});
