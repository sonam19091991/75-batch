//Negative scenario with error 
try {
   let sub : number[]=[10,20,30,40,50];
   console.log(sub[12].toString()); // This will throw an error because sub[12] is undefined
} 
catch (error) {
    console.log("An error occurred:", error);
}
