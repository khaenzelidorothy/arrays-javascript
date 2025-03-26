let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where",12,56];

console.log(arr1[arr1.length - 1]);
console.log(arr2[arr2.length - 1]);

const myPets = ["Cow", "Bird", "Snake", "Dog"];
const newPets = myPets.join(", ");
console.log(newPets); 
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort(function(a, b){return a - b});
console.log(arr3);

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
arr1 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(arr1);
arr2 = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(arr2);


let arr5 = ["the", "way", "x", 4];
let searchWord = arr5.indexOf("food") + 1;
console.log(searchWord);

let word = "renniw";
console.log(word.split("").sort().join("")); 

let fruits = ["mango","guavas","orange","apple","pineapple","blueberry","passion","avocado","watermelon","kiwi"];  
fruits.splice(5, 0, 'Tomato');
console.log(fruits);