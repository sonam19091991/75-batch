class A {
    a = 10;
    b = 20;
m1() : void {
    console.log("m1 method Exeuted");
}
}
class B extends A {
    x = 40;
    y = 50;
m2() : void {
    console.log("m2 method Exeuted");
    console.log(this.a + this.b);
}
}
class C extends B {
  m3() : void {
    console.log("m3 method Exeuted");
    console.log(this.x + this.y);   //class B
    console.log(this.a + this.b);   //class A
}  
}
let obj = new C();
obj.m1();
obj.m2();
obj.m3();