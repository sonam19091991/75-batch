let a : number = 10;
let b : number = 20;
let choice : number = 3;

switch(choice){
    case 1:
        console.log("Addition: " + (a + b));
        break;
    case 2:
        console.log("Subtraction: " + (a - b));
        break;
    case 3:
        console.log("Multiplication: " + (a * b));
        break;
    case 4:
        console.log("Division: " + (a / b));
        break;
    default:
        console.log("Invalid choice");
}
// asper the choice selection number output is getting 