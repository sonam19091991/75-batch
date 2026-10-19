class ExpVar {
    b : number = 20; // instance variable
static empid : number = 100; // static variable
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
}
let obj = new ExpVar();
obj.m1();
obj.m2();
obj.m3();