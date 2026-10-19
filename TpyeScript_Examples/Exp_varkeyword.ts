//const variable keyword
const a : number = 10;
//a : number = 20; // Error: Cannot assign to 'a' because it is a constant.
//const a : number = 30; // Error: Cannot redeclare block-scoped variable 'a'.
console.log(a); // Output: 10

//let variable keyword
let b : number = 10;
    b = 20; // we can reassign the value of 'b' because it is declared with 'let'.
//let b : number = 30; // Error: Cannot redeclare block-scoped variable 'b'.
console.log(b); // Output: 20

//var variable keyword : in real time this is not suggested
var c : number = 10;
    c = 20; // we can reassign the value of 'c' because it is declared with 'var'.
var c : number = 30; // we can redeclare the variable 'c' because it is declared with 'var'.
console.log(c); // Output: 30





