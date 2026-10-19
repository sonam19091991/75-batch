//Primitive Data Types - number , string , boolean , null , undefined
//Varibale-Keyword Variable name Data type = value
const num: number = 42;
const str: string = "Suresh IT Academy!";
const bool: boolean = true;
const n: null = null;
const u: undefined = undefined;
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Null:", n);
console.log("Undefined:", u);

//non-primitive data types - array , tuple
const arr: number[] = [1, 2, 3, 4, 5];
console.log("Array:", arr);
const tuple: [string, number] = ["Suresh IT Academy", 42];
console.log("Tuple:", tuple);

//specific data types - any
let anyVar: any = "Hello";
console.log("Any Variable:", anyVar);