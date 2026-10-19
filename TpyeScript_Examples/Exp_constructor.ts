class exp_const {
    constructor() {
        console.log("Constructor executed");
    }
    m1(): void {
        console.log("m1 method executed");
    }
}
let obj = new exp_const();
obj.m1(); // add this after constructor run --call methos