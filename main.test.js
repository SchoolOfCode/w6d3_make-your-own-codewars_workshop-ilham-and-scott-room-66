//👉 Write your tests below here:
import { backOfTheLine, array } from "./main.js";

test("The fuction should return the same array but with Chris taken from the start and put into the end",  function(){
const actual = backOfTheLine(array)
const expected = [
    {name:"Liz"}, {name:"Arshi"}, {name:"Jordan"}, {name:"Jasien"}, {name:"Chris M"}, {name:"Dave"}, {name:"Abdullah"}, {name:"Hamza"}, {name: "Chris"}
]

expect(actual).toStrictEqual(expected);
});
