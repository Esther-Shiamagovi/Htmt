//extraction of character from a string
let b = "extravaganza"
console.log('item',b[8]);
console.log('item',b[9]);
console.log('item',b[10]);
console.log('item',b[11]);
//Sliced to add eat ady added the whole string to the remaining part
const food ="The quick fox jumped over the lazy dog";
console.log(food.slice(0,4) + "eat" + food.slice(4) );

//counting the number of times the string appears in a string by matching is
const story = "The quick brown fox jumped over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/g).length);
//finding a word in a string
const string1="The pupils are reading in the library";
const string2="The child was sitting on the table before it fell";

let result1=string1.search("are");
let result2=string2.search("sitting");

console.log(result1);
console.log(result2);

//Turning strings to different forms using in built functions
let a = "wonderful";
console.log(b.toUpperCase());
let d = "amazing";
console.log(d.toLowerCase());
let c = "undERneath";
console.log(c.toLowerCase());
let f = "A wonderfull world";
console.log(f.replace("w",'W') );



