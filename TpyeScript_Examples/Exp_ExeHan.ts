try {
    let name : any = null;
    console.log(name.length()); // This will throw an error because 'name' is null
} 
catch (error) {
    console.log("An error occurred:", error);
}