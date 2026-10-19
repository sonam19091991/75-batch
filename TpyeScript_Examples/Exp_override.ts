class override {
    add(a: number, b: number): void {
        console.log(a + b);
        console.log("Existin feature - old car");
    }

}
class override1 extends override {
    add(a: number, b: number): void {
        console.log(a - b);
        console.log("New feature - new car");
    }
}
let obj1 = new override1();
obj1.add(10, 5);