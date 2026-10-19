class ExpVar {
    b : number = 20; // instance variable
static empid : number = 100; // static variable
//Non-static methods
    m1() : void {
        let a : number = 10; // local variable
        console.log("m1 method executed");
    //           number string - Data Type
        console.log(a  + "is local variable");
        console.log(ExpVar.empid + "is static variable");
    }
        m2() : void {
        console.log("m2 method executed");
        console.log(this.b,"is instance variable"); 
        console.log(ExpVar.empid + "is static variable");
    }
        m3() : void {
        console.log("m3 method executed");
        console.log(this.b,"is instance variable"); 
    }
    //Static method
    static m4() : void {
        console.log("m4-Static method executed");
       }
}
//Non-static methods : access by using object
let obj = new ExpVar();
obj.m1();
obj.m2();
obj.m3();
//Static method : access by using class name
ExpVar.m4();