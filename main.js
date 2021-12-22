/* 
👉 Write your kata here!
*/
//Make an array of objects, the task we want the victim to do is take the first 2 names from the array and insert them at the end of the array.
export let array = [
    "Chris", "Liz", "Arshi", "Jordan", "Jasien", "Chris M", "Dave", "Abdullah", "Hamza"
];

export function backOfTheLine (array){
 let array2 = array.shift();
 array.push(array2);
 return array
};


//👉 Write the function your CodeWarriors will start with below here:

// function backOfTheLine (array){
//     //Write your code here...  
// }